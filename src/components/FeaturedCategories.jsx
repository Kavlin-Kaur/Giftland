import { Link } from 'react-router-dom';

export default function FeaturedCategories() {
  const categories = [
    {
      id: 1,
      name: "Shawls",
      image: 'https://images.unsplash.com/photo-1615568135662-0ff6d606203f?w=500&h=600&fit=crop',
      description: 'Elegant handcrafted shawls',
      link: '/shawls',
    },
    {
      id: 2,
      name: 'Suits',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&h=600&fit=crop',
      description: 'Traditional & stylish suits',
      link: '/suits',
    },
    {
      id: 3,
      name: 'Sweaters',
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=600&fit=crop',
      description: 'Cozy winter warmth',
      link: '/sweaters',
    },
    {
      id: 4,
      name: 'Poonchu',
      image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=500&h=600&fit=crop',
      description: 'Traditional Himalayan wraps',
      link: '/poonchu',
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-cream geometric-border himachali-pattern-bg">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.link}
              className="relative h-72 sm:h-80 lg:h-96 overflow-hidden rounded-lg card-shadow group cursor-pointer block"
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
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 className="text-white font-serif text-2xl sm:text-3xl font-bold text-center px-4 mb-2">
                  {category.name}
                </h3>
                <p className="text-white/90 text-sm">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
