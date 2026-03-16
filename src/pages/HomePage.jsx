import Hero from '../components/Hero';
import HeroMarquee from '../components/HeroMarquee';
import Services from '../components/Services';
import Work from '../components/Work';
import Process from '../components/Process';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <div className="page page-home">
      <Hero />
      <HeroMarquee />
      <Services />
      <Work />
      <Process />
      <About />
      <Testimonials />
      <Contact />
    </div>
  );
}
