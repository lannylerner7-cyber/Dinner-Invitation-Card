---
name: Invitation scope
description: User intent and background media constraint for the dinner invitation.
---
The user now wants “Continue with Google” to navigate to Google.com, replacing the earlier href="#" placeholder request. This is an external link, not real authentication. The invitation should be visitable rather than file-only. Preserve the personally invited and RSVP wording.

**Why:** These are explicit product requirements, not a request to implement sign-in.

**How to apply:** Keep the Google.com destination unless the user changes it; do not infer a request for real authentication.

The user requested a minimal card fitting phone, tablet and desktop, over a silent 15-second dinner background, and selected standard 720p quality.

**Why:** The original tall invitation was unsuitable for the intended compact mobile view.

**How to apply:** Keep responsive readability and the Google action visible; allow scrolling on short screens.

Video generation was overloaded on two attempts. The current background uses a generated dinner photograph with a gentle 15-second camera-motion loop, disclosed to the user, rather than live-action generated footage.

**Why:** This delivered a working animated background despite unavailable video generation.

**How to apply:** Do not describe the current background as independently moving dinner footage; a future replacement can use generated video when available.

The user wants the invitation deployable as a static site on Coolify, with media bundled in public assets rather than requiring Replit storage at runtime.

**Why:** They explicitly requested moving the video and attached assets for direct use.

**How to apply:** Keep the invitation independent of backend media endpoints. Public assets are intentionally bundled for portability.
