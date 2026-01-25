import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimatedBackground from './components/AnimatedBackground';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Home from './pages/Home';
import RevenueShare from './pages/RevenueShare';
import Blueprint from './pages/Blueprint';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-dark text-white overflow-x-hidden">
        <AnimatedBackground />
        <Navigation />

        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/revenue-share" element={<RevenueShare />} />
            <Route path="/blueprint" element={<Blueprint />} />
          </Routes>
        </main>

        <Footer />
        <ScrollToTop />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;
