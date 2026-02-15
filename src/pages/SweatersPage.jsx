import { ShoppingCart, Heart, Star } from 'lucide-react';
import { useState } from 'react';

export default function SweatersPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const sweaters = [
        {
            id: 1,
            name: 'Handknit Wool Sweater',
            price: 89,
            rating: 4.8,
            reviews: 156,
            image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop',
            category: 'wool',
            description: 'Pure wool handknit sweater for extreme cold',
            warmth: 'Extra Warm',
            inStock: true,
        },
        {
            id: 2,
            name: 'Himachali Pattern Cardigan',
            price: 119,
            rating: 4.9,
            reviews: 98,
            image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop',
            category: 'cardigan',
            description: 'Traditional Himachali patterns in modern style',
            warmth: 'Warm',
            inStock: true,
        },
        {
            id: 3,
            name: 'Cashmere Blend Pullover',
            price: 159,
            rating: 4.7,
            reviews: 87,
            image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=500&fit=crop',
            category: 'cashmere',
            description: 'Luxuriously soft cashmere blend sweater',
            warmth: 'Medium',
            inStock: true,
        },
        {
            id: 4,
            name: 'Chunky Knit Turtleneck',
            price: 109,
            rating: 4.6,
            reviews: 134,
            image: 'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=500&fit=crop',
            category: 'wool',
            description: 'Thick turtleneck sweater for mountain weather',
            warmth: 'Extra Warm',
            inStock: true,
        },
        {
            id: 5,
            name: 'Lightweight Cotton Sweater',
            price: 69,
            rating: 4.5,
            reviews: 178,
            image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=400&h=500&fit=crop',
            category: 'cotton',
            description: 'Breathable cotton for mild winters',
            warmth: 'Light',
            inStock: true,
        },
        {
            id: 6,
            name: 'Premium Merino Sweater',
            price: 199,
            rating: 5.0,
            reviews: 62,
            image: 'https://images.unsplash.com/photo-1604695573706-53170668f6a6?w=400&h=500&fit=crop',
            category: 'merino',
            description: 'Fine merino wool with temperature regulation',
            warmth: 'Warm',
            inStock: true,
        },
    ];

    const categories = [
        { id: 'all', name: 'All Sweaters' },
        { id: 'wool', name: 'Wool' },
        { id: 'cashmere', name: 'Cashmere' },
        { id: 'cardigan', name: 'Cardigans' },
        { id: 'cotton', name: 'Cotton' },
        { id: 'merino', name: 'Merino' },
    ];

    const filteredSweaters = selectedCategory === 'all'
        ? sweaters
        : sweaters.filter(sweater => sweater.category === selectedCategory);

    const getWarmthColor = (warmth) => {
        switch (warmth) {
            case 'Extra Warm': return 'bg-himachali-red text-white';
            case 'Warm': return 'bg-himachali-orange text-white';
            case 'Medium': return 'bg-himachali-gold text-ink';
            case 'Light': return 'bg-blue-100 text-blue-700';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    return (
        <div className="min-h-screen bg-cream pt-24 pb-16">
            {/* Hero Banner */}
            <div className="relative h-64 bg-linear-to-r from-himachali-orange to-himachali-red mb-12">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
                    <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">Winter Sweaters</h1>
                    <p className="text-lg text-white/90">Handcrafted Warmth from the Himalayas</p>
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
                                    ? 'bg-himachali-orange text-white shadow-lg'
                                    : 'bg-white text-ink hover:bg-himachali-orange/10'
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {filteredSweaters.map((sweater) => (
                        <div
                            key={sweater.id}
                            className="group bg-white rounded-lg overflow-hidden card-shadow hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Product Image */}
                            <div className="relative h-80 overflow-hidden bg-gray-100">
                                <img
                                    src={sweater.image}
                                    alt={sweater.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition">
                                    <Heart size={20} className="text-himachali-red" />
                                </button>
                                {sweater.inStock && (
                                    <span className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                                        IN STOCK
                                    </span>
                                )}
                                <span className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${getWarmthColor(sweater.warmth)}`}>
                                    {sweater.warmth}
                                </span>
                            </div>

                            {/* Product Info */}
                            <div className="p-5">
                                <h3 className="text-ink font-serif font-bold text-lg mb-2 line-clamp-2">
                                    {sweater.name}
                                </h3>

                                <p className="text-muted text-sm mb-3 line-clamp-2">
                                    {sweater.description}
                                </p>

                                {/* Rating */}
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="flex text-himachali-gold">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={16} fill={i < Math.floor(sweater.rating) ? 'currentColor' : 'none'} />
                                        ))}
                                    </div>
                                    <span className="text-sm text-muted">
                                        {sweater.rating} ({sweater.reviews} reviews)
                                    </span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <p className="text-himachali-orange font-bold text-2xl">${sweater.price}</p>
                                    <button className="flex items-center gap-2 bg-himachali-orange text-white px-4 py-2 rounded-lg font-medium hover:bg-himachali-red transition-all duration-300 hover:shadow-lg">
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
                        <div className="w-16 h-16 bg-himachali-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-3xl">🧶</span>
                        </div>
                        <h3 className="font-serif font-bold text-lg mb-2">Handknit Quality</h3>
                        <p className="text-muted text-sm">Each sweater crafted with care by local artisans</p>
                    </div>
                    <div className="text-center p-6">
                        <div className="w-16 h-16 bg-himachali-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-3xl">❄️</span>
                        </div>
                        <h3 className="font-serif font-bold text-lg mb-2">Himalayan Warmth</h3>
                        <p className="text-muted text-sm">Designed for harsh mountain winters</p>
                    </div>
                    <div className="text-center p-6">
                        <div className="w-16 h-16 bg-himachali-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-3xl">🌿</span>
                        </div>
                        <h3 className="font-serif font-bold text-lg mb-2">Natural Fibers</h3>
                        <p className="text-muted text-sm">Pure wool, cashmere, and cotton materials</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
