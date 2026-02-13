import { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = ['Home', 'Shop', 'About', 'Contact'];

  return (
    <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm shadow-md himachali-border-bottom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-serif font-bold text-ink">TriJas</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-ink font-medium text-sm hover:text-primary transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Cart Icon */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-ink hover:text-primary transition-colors duration-300">
              <ShoppingBag size={24} />
              <span className="absolute top-0 right-0 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-ink hover:text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-primary/10">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block py-2 text-ink hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
