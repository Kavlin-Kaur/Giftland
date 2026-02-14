import { ShoppingCart } from 'lucide-react';

export default function BestSellers() {
  const products = [
    {
      id: 1,
      name: 'Heritage Silk Pashmina',
      price: '$299',
      image: 'https://images.unsplash.com/photo-1615568135662-0ff6d606203f?w=400&h=500&fit=crop',
      badge: 'NEW',
    },
    {
      id: 2,
      name: 'Luxe Cashmere Blend',
      price: '$349',
      image: 'https://images.unsplash.com/photo-1599917753413-310d9dcf1313?w=400&h=500&fit=crop',
      badge: 'BEST SELLER',
    },
    {
      id: 3,
      name: 'Artisan Wool Weave',
      price: '$279',
      image: 'https://images.unsplash.com/photo-1585695159474-c3fb1176b13f?w=400&h=500&fit=crop',
      badge: 'POPULAR',
    },
    {
      id: 4,
      name: 'Premium Cotton Stole',
      price: '$199',
      image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&h=500&fit=crop',
      badge: 'TRENDING',
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white geometric-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink mb-2">
            Best Sellers
          </h2>
          <p className="text-muted text-sm sm:text-base">
            Loved by our customers worldwide
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-lg overflow-hidden card-shadow"
            >
              {/* Product Image */}
              <div className="relative h-64 sm:h-80 overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Badge */}
                <span className="absolute top-3 right-3 bg-himachali-red text-white px-3 py-1 rounded-full text-xs font-bold">
                  {product.badge}
                </span>
              </div>

              {/* Product Info */}
              <div className="p-4 sm:p-6">
                <h3 className="text-ink font-serif font-bold text-base sm:text-lg mb-2 line-clamp-2">
                  {product.name}
                </h3>

                <p className="text-primary font-semibold text-lg mb-4">{product.price}</p>

                {/* Add to Cart Button */}
                <button className="w-full flex items-center justify-center bg-primary text-white py-2 sm:py-3 rounded-sm font-medium transition-all duration-300 hover:bg-primary-dark transform group-hover:translate-y-0 hover:shadow-lg">
                  <ShoppingCart size={18} className="mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
