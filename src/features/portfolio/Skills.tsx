import { Section } from '../../components/ui/Section';
import { TechnologyItem } from '../../components/ui/TechnologyItem';
import { skills } from '../../data/skills';

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="The tools behind the work.">
      <p className="section-intro">The technologies I use to build, connect, and ship web applications.</p>
      <div className="skills-grid">
        {skills.map(group => (
          <article className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <ul className="technology-list" aria-label={group.title}>
              {group.technologies.map(technology => <TechnologyItem key={technology.name} technology={technology} />)}
            </ul>
          </article>
        ))}
      </div>
      <p className="skills-note">Supported by problem-solving, requirement analysis, debugging, teamwork, and time management.</p>
    </Section>
  );
}
