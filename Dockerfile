# Build from the repository root. The workspace's native dependencies target
# Linux x64/glibc, so use Debian rather than Alpine for the Node build stage.
FROM node:24-bookworm-slim AS build
WORKDIR /app
RUN npm install --global pnpm@10.26.1

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY artifacts/dinner-invitation/package.json artifacts/dinner-invitation/package.json
COPY artifacts/dinner-night-system/package.json artifacts/dinner-night-system/package.json
RUN pnpm install --frozen-lockfile

COPY tsconfig.base.json ./
COPY artifacts/dinner-invitation/ artifacts/dinner-invitation/
COPY artifacts/dinner-night-system/ artifacts/dinner-night-system/
RUN pnpm --filter @workspace/dinner-night-system run tokens \
    && PORT=3000 BASE_PATH=/ NODE_ENV=production pnpm --filter @workspace/dinner-invitation run build \
    && test -s artifacts/dinner-invitation/dist/public/index.html \
    && test -s artifacts/dinner-invitation/dist/public/media/dinner-night.mp4

FROM nginx:stable-alpine AS production
RUN rm -rf /usr/share/nginx/html/*
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/artifacts/dinner-invitation/dist/public/ /usr/share/nginx/html/
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget -q -O /dev/null http://127.0.0.1/ || exit 1
CMD ["nginx", "-g", "daemon off;"]
