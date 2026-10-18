# Migrating web UI

Only after explicit user approval. Read AGENTS.md, consuming-web.md and component-inventory.md.

Add workspace dependency and theme import. Render one InvitationCard, verify typecheck and preview. Replace only source invitation article, typography and anchor markup with package components; keep app-specific video, poster, reduced-motion playback, text, Google SVG and actual navigation destination in the app. Preserve existing behavior.

Remove only the superseded .invitation, typography and .google styles after verifying the replacement. Do not delete unrelated starter components or feature code. Keep viewport layout CSS in the app. Replace source token declarations with package tokens; source muted foreground is intentionally darkened slightly for contrast.

Check phone/tablet/desktop, external Google navigation, reduced motion and background playback. Do not add pause controls: user explicitly removed them.
