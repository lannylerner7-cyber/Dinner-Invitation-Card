import { InvitationCard } from '@workspace/dinner-night-system/components/ui/invitation-card';
import { InvitationHeading, InvitationText } from '@workspace/dinner-night-system/components/ui/invitation-text';
import { InvitationLink } from '@workspace/dinner-night-system/components/ui/invitation-link';

export default function NotFound() {
  return (
    <main className="scene bg-background">
      <InvitationCard aria-labelledby="not-found-title">
        <InvitationText variant="eyebrow">Dinner Night Invitation</InvitationText>
        <InvitationHeading id="not-found-title">Page not found</InvitationHeading>
        <InvitationText>This page isn't available. Your invitation is waiting on the home page.</InvitationText>
        <InvitationText variant="details">Let's get you back to the table.</InvitationText>
        <InvitationLink href={import.meta.env.BASE_URL}>Back to the invitation</InvitationLink>
      </InvitationCard>
    </main>
  );
}
