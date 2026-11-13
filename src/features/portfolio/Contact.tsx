import { ArrowUpRight, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Section } from '../../components/ui/Section';
import { profile } from '../../data/portfolio';

export function Contact() {
  return (
    <Section id="contact" eyebrow="SAY HELLO" title="Good things start with a conversation." className="contact-section">
      <div className="contact-grid">
        <p>
          <span className="freelance-status"><span className="status-dot" aria-hidden="true" />Open to freelance projects</span>
          Have an idea you want to bring to life? I’d love to help with web applications, backend APIs, AWS deployments, and AI integrations. Let’s talk about what you’re building.
        </p>
        <div className="contact-links">
          <a className="email-link" href={`mailto:${profile.email}`}><Mail size={22} /><span>{profile.email}</span><ArrowUpRight size={24} /></a>
          <a href={profile.phoneHref}><Phone size={17} /> {profile.phone}</a>
          <div className="contact-socials">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={15} /></a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={15} /></a>
          </div>
        </div>
      </div>
    </Section>
  );
}
