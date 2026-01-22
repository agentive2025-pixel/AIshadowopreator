import AnimatedBackground from './components/AnimatedBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import Process from './components/Process';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-gradient-dark text-white overflow-x-hidden">
      <AnimatedBackground />
      <Navigation />

      <main className="relative z-10">
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
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
