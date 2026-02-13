export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full bg-cover bg-center overflow-hidden himachali-border-bottom"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1599917753413-310d9dcf1313?w=1400&h=1200&fit=crop)',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
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
            <button className="btn-primary inline-block hover:shadow-xl">
              Shop Collection
            </button>
            <button className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white rounded-sm font-medium hover:bg-white/30 transition-all duration-300 border border-white/50">
              Learn More
            </button>
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
