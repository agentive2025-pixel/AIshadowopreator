import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import Process from '../components/Process';
import Services from '../components/Services';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <div id="process">
        <WhoWeAre />
      </div>
      <Process />
      <div id="services">
        <Services />
      </div>
      <div id="benefits">
        <Benefits />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <FAQ />
      <CTA />
    </>
  );
}
