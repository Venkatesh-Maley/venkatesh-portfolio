import { ArrowUpRight } from 'lucide-react';
import { Section } from '../../components/ui/Section';

export function About() {
  return (
    <Section id="about" eyebrow="THE PERSON BEHIND THE CODE" title="Curious by nature. Developer by craft." className="about-section">
      <div className="about-grid">
        <div className="about-copy">
          <p>I’m Venkatesh, a Computer Science graduate from <strong>RGUKT IIIT R.K. Valley</strong>. I enjoy taking a problem apart, understanding what matters, and turning it into software people can use.</p>
          <p>I’m currently a <strong>Backend Developer at GrowthPanda</strong>, owning backend development for HiFocus across CRM, sales, and service operations. I build secure Node.js and TypeScript APIs, RAG-powered support with OpenAI, LangChain, and Qdrant, and manage staging and production releases.</p>
          <p>Earlier internships gave me hands-on experience with <strong>AWS infrastructure</strong>, Angular interfaces, and AI integrations. I bring that foundation to building connected web applications.</p>
          <a className="text-link" href="#experience">Follow my journey <ArrowUpRight size={17} /></a>
        </div>
        <div className="about-facts">
          <div><strong>Hands-on</strong><span>Backend Developer at GrowthPanda</span></div>
          <div><strong>Full stack</strong><span>Secure APIs, AWS infrastructure & RAG</span></div>
          <div><strong>Beyond code</strong><span>Teamwork, community & leadership</span></div>
        </div>
      </div>
    </Section>
  );
}
