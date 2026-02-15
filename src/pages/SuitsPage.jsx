import { ShoppingCart, Heart, Star } from 'lucide-react';
import { useState } from 'react';

export default function SuitsPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const suits = [
        {
            id: 1,
            name: 'Traditional Himachali Suit',
            price: 189,
            rating: 4.7,
            reviews: 89,
            image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=500&fit=crop',
            category: 'traditional',
            description: 'Classic Himachali design with embroidered borders',
            inStock: true,
        },
        {
            id: 2,
            name: 'Royal Velvet Suit Set',
            price: 249,
            rating: 4.9,
            reviews: 67,
            image: 'https://images.unsplash.com/photo-1617019114583-affb34d1b3ce?w=400&h=500&fit=crop',
            category: 'premium',
            description: 'Luxurious velvet suit with gold embellishments',
            inStock: true,
        },
        {
            id: 3,
            name: 'Festive Cotton Suit',
            price: 149,
            rating: 4.6,
            reviews: 124,
            image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=500&fit=crop',
            category: 'cotton',
            description: 'Comfortable cotton suit perfect for celebrations',
            inStock: true,
        },
        {
            id: 4,
            name: 'Elegant Silk Blend Suit',
            price: 219,
            rating: 4.8,
            reviews: 95,
            image: 'https://images.unsplash.com/photo-1617537018388-99129a5e4f26?w=400&h=500&fit=crop',
            category: 'silk',
            description: 'Smooth silk blend with intricate designs',
            inStock: true,
        },
        {
            id: 5,
            name: 'Designer Wedding Suit',
            price: 399,
            rating: 5.0,
            reviews: 45,
            image: 'https://images.unsplash.com/photo-1610030469296-4eb3f41a1f7c?w=400&h=500&fit=crop',
            category: 'premium',
            description: 'Heavy embroidered bridal/wedding suit',
            inStock: true,
        },
        {
            id: 6,
            name: 'Summer Georgette Suit',
            price: 169,
            rating: 4.5,
            reviews: 110,
            image: 'https://images.unsplash.com/photo-1614252368099-bd8e90478a0e?w=400&h=500&fit=crop',
            category: 'georgette',
            description: 'Lightweight georgette perfect for summer',
            inStock: true,
        },
    ];

    const categories = [
        { id: 'all', name: 'All Suits' },
        { id: 'traditional', name: 'Traditional' },
        { id: 'premium', name: 'Premium' },
        { id: 'cotton', name: 'Cotton' },
        { id: 'silk', name: 'Silk' },
        { id: 'georgette', name: 'Georgette' },
    ];

    const filteredSuits = selectedCategory === 'all'
        ? suits
        : suits.filter(suit => suit.category === selectedCategory);

    return (
        <div className="min-h-screen bg-cream pt-24 pb-16">
            {/* Hero Banner */}
            <div className="relative h-64 bg-linear-to-r from-himachali-maroon to-himachali-red mb-12">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
                    <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">Traditional Suits</h1>
                    <p className="text-lg text-white/90">Elegant & Stylish Himachali Suits Collection</p>
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
                                    ? 'bg-himachali-maroon text-white shadow-lg'
                                    : 'bg-white text-ink hover:bg-himachali-maroon/10'
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {filteredSuits.map((suit) => (
                        <div
                            key={suit.id}
                            className="group bg-white rounded-lg overflow-hidden card-shadow hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Product Image */}
                            <div className="relative h-80 overflow-hidden bg-gray-100">
                                <img
                                    src={suit.image}
                                    alt={suit.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition">
                                    <Heart size={20} className="text-himachali-red" />
                                </button>
                                {suit.inStock && (
                                    <span className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                                        IN STOCK
                                    </span>
                                )}
                            </div>

                            {/* Product Info */}
                            <div className="p-5">
                                <h3 className="text-ink font-serif font-bold text-lg mb-2 line-clamp-2">
                                    {suit.name}
                                </h3>

                                <p className="text-muted text-sm mb-3 line-clamp-2">
                                    {suit.description}
                                </p>

                                {/* Rating */}
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="flex text-himachali-gold">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={16} fill={i < Math.floor(suit.rating) ? 'currentColor' : 'none'} />
                                        ))}
                                    </div>
                                    <span className="text-sm text-muted">
                                        {suit.rating} ({suit.reviews} reviews)
                                    </span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <p className="text-himachali-maroon font-bold text-2xl">${suit.price}</p>
                                    <button className="flex items-center gap-2 bg-himachali-maroon text-white px-4 py-2 rounded-lg font-medium hover:bg-himachali-red transition-all duration-300 hover:shadow-lg">
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
                        <div className="w-16 h-16 bg-himachali-maroon/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-3xl">👗</span>
                        </div>
                        <h3 className="font-serif font-bold text-lg mb-2">Complete Sets</h3>
                        <p className="text-muted text-sm">Full suit sets with dupatta and accessories</p>
                    </div>
                    <div className="text-center p-6">
                        <div className="w-16 h-16 bg-himachali-maroon/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-3xl">✂️</span>
                        </div>
                        <h3 className="font-serif font-bold text-lg mb-2">Custom Tailoring</h3>
                        <p className="text-muted text-sm">Personalized stitching available on request</p>
                    </div>
                    <div className="text-center p-6">
                        <div className="w-16 h-16 bg-himachali-maroon/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-3xl">🎉</span>
                        </div>
                        <h3 className="font-serif font-bold text-lg mb-2">For All Occasions</h3>
                        <p className="text-muted text-sm">From casual to weddings, we have it all</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
