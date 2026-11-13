import { ArrowUpRight, GraduationCap, Users } from 'lucide-react';
import { Section } from '../../components/ui/Section';
import { education } from '../../data/portfolio';

export function Background() {
  return <Section id="education" eyebrow="ROOTS & COMMUNITY" title="Learning. Leading. Giving back." className="background-section"><div className="background-grid"><div><h3 className="column-title"><GraduationCap size={22} /> Education</h3><div className="education-list">{education.map(item => <article key={item.degree}><p className="education-period">{item.period}</p><h4>{item.degree}</h4><p>{item.institution}</p><span className="grade">{item.grade}</span></article>)}</div></div><article className="leadership"><span className="leadership-icon"><Users size={28} /></span><p className="eyebrow">BEYOND THE KEYBOARD</p><h3>Building connections,<br />not just applications.</h3><h4>Alumni Cell Student Coordinator</h4><p className="leadership-period">RGUKT Alumni Association · Mar 2023 — May 2025</p><p>Built and led a dedicated Alumni Cell team, launched a referral invitation program, and supported alumni engagement initiatives.</p><p>Helped organize events including 15 years of RGUKT and the NAC Alumni gathering.</p><a className="text-link" href="#contact">Let’s connect <ArrowUpRight size={17} /></a></article></div></Section>;
}
