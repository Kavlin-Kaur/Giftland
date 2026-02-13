import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCategories from './components/FeaturedCategories';
import BestSellers from './components/BestSellers';
import Stories from './components/Stories';
import WhyChooseTriJas from './components/WhyChooseTriJas';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <FeaturedCategories />
      <BestSellers />
      <Stories />
      <WhyChooseTriJas />
      <Footer />
    </div>
  );
}

export default App;
