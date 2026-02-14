export default function FeaturedCategories() {
  const categories = [
    {
      id: 1,
      name: "Women's Shawls",
      image: 'https://images.unsplash.com/photo-1615568135662-0ff6d606203f?w=500&h=600&fit=crop',
      description: 'Elegant handcrafted shawls',
    },
    {
      id: 2,
      name: 'Scarves & Stoles',
      image: 'https://images.unsplash.com/photo-1599917753413-310d9dcf1313?w=500&h=600&fit=crop',
      description: 'Versatile and stylish',
    },
    {
      id: 3,
      name: 'Luxury Collection',
      image: 'https://images.unsplash.com/photo-1585695159474-c3fb1176b13f?w=500&h=600&fit=crop',
      description: 'Premium artisan pieces',
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-cream geometric-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink mb-2">
            Featured Categories
          </h2>
          <p className="text-muted text-sm sm:text-base">
            Explore our curated collections
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative h-96 overflow-hidden rounded-lg card-shadow group cursor-pointer"
            >
              {/* Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>

              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white font-serif text-2xl sm:text-3xl font-bold text-center px-4">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
