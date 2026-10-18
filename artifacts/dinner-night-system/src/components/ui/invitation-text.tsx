import type { ComponentProps } from 'react';
import './invitation.css';

export function InvitationHeading({ className = '', ...props }: ComponentProps<'h1'>) {
  return <h1 className={`dn-heading ${className}`} {...props} />;
}
export function InvitationText({ variant = 'body', className = '', ...props }: ComponentProps<'p'> & { variant?: 'body' | 'eyebrow' | 'label' | 'details' | 'note' | 'footer' }) {
  return <p className={`dn-text dn-${variant} ${className}`} {...props} />;
}
