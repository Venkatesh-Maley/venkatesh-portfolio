import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, eyebrow, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`section ${className}`} aria-labelledby={`${id}-title`}>
      <div className="container">
        <Reveal className="section-heading"><p className="eyebrow">{eyebrow}</p><h2 id={`${id}-title`}>{title}</h2></Reveal>
        <Reveal>{children}</Reveal>
      </div>
    </section>
  );
}
