import { ShoppingCart, Heart, Star } from 'lucide-react';
import { useState } from 'react';

export default function ShawlsPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const shawls = [
        {
            id: 1,
            name: 'Heritage Silk Pashmina Shawl',
            price: 299,
            rating: 4.8,
            reviews: 124,
            image: 'https://images.unsplash.com/photo-1615568135662-0ff6d606203f?w=400&h=500&fit=crop',
            category: 'silk',
            description: 'Handcrafted pure silk pashmina with traditional Himachali patterns',
            inStock: true,
        },
        {
            id: 2,
            name: 'Luxe Cashmere Blend Shawl',
            price: 349,
            rating: 4.9,
            reviews: 98,
            image: 'https://images.unsplash.com/photo-1599917753413-310d9dcf1313?w=400&h=500&fit=crop',
            category: 'cashmere',
            description: 'Premium cashmere blend with intricate gold embroidery',
            inStock: true,
        },
        {
            id: 3,
            name: 'Artisan Wool Weave Shawl',
            price: 279,
            rating: 4.7,
            reviews: 156,
            image: 'https://images.unsplash.com/photo-1585695159474-c3fb1176b13f?w=400&h=500&fit=crop',
            category: 'wool',
            description: 'Sustainable wool with traditional geometric patterns',
            inStock: true,
        },
        {
            id: 4,
            name: 'Royal Embroidered Shawl',
            price: 449,
            rating: 5.0,
            reviews: 67,
            image: 'https://images.unsplash.com/photo-1534609949213-bc44e48dff0f?w=400&h=500&fit=crop',
            category: 'silk',
            description: 'Luxury silk with royal gold embroidery motifs',
            inStock: true,
        },
        {
            id: 5,
            name: 'Traditional Red Pashmina',
            price: 329,
            rating: 4.8,
            reviews: 89,
            image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&h=500&fit=crop',
            category: 'pashmina',
            description: 'Classic red pashmina with traditional border designs',
            inStock: true,
        },
        {
            id: 6,
            name: 'Winter Warmth Wool Shawl',
            price: 259,
            rating: 4.6,
            reviews: 143,
            image: 'https://images.unsplash.com/photo-1572635148818-ef6fd45eb394?w=400&h=500&fit=crop',
            category: 'wool',
            description: 'Thick wool blend perfect for cold weather',
            inStock: true,
        },
    ];

    const categories = [
        { id: 'all', name: 'All Shawls' },
        { id: 'silk', name: 'Silk' },
        { id: 'cashmere', name: 'Cashmere' },
        { id: 'wool', name: 'Wool' },
        { id: 'pashmina', name: 'Pashmina' },
    ];

    const filteredShawls = selectedCategory === 'all'
        ? shawls
        : shawls.filter(shawl => shawl.category === selectedCategory);

    return (
        <div className="min-h-screen bg-cream pt-24 pb-16">
            {/* Hero Banner */}
            <div className="relative h-64 bg-linear-to-r from-himachali-red to-himachali-orange mb-12">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
                    <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">Premium Shawls</h1>
                    <p className="text-lg text-white/90">Handcrafted Traditional Himachali Shawls</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Category Filter */}
                <div className="flex flex-wrap gap-3 mb-8 justify-center">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${selectedCategory === category.id
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
                    {filteredShawls.map((shawl) => (
                        <div
                            key={shawl.id}
                            className="group bg-white rounded-lg overflow-hidden card-shadow hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Product Image */}
                            <div className="relative h-80 overflow-hidden bg-gray-100">
                                <img
                                    src={shawl.image}
                                    alt={shawl.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition">
                                    <Heart size={20} className="text-himachali-red" />
                                </button>
                                {shawl.inStock && (
                                    <span className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                                        IN STOCK
                                    </span>
                                )}
                            </div>

                            {/* Product Info */}
                            <div className="p-5">
                                <h3 className="text-ink font-serif font-bold text-lg mb-2 line-clamp-2">
                                    {shawl.name}
                                </h3>

                                <p className="text-muted text-sm mb-3 line-clamp-2">
                                    {shawl.description}
                                </p>

                                {/* Rating */}
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="flex text-himachali-gold">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={16} fill={i < Math.floor(shawl.rating) ? 'currentColor' : 'none'} />
                                        ))}
                                    </div>
                                    <span className="text-sm text-muted">
                                        {shawl.rating} ({shawl.reviews} reviews)
                                    </span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <p className="text-himachali-red font-bold text-2xl">${shawl.price}</p>
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
                            <span className="text-3xl">🧵</span>
                        </div>
                        <h3 className="font-serif font-bold text-lg mb-2">Handcrafted</h3>
                        <p className="text-muted text-sm">Each shawl is meticulously handwoven by skilled artisans</p>
                    </div>
                    <div className="text-center p-6">
                        <div className="w-16 h-16 bg-himachali-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-3xl">✨</span>
                        </div>
                        <h3 className="font-serif font-bold text-lg mb-2">Premium Quality</h3>
                        <p className="text-muted text-sm">Only the finest materials sourced from Himalayan regions</p>
                    </div>
                    <div className="text-center p-6">
                        <div className="w-16 h-16 bg-himachali-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-3xl">🎨</span>
                        </div>
                        <h3 className="font-serif font-bold text-lg mb-2">Traditional Designs</h3>
                        <p className="text-muted text-sm">Authentic Himachali patterns passed through generations</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
