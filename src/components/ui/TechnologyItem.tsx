import { Network } from 'lucide-react';
import type { Technology } from '../../types/skills';

interface TechnologyItemProps {
  technology: Technology;
}

export function TechnologyItem({ technology }: TechnologyItemProps) {
  return (
    <li className={`technology-item${technology.description ? ' technology-item--wide' : ''}`}>
      <span className="technology-logo" aria-hidden="true">
        {technology.logo ? <img src={technology.logo} alt="" width={30} height={30} loading="lazy" /> : <Network size={28} />}
      </span>
      <span className="technology-copy">
        <span className="technology-name">{technology.name}</span>
        {technology.description && <span className="technology-description">{technology.description}</span>}
      </span>
    </li>
  );
}
