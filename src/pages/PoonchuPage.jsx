import { ShoppingCart, Heart, Star } from 'lucide-react';
import { useState } from 'react';

export default function PoonchuPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const poonchus = [
    {
      id: 1,
      name: 'Traditional Kullu Poonchu',
      price: 129,
      rating: 4.9,
      reviews: 142,
      image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=500&fit=crop',
      category: 'traditional',
      description: 'Authentic Kullu valley handwoven poonchu',
      region: 'Kullu',
      inStock: true,
    },
    {
      id: 2,
      name: 'Kinnauri Wool Poonchu',
      price: 169,
      rating: 5.0,
      reviews: 87,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop',
      category: 'premium',
      description: 'Rare Kinnauri tribal pattern poonchu',
      region: 'Kinnaur',
      inStock: true,
    },
    {
      id: 3,
      name: 'Handloom Poonchu with Border',
      price: 99,
      rating: 4.7,
      reviews: 165,
      image: 'https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?w=400&h=500&fit=crop',
      category: 'handloom',
      description: 'Classic design with geometric borders',
      region: 'Manali',
      inStock: true,
    },
    {
      id: 4,
      name: 'Tribal Pattern Poonchu',
      price: 149,
      rating: 4.8,
      reviews: 98,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop',
      category: 'tribal',
      description: 'Ancient tribal motifs in vibrant colors',
      region: 'Chamba',
      inStock: true,
    },
    {
      id: 5,
      name: 'Pure Wool Winter Poonchu',
      price: 189,
      rating: 4.9,
      reviews: 76,
      image: 'https://images.unsplash.com/photo-1609252852859-74d149e68c66?w=400&h=500&fit=crop',
      category: 'wool',
      description: 'Extra thick wool for extreme cold',
      region: 'Spiti',
      inStock: true,
    },
    {
      id: 6,
      name: 'Designer Embroidered Poonchu',
      price: 219,
      rating: 5.0,
      reviews: 54,
      image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=500&fit=crop',
      category: 'premium',
      description: 'Hand-embroidered ceremonial poonchu',
      region: 'Shimla',
      inStock: true,
    },
  ];

  const categories = [
    { id: 'all', name: 'All Poonchu' },
    { id: 'traditional', name: 'Traditional' },
    { id: 'premium', name: 'Premium' },
    { id: 'handloom', name: 'Handloom' },
    { id: 'tribal', name: 'Tribal' },
    { id: 'wool', name: 'Pure Wool' },
  ];

  const filteredPoonchus = selectedCategory === 'all' 
    ? poonchus 
    : poonchus.filter(poonchu => poonchu.category === selectedCategory);

  return (
    <div className="min-h-screen bg-cream pt-24 pb-16">
      {/* Hero Banner */}
      <div className="relative h-64 bg-linear-to-r from-himachali-maroon via-himachali-red to-himachali-orange mb-12">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">Himachali Poonchu</h1>
          <p className="text-lg text-white/90">Authentic Traditional Handwoven Heritage</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Poonchu */}
        <div className="bg-white rounded-lg p-6 mb-8 geometric-border">
          <h2 className="font-serif font-bold text-2xl text-himachali-red mb-3">What is a Poonchu?</h2>
          <p className="text-muted leading-relaxed">
            The Poonchu is a traditional Himachali woolen garment worn as a shawl or wrap, 
            handwoven by local artisans using age-old techniques. Each piece represents the rich 
            cultural heritage of Himachal Pradesh, featuring distinctive geometric patterns and 
            vibrant colors unique to different valleys and tribes. Perfect for cold mountain weather, 
            these authentic pieces are both functional and a work of art.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-himachali-red text-white shadow-lg'
                  : 'bg-white text-ink hover:bg-himachali-red/10'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredPoonchus.map((poonchu) => (
            <div
              key={poonchu.id}
              className="group bg-white rounded-lg overflow-hidden card-shadow hover:shadow-2xl transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative h-80 overflow-hidden bg-gray-100">
                <img
                  src={poonchu.image}
                  alt={poonchu.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition">
                  <Heart size={20} className="text-himachali-red" />
                </button>
                {poonchu.inStock && (
                  <span className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    IN STOCK
                  </span>
                )}
                <span className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-himachali-maroon">
                  {poonchu.region}
                </span>
              </div>

              {/* Product Info */}
              <div className="p-5">
                <h3 className="text-ink font-serif font-bold text-lg mb-2 line-clamp-2">
                  {poonchu.name}
                </h3>
                
                <p className="text-muted text-sm mb-3 line-clamp-2">
                  {poonchu.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex text-himachali-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill={i < Math.floor(poonchu.rating) ? 'currentColor' : 'none'} />
                    ))}
                  </div>
                  <span className="text-sm text-muted">
                    {poonchu.rating} ({poonchu.reviews} reviews)
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-himachali-red font-bold text-2xl">${poonchu.price}</p>
                  <button className="flex items-center gap-2 bg-himachali-red text-white px-4 py-2 rounded-lg font-medium hover:bg-himachali-maroon transition-all duration-300 hover:shadow-lg">
                    <ShoppingCart size={18} />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-himachali-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🏔️</span>
            </div>
            <h3 className="font-serif font-bold text-lg mb-2">Mountain Heritage</h3>
            <p className="text-muted text-sm">Each region's unique weaving tradition preserved</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-himachali-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🧵</span>
            </div>
            <h3 className="font-serif font-bold text-lg mb-2">Handwoven Craft</h3>
            <p className="text-muted text-sm">Traditional looms used by skilled artisans</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-himachali-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🎨</span>
            </div>
            <h3 className="font-serif font-bold text-lg mb-2">Geometric Art</h3>
            <p className="text-muted text-sm">Ancient tribal patterns passed through generations</p>
          </div>
        </div>
      </div>
    </div>
  );
}
