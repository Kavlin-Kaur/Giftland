import { useState } from 'react';
import { Mail, Heart, Zap, Award } from 'lucide-react';

export default function NewsletterPage() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  const pastHighlights = [
    {
      id: 1,
      month: 'February 2026',
      title: 'The Art of Himalayan Weaving',
      snippet: 'Discover the 300-year-old techniques behind traditional Himachali shawls.',
      category: 'Heritage',
    },
    {
      id: 2,
      month: 'January 2026',
      title: 'Exclusive: New Poonchu Collection',
      snippet: 'First look at our limited-edition designs inspired by ancient tribal patterns.',
      category: 'New Arrivals',
    },
    {
      id: 3,
      month: 'December 2025',
      title: 'Meet the Artisans: Stories from Shimla',
      snippet: 'Personal interviews with master weavers keeping traditions alive.',
      category: 'Community',
    },
    {
      id: 4,
      month: 'November 2025',
      title: 'Seasonal Care Guide: Winter Warmth',
      snippet: 'Expert tips on maintaining your handwoven textiles through the seasons.',
      category: 'Guides',
    },
  ];

  const benefits = [
    {
      icon: <Mail size={24} />,
      title: 'Exclusive Offers',
      description: 'Subscriber-only discounts on new collections and limited editions.',
    },
    {
      icon: <Heart size={24} />,
      title: 'Artisan Stories',
      description: 'Meet the weavers and craftspeople behind every piece.',
    },
    {
      icon: <Zap size={24} />,
      title: 'First Access',
      description: 'Be the first to know about launches and seasonal collections.',
    },
    {
      icon: <Award size={24} />,
      title: 'Heritage Insights',
      description: 'Deep dives into Himachali textile traditions and techniques.',
    },
  ];

  return (
    <div className="min-h-screen bg-cream pt-24 pb-16">
      {/* Hero Section */}
      <div className="relative h-64 bg-linear-to-r from-himachali-maroon via-himachali-red to-himachali-orange mb-12">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">TriJas Newsletter</h1>
          <p className="text-lg text-white/90">Stories of heritage, artisans, and exclusive collections</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Subscription Section */}
        <div className="bg-white rounded-lg card-shadow p-8 sm:p-12 mb-16 geometric-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Form */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink mb-4">
                Stay Connected
              </h2>
              <p className="text-muted mb-6 leading-relaxed">
                Join thousands of textile enthusiasts, collectors, and culture lovers who receive 
                curated stories about Himalayan heritage, artisan profiles, exclusive previews, 
                and special subscriber-only offers every month.
              </p>

              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-himachali-orange/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-himachali-orange text-ink"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="w-4 h-4 accent-himachali-red"
                    />
                    <span className="text-sm text-muted">Subscribe to our monthly newsletter</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="w-4 h-4 accent-himachali-red"
                    />
                    <span className="text-sm text-muted">Notify me of new launches and exclusive offers</span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-himachali-red text-white py-3 rounded-lg font-semibold hover:bg-himachali-maroon transition-all duration-300 hover:shadow-lg"
                >
                  Subscribe Now
                </button>

                <p className="text-xs text-muted text-center">
                  We respect your inbox. Unsubscribe anytime. No spam, ever.
                </p>
              </form>

              {isSubscribed && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-700 font-semibold">✓ Thank you for subscribing!</p>
                  <p className="text-green-600 text-sm">Check your email for a welcome message.</p>
                </div>
              )}
            </div>

            {/* Right: Preview */}
            <div className="bg-himachali-cream rounded-lg p-6 border-2 border-himachali-orange/20">
              <h3 className="font-serif font-bold text-ink text-xl mb-4">What You'll Get</h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-himachali-orange/20">
                  <p className="text-xs uppercase tracking-widest text-himachali-orange font-bold">Every Month</p>
                  <p className="text-sm text-ink font-semibold">Heritage Story Feature</p>
                  <p className="text-xs text-muted mt-1">
                    Deep dive into Himachali textile traditions, weaving techniques, and cultural significance.
                  </p>
                </div>

                <div className="pb-4 border-b border-himachali-orange/20">
                  <p className="text-xs uppercase tracking-widest text-himachali-orange font-bold">Every Month</p>
                  <p className="text-sm text-ink font-semibold">Artisan Spotlight</p>
                  <p className="text-xs text-muted mt-1">
                    Meet the master craftspeople behind our collections. Hear their stories directly.
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-himachali-orange font-bold">Exclusive</p>
                  <p className="text-sm text-ink font-semibold">Subscriber Discounts</p>
                  <p className="text-xs text-muted mt-1">
                    10-20% off on new launches, seasonal collections, and limited editions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink mb-12 text-center">
            Why Subscribe?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 card-shadow text-center">
                <div className="flex justify-center mb-4 text-himachali-red">
                  {benefit.icon}
                </div>
                <h3 className="font-serif font-bold text-ink mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Past Highlights */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink mb-12 text-center">
            Recent Editions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastHighlights.map((highlight) => (
              <div
                key={highlight.id}
                className="bg-white rounded-lg p-6 card-shadow hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted">{highlight.month}</p>
                    <h3 className="text-lg font-serif font-bold text-ink mt-2">{highlight.title}</h3>
                  </div>
                  <span className="inline-block bg-himachali-orange/10 text-himachali-orange px-3 py-1 rounded-full text-xs font-semibold">
                    {highlight.category}
                  </span>
                </div>

                <p className="text-muted text-sm mb-4">{highlight.snippet}</p>

                <a
                  href="#"
                  className="inline-flex items-center text-himachali-red font-semibold hover:text-himachali-maroon transition-colors"
                >
                  Read Newsletter →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Frequency & Info Section */}
        <div className="bg-himachali-cream rounded-lg p-8 text-center geometric-border">
          <h3 className="text-2xl font-serif font-bold text-ink mb-4">Frequency & Contact</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <p className="text-3xl font-bold text-himachali-red mb-2">1x/Month</p>
              <p className="text-sm text-muted">We send curated newsletters monthly, not spammy daily emails.</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-himachali-orange mb-2">100%</p>
              <p className="text-sm text-muted">Your email is safe with us. We never share or sell data.</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-himachali-maroon mb-2">Instant</p>
              <p className="text-sm text-muted">Unsubscribe anytime with one click. No questions asked.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
