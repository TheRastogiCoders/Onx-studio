import Hero from '../components/Hero';
import HeroMarquee from '../components/HeroMarquee';
import Services from '../components/Services';
import Work from '../components/Work';
import About from '../components/About';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <div className="page page-home" id="top">
      <Hero />
      <HeroMarquee />
      <Services />
      <Work />
      <About />
      <Contact />
    </div>
  );
}
