import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X, Moon, Sun, ChevronDown } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);

  const shopCategories = [
    { name: 'Shawls', path: '/shawls' },
    { name: 'Suits', path: '/suits' },
    { name: 'Sweaters', path: '/sweaters' },
    { name: 'Poonchu', path: '/poonchu' },
  ];

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
          <Link to="/" className="shrink-0 flex items-center gap-3">
            <Logo isDark={isDarkMode} />
            <h1 className={`text-2xl font-serif font-bold ${isDarkMode ? 'text-white' : 'text-ink'}`}>TriJas</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium text-sm hover:text-himachali-orange transition-colors duration-300 ${isDarkMode ? 'text-white hover:text-himachali-orange' : 'text-ink'}`}
            >
              Home
            </Link>

            {/* Shop Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsShopOpen(true)}
              onMouseLeave={() => setIsShopOpen(false)}
            >
              <button
                className={`font-medium text-sm hover:text-himachali-orange transition-colors duration-300 flex items-center gap-1 ${isDarkMode ? 'text-white hover:text-himachali-orange' : 'text-ink'}`}
              >
                Shop
                <ChevronDown size={16} className={`transition-transform duration-200 ${isShopOpen ? 'rotate-180' : ''}`} />
              </button>

              {isShopOpen && (
                <div className={`absolute top-full left-0 mt-2 w-48 rounded-lg shadow-xl overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  {shopCategories.map((category) => (
                    <Link
                      key={category.path}
                      to={category.path}
                      className={`block px-4 py-3 text-sm transition-colors duration-200 ${isDarkMode
                          ? 'text-white hover:bg-himachali-orange hover:text-white'
                          : 'text-ink hover:bg-himachali-orange/10'
                        }`}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`font-medium text-sm hover:text-himachali-orange transition-colors duration-300 ${isDarkMode ? 'text-white hover:text-himachali-orange' : 'text-ink'}`}
            >
              About
            </Link>
            <a
              href="#contact"
              className={`font-medium text-sm hover:text-himachali-orange transition-colors duration-300 ${isDarkMode ? 'text-white hover:text-himachali-orange' : 'text-ink'}`}
            >
              Contact
            </a>
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
            <Link
              to="/"
              className={`block py-2 transition-colors duration-300 ${isDarkMode ? 'text-white hover:text-himachali-orange' : 'text-ink hover:text-primary'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <div className="py-2">
              <div className={`font-medium text-sm mb-2 ${isDarkMode ? 'text-white' : 'text-ink'}`}>Shop</div>
              {shopCategories.map((category) => (
                <Link
                  key={category.path}
                  to={category.path}
                  className={`block py-2 pl-4 text-sm transition-colors duration-300 ${isDarkMode ? 'text-white/80 hover:text-himachali-orange' : 'text-muted hover:text-primary'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </div>
            <a
              href="#about"
              className={`block py-2 transition-colors duration-300 ${isDarkMode ? 'text-white hover:text-himachali-orange' : 'text-ink hover:text-primary'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className={`block py-2 transition-colors duration-300 ${isDarkMode ? 'text-white hover:text-himachali-orange' : 'text-ink hover:text-primary'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
