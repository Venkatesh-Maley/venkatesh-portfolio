import { useEffect, useState } from 'react';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('home');
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const visibleSection = entries.find(entry => entry.isIntersecting);
      if (visibleSection) setActiveSection(visibleSection.target.id);
    }, { rootMargin: '-15% 0px -60% 0px', threshold: 0 });
    document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return activeSection;
}
