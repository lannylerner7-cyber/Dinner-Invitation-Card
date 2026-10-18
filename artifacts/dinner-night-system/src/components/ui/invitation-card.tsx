import type { ComponentProps } from 'react';
import './invitation.css';

/** Source: dinner-invitation .invitation; native article semantics retained. */
export function InvitationCard({ className = '', ...props }: ComponentProps<'article'>) {
  return <article className={`dn-card ${className}`} {...props} />;
}
