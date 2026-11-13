import { MotionConfig } from 'motion/react';
import { Header } from '../components/layout/Header';
import { ScrollProgress } from '../components/layout/ScrollProgress';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../features/portfolio/Hero';
import { About } from '../features/portfolio/About';
import { Experience } from '../features/portfolio/Experience';
import { Projects } from '../features/portfolio/Projects';
import { Skills } from '../features/portfolio/Skills';
import { Background } from '../features/portfolio/Background';
import { Contact } from '../features/portfolio/Contact';

export function App() {
  return <MotionConfig reducedMotion="user"><a className="skip-link" href="#main">Skip to content</a><ScrollProgress /><Header /><main id="main"><Hero /><About /><Experience /><Projects /><Skills /><Background /><Contact /></main><Footer /></MotionConfig>;
}
