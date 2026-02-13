export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full bg-cover bg-center overflow-hidden himachali-border-bottom"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&h=900&fit=crop)',
      }}
    >
      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-white font-serif text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Timeless Drapes. Modern Grace.
          </h1>

          <p className="text-white/90 text-base sm:text-lg mb-8 font-light max-w-xl mx-auto">
            Discover handcrafted shawls and scarves that blend traditional textile heritage with
            contemporary elegance. Each piece tells a story of craftsmanship.
          </p>

          <button className="btn-primary inline-block">
            Shop Collection
          </button>
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
