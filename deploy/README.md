# Coolify deployment

This is a static website with a build step. The root Dockerfile builds the
invitation and its shared design system, then copies only the finished website
and public media into nginx. No backend, database, storage credentials, or
runtime Node server is needed.

## Coolify settings

- Repository: `lannylerner7-cyber/Dinner-Invitation-Card`
- Branch: `main`
- Build pack: **Dockerfile** (not Static)
- Base directory / build context: `/` (repository root)
- Dockerfile location: `/Dockerfile`
- Docker build target: leave empty (the final stage is `production`)
- Ports exposes: `80`
- Domain: your chosen website domain, routed to port 80

Save, then redeploy after these files are on GitHub. Do not mount a persistent
volume over `/usr/share/nginx/html`: that would hide the built website.
The old Static build pack's custom nginx field is no longer used; edit
`deploy/nginx.conf` instead. No custom install/start commands are needed.

The build uses pnpm 10.26.1 and the frozen lockfile. It targets a Linux x86-64
server because the existing workspace excludes ARM native build dependencies.
Use a Debian/glibc Node builder; the workspace excludes musl build dependencies.
The nginx runtime can use Alpine because it serves already-built static files.

## Check after deployment

- `/` shows the invitation, not the nginx welcome page.
- `/media/dinner-night.mp4` loads the background video.
- `/media/dinner-poster.jpg` loads the poster.
- Missing files in `/assets/` and `/media/` return 404.
- The Google button opens Google.com.

For a machine with Docker installed:

```sh
docker build -t dinner-invitation .
docker run --rm -p 8080:80 dinner-invitation
```
