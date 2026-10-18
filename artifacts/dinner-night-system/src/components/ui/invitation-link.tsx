import type { ComponentProps } from 'react';
import './invitation.css';

/** Native anchor: callers own destination, label and optional leading icon. */
export function InvitationLink({ className = '', rel, target, ...props }: ComponentProps<'a'>) {
  return <a className={`dn-link ${className}`} rel={rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)} target={target} {...props} />;
}
