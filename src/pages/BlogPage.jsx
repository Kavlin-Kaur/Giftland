import { useState } from 'react';
import { Calendar, User, Heart, Share2, ArrowRight } from 'lucide-react';

export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const blogPosts = [
        {
            id: 1,
            title: 'The Sacred Threads: Understanding Himachali Shawl Weaving',
            excerpt: 'Discover the centuries-old weaving techniques that make Himachali shawls a masterpiece. Learn about the symbolism behind traditional patterns and how master weavers pass these skills to the next generation.',
            content: 'Himachali shawls are not just garments—they are repositories of cultural heritage. Each pattern tells a story of the region, the season, and the craftsperson\'s soul.',
            image: 'https://images.unsplash.com/photo-1615568135662-0ff6d606203f?w=500&h=300&fit=crop',
            author: 'Kavlin Kaur',
            date: 'February 15, 2026',
            category: 'Heritage',
            readTime: '8 min read',
            likes: 342,
        },
        {
            id: 2,
            title: 'Lakkar Bazar: The Heart of Shimla\'s Artisan Culture',
            excerpt: 'A walk through Shimla\'s most vibrant bazaar where tradition meets commerce. Explore the narrow lanes, meet master craftspeople, and understand why Lakkar Bazar remains a cultural icon.',
            content: 'Lakkar Bazar is more than a marketplace—it\'s a living museum of Himalayan craftsmanship.',
            image: 'https://images.unsplash.com/photo-1469022563149-aa64dbd37dae?w=500&h=300&fit=crop',
            author: 'Priya Sharma',
            date: 'February 10, 2026',
            category: 'Culture',
            readTime: '6 min read',
            likes: 289,
        },
        {
            id: 3,
            title: 'The Poonchu: A Garment Steeped in Tradition',
            excerpt: 'Explore the history and significance of the Poonchu, a traditional Himalayan wrap worn during festivals and celebrations. Learn how regional variations reflect local tribal identity.',
            content: 'The Poonchu transcends fashion—it is a symbol of cultural identity and ancestral pride.',
            image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=500&h=300&fit=crop',
            author: 'Anita Thakur',
            date: 'February 5, 2026',
            category: 'Heritage',
            readTime: '7 min read',
            likes: 215,
        },
        {
            id: 4,
            title: 'Sustainable Fashion: The Himachali Way',
            excerpt: 'How traditional Himalayan textile production embodies sustainability centuries before the term was coined. Discover ethical practices that protect both artisans and the environment.',
            content: 'Himachali artisans practice sustainability as a way of life, not a trend.',
            image: 'https://images.unsplash.com/photo-1589985643519-d9b6e5b8f868?w=500&h=300&fit=crop',
            author: 'Rajesh Kumar',
            date: 'February 1, 2026',
            category: 'Sustainability',
            readTime: '10 min read',
            likes: 456,
        },
        {
            id: 5,
            title: 'From Loom to Luxury: Inside an Artisan\'s Workshop',
            excerpt: 'Step inside a traditional Shimla weaving workshop and see firsthand how hand-loomed textiles are created. An intimate portrait of master weavers preserving centuries of skill.',
            content: 'Every thread has a story; every knot has a master\'s touch.',
            image: 'https://images.unsplash.com/photo-1616387578227-7515ac3737d0?w=500&h=300&fit=crop',
            author: 'Maya Devi',
            date: 'January 28, 2026',
            category: 'Artisans',
            readTime: '9 min read',
            likes: 567,
        },
        {
            id: 6,
            title: 'Color in Culture: The Dyes of Himachal Pradesh',
            excerpt: 'Explore the natural dyes and color symbolism in Himachali textiles. From indigo to madder, learn how centuries-old dyeing practices create vibrant hues that tell of the land.',
            content: 'Colors in Himachali textiles are borrowed from nature—mineral, plant, and earth.',
            image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=300&fit=crop',
            author: 'Deepak Singh',
            date: 'January 20, 2026',
            category: 'Craft',
            readTime: '8 min read',
            likes: 398,
        },
    ];

    const categories = [
        { id: 'all', name: 'All Posts' },
        { id: 'Heritage', name: 'Heritage' },
        { id: 'Culture', name: 'Culture' },
        { id: 'Sustainability', name: 'Sustainability' },
        { id: 'Artisans', name: 'Artisans' },
        { id: 'Craft', name: 'Craft' },
    ];

    const filteredPosts = selectedCategory === 'all'
        ? blogPosts
        : blogPosts.filter(post => post.category === selectedCategory);

    return (
        <div className="min-h-screen bg-cream pt-24 pb-16">
            {/* Hero Section */}
            <div className="relative h-72 bg-linear-to-r from-himachali-maroon via-himachali-red to-himachali-orange mb-12">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
                    <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">TriJas Blog</h1>
                    <p className="text-lg text-white/90">Stories of heritage, culture, and craftsmanship from the Himalayas</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Category Filter */}
                <div className="flex flex-wrap gap-3 mb-12 justify-center">
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

                {/* Featured Post */}
                {filteredPosts.length > 0 && (
                    <div className="mb-16">
                        <div className="relative h-96 rounded-lg overflow-hidden card-shadow group">
                            <img
                                src={filteredPosts[0].image}
                                alt={filteredPosts[0].title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>

                            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="inline-block bg-himachali-red px-4 py-1 rounded-full text-xs font-bold uppercase">
                                        {filteredPosts[0].category}
                                    </span>
                                    <span className="text-sm text-white/80 flex items-center gap-1">
                                        <Calendar size={14} />
                                        {filteredPosts[0].date}
                                    </span>
                                </div>

                                <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-3">
                                    {filteredPosts[0].title}
                                </h2>

                                <p className="text-white/90 mb-4 line-clamp-2">
                                    {filteredPosts[0].excerpt}
                                </p>

                                <button className="inline-flex items-center gap-2 bg-himachali-orange text-white px-6 py-2 rounded-lg font-semibold hover:bg-himachali-red transition">
                                    Read Article <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.slice(1).map((post) => (
                        <article
                            key={post.id}
                            className="bg-white rounded-lg overflow-hidden card-shadow hover:shadow-2xl transition-all duration-300 group"
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden bg-gray-100">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="inline-block bg-himachali-orange text-white px-3 py-1 text-xs font-bold rounded-full">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3 text-xs text-muted">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={14} />
                                        {post.date}
                                    </div>
                                    <span>{post.readTime}</span>
                                </div>

                                <h3 className="text-lg font-serif font-bold text-ink mb-3 line-clamp-3 group-hover:text-himachali-red transition">
                                    {post.title}
                                </h3>

                                <p className="text-muted text-sm mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4 text-muted text-sm">
                                        <button className="flex items-center gap-1 hover:text-himachali-red transition">
                                            <Heart size={16} />
                                            {post.likes}
                                        </button>
                                    </div>
                                    <button className="text-himachali-red font-semibold hover:text-himachali-maroon transition flex items-center gap-1">
                                        Read <ArrowRight size={16} />
                                    </button>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="px-6 py-4 bg-cream border-t border-primary/10 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <User size={14} className="text-muted" />
                                    <span className="text-xs font-semibold text-ink">{post.author}</span>
                                </div>
                                <Share2 size={16} className="text-muted hover:text-himachali-orange cursor-pointer transition" />
                            </div>
                        </article>
                    ))}
                </div>

                {/* Empty State */}
                {filteredPosts.length === 1 && (
                    <div className="text-center py-12">
                        <p className="text-muted text-lg mb-4">No posts in this category yet.</p>
                        <button
                            onClick={() => setSelectedCategory('all')}
                            className="text-himachali-red font-semibold hover:text-himachali-maroon transition"
                        >
                            View all posts →
                        </button>
                    </div>
                )}

                {/* Newsletter CTA */}
                <div className="mt-16 bg-linear-to-r from-himachali-red to-himachali-orange rounded-lg p-8 sm:p-12 text-white text-center geometric-border">
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4">
                        Never Miss a Story
                    </h2>
                    <p className="mb-6 text-white/90 max-w-2xl mx-auto">
                        Subscribe to our newsletter to receive curated Himachali heritage stories,
                        artisan features, and cultural insights delivered to your inbox monthly.
                    </p>
                    <a
                        href="/newsletter"
                        className="inline-block bg-white text-himachali-red px-8 py-3 rounded-lg font-semibold hover:bg-cream transition"
                    >
                        Subscribe to Newsletter →
                    </a>
                </div>
            </div>
        </div>
    );
}
