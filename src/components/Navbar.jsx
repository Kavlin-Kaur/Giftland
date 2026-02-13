import { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Moon, Sun } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const links = ['Home', 'Shop', 'About', 'Contact'];

  useEffect(() => {
    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    
    // Apply theme
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <nav className={`sticky top-0 z-50 ${isDarkMode ? 'bg-gray-900/95 text-white' : 'bg-cream/95 text-ink'} backdrop-blur-sm shadow-md himachali-border-bottom transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <Logo isDark={isDarkMode} />
            <h1 className={`text-2xl font-serif font-bold ${isDarkMode ? 'text-white' : 'text-ink'}`}>TriJas</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`font-medium text-sm hover:text-himachali-orange transition-colors duration-300 ${isDarkMode ? 'text-white hover:text-himachali-orange' : 'text-ink'}`}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Cart Icon & Dark Mode Toggle */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors duration-300 ${isDarkMode ? 'bg-white/20 text-yellow-300' : 'bg-primary/10 text-primary'} hover:bg-primary/20`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className={`relative p-2 transition-colors duration-300 ${isDarkMode ? 'text-white hover:text-himachali-orange' : 'text-ink hover:text-primary'}`}>
              <ShoppingBag size={24} />
              <span className="absolute top-0 right-0 bg-himachali-red text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 transition-colors duration-300 ${isDarkMode ? 'text-white hover:text-himachali-orange' : 'text-ink hover:text-primary'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden pb-4 border-t transition-colors duration-300 ${isDarkMode ? 'border-white/20' : 'border-primary/10'}`}>
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`block py-2 transition-colors duration-300 ${isDarkMode ? 'text-white hover:text-himachali-orange' : 'text-ink hover:text-primary'}`}
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
