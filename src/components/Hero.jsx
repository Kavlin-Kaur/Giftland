import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full bg-cover bg-center overflow-hidden himachali-border-bottom bg-linear-to-b from-red-900 via-amber-900 to-yellow-900 hero-bg"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1615568135662-0ff6d606203f?w=1400&h=1200&fit=crop)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-black/45 via-black/55 to-black/65"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="mb-6 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-himachali-red/80 text-white rounded-full text-sm font-semibold mb-4">
              Heritage Meets Elegance
            </span>
          </div>

          <h1 className="text-white font-serif text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
            Timeless Drapes. Modern Grace.
          </h1>

          <p className="text-white/95 text-base sm:text-lg mb-2 font-light max-w-2xl mx-auto drop-shadow-md">
            Discover handcrafted Himachali shawls and scarves that blend traditional textile heritage
            with contemporary elegance.
          </p>

          <p className="text-white/85 text-sm sm:text-base mb-8 max-w-2xl mx-auto drop-shadow-md">
            Each piece tells a story of craftsmanship and tradition, woven with pride in the heart of Himalayas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shawls" className="btn-primary inline-block hover:shadow-xl">
              Shop Collection
            </Link>
            <Link to="/suits" className="btn-secondary">
              Explore Suits
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-white/90">
            <div className="glass-card rounded-lg px-4 py-3">
              <p className="text-xs uppercase tracking-widest text-white/70">Weavers</p>
              <p className="text-lg font-semibold">120+ Artisans</p>
            </div>
            <div className="glass-card rounded-lg px-4 py-3">
              <p className="text-xs uppercase tracking-widest text-white/70">Heritage</p>
              <p className="text-lg font-semibold">50+ Years</p>
            </div>
            <div className="glass-card rounded-lg px-4 py-3">
              <p className="text-xs uppercase tracking-widest text-white/70">Shipping</p>
              <p className="text-lg font-semibold">Worldwide</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-white/60">
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
