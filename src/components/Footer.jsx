import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-b from-cream to-gray-100 himachali-border-top">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-serif font-bold text-ink mb-4">TriJas</h3>
            <p className="text-muted text-sm mb-4">
              Tradition, Texture, and Timeless Elegance.
            </p>
            <p className="text-muted text-xs">
              Premium handcrafted shawls and scarves for the modern woman.
            </p>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h4 className="font-serif font-bold text-ink mb-4 text-sm uppercase tracking-wide">Newsletter</h4>
            <p className="text-muted text-sm mb-4">Get new arrivals and artisan stories.</p>
            <Link
              to="/newsletter"
              className="inline-block bg-primary text-white px-4 py-2 text-sm font-semibold rounded-sm hover:bg-primary-dark transition"
            >
              Subscribe Now →
            </Link>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif font-bold text-ink mb-4 text-sm uppercase tracking-wide">Shop</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/shawls" className="text-muted text-sm hover:text-primary transition-colors duration-300">
                  Shawls
                </Link>
              </li>
              <li>
                <Link to="/suits" className="text-muted text-sm hover:text-primary transition-colors duration-300">
                  Suits
                </Link>
              </li>
              <li>
                <Link to="/sweaters" className="text-muted text-sm hover:text-primary transition-colors duration-300">
                  Sweaters
                </Link>
              </li>
              <li>
                <Link to="/poonchu" className="text-muted text-sm hover:text-primary transition-colors duration-300">
                  Poonchu
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif font-bold text-ink mb-4 text-sm uppercase tracking-wide">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted text-sm hover:text-primary transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/our-story" className="text-muted text-sm hover:text-primary transition-colors duration-300">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-muted text-sm hover:text-primary transition-colors duration-300">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted text-sm hover:text-primary transition-colors duration-300">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-serif font-bold text-ink mb-4 text-sm uppercase tracking-wide">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-muted text-sm hover:text-primary transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-muted text-sm hover:text-primary transition-colors duration-300">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-muted text-sm hover:text-primary transition-colors duration-300">
                  Returns & Exchange
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted text-sm hover:text-primary transition-colors duration-300">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Divider */}
        <div className="border-t border-primary/10 pt-8">
          {/* Social Links & Bottom Content */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            {/* Social Icons */}
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-muted hover:text-primary transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-muted hover:text-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-muted hover:text-primary transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-muted hover:text-primary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-muted text-xs text-center sm:text-right">
              &copy; {currentYear} TriJas. All rights reserved. |
              <a href="#" className="hover:text-primary transition-colors duration-300 ml-2">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
