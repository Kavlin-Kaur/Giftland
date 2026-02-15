import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import ShawlsPage from './pages/ShawlsPage';
import SuitsPage from './pages/SuitsPage';
import SweatersPage from './pages/SweatersPage';
import PoonchuPage from './pages/PoonchuPage';
import AboutPage from './pages/AboutPage';
import NewsletterPage from './pages/NewsletterPage';
import BlogPage from './pages/BlogPage';
import SustainabilityPage from './pages/SustainabilityPage';
import OurStoryPage from './pages/OurStoryPage';
import ContactPage from './pages/ContactPage';
import ShippingPage from './pages/ShippingPage';
import ReturnsPage from './pages/ReturnsPage';
import FAQPage from './pages/FAQPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cream">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shawls" element={<ShawlsPage />} />
          <Route path="/suits" element={<SuitsPage />} />
          <Route path="/sweaters" element={<SweatersPage />} />
          <Route path="/poonchu" element={<PoonchuPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/our-story" element={<OurStoryPage />} />
          <Route path="/newsletter" element={<NewsletterPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/sustainability" element={<SustainabilityPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/shipping" element={<ShippingPage />} />
          <Route path="/returns" element={<ReturnsPage />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
