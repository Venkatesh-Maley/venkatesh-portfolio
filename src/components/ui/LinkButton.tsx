import type { ReactNode } from 'react';

interface LinkButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  download?: boolean;
  external?: boolean;
}

export function LinkButton({ href, children, variant = 'primary', download, external }: LinkButtonProps) {
  return <a className={`button button--${variant}`} href={href} download={download} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>{children}</a>;
}
