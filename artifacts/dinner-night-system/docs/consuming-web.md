# Consuming Dinner Night on web

Read docs/AGENTS.md first. Existing screens require user approval before migration.

Add @workspace/dinner-night-system as a workspace:* dev dependency. Import @workspace/dinner-night-system/styles.css once from main CSS. Components import their scoped styling automatically.

```tsx
import { InvitationCard } from "@workspace/dinner-night-system/components/ui/invitation-card";
import { InvitationHeading, InvitationText } from "@workspace/dinner-night-system/components/ui/invitation-text";
import { InvitationLink } from "@workspace/dinner-night-system/components/ui/invitation-link";
```

Card forwards native article props. Heading forwards h1 props. Text forwards p props and variant: body (default), eyebrow, label, details, note, footer. Link forwards native anchor props; caller owns href, content, optional icon and target. There are no auth, toast, input, or button APIs.

Render one InvitationCard and typecheck before broader migration. Import cn from the package lib/utils only if needed. Dark uses the .dark class on a parent and is a derived extension. System fonts use the same fallbacks as the original invitation.
