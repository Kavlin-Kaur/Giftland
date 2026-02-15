export default function AboutPage() {
    return (
        <div className="min-h-screen bg-cream pt-24 pb-16">
            {/* Hero Section */}
            <div className="relative h-64 bg-linear-to-r from-himachali-maroon via-himachali-red to-himachali-orange mb-12">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
                    <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">About TriJas</h1>
                    <p className="text-lg text-white/90">30+ Years of Shimla Heritage & Craftsmanship</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Story Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* Left: Story Text */}
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink mb-6">
                            Our Journey: 30+ Years in Shimla
                        </h2>

                        <div className="space-y-4 text-muted leading-relaxed">
                            <p>
                                TriJas is proudly rooted in the heart of Shimla—one of India's most vibrant cultural centers.
                                For over three decades, our family has been dedicated to preserving and celebrating the rich textile heritage
                                of Himachel Pradesh.
                            </p>

                            <p>
                                Located in the iconic <span className="font-semibold text-ink">Lakkar Bazar, Shimla</span>, our traditional
                                gift shop has become a beloved destination for locals and travelers alike. Lakkar Bazar, nestled near the
                                famous Tripti Restaurant, is renowned as the heart of Shimla's handcraft district—a lively, winding bazaar
                                brimming with artisan shops, traditional wooden crafts, and heritage textile stalls.
                            </p>

                            <p>
                                Our shop specializes in authentic handwoven shawls, traditional Himachali suits, cozy sweaters, and the
                                revered Poonchu—all meticulously sourced from local weavers and craftspeople across the region. Every piece
                                tells a story of generations of skill, cultural pride, and dedication to our craft.
                            </p>
                        </div>
                    </div>

                    {/* Right: Shop Details & Atmosphere */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-lg p-6 card-shadow">
                            <h3 className="text-2xl font-serif font-bold text-himachali-red mb-4">Our Physical Store</h3>
                            <div className="space-y-3 text-muted">
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-himachali-orange font-bold">Location</p>
                                    <p className="text-lg text-ink">Lakkar Bazar, Shimla</p>
                                    <p className="text-sm">Near Tripti Restaurant, Shimla, HP 171001</p>
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-himachali-orange font-bold">Experience</p>
                                    <p className="text-sm">
                                        Walk into a traditional wooden storefront lined with heritage shawls, textiles, and gift items.
                                        Experience the warm hospitality of our team as they guide you through centuries-old weaving traditions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-cream rounded-lg p-6 border-2 border-himachali-maroon/30">
                            <h3 className="font-serif font-bold text-ink mb-3">Why Lakkar Bazar?</h3>
                            <ul className="space-y-2 text-sm text-muted">
                                <li className="flex gap-2">
                                    <span className="text-himachali-orange">✦</span>
                                    <span><strong>Artisan Hub:</strong> Home to skilled craftsmen across textiles, wood, and handicrafts</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-himachali-orange">✦</span>
                                    <span><strong>Cultural Epicenter:</strong> Where locals and tourists converge for authentic Himachali goods</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-himachali-orange">✦</span>
                                    <span><strong>Bustling Street:</strong> Narrow, winding lanes filled with energy, tradition, and heritage</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-himachali-orange">✦</span>
                                    <span><strong>Tourist Favorite:</strong> Essential stop for visitors seeking authentic Shimla souvenirs</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Mission & Values */}
                <div className="bg-white rounded-lg p-8 card-shadow mb-16 geometric-border">
                    <h2 className="text-3xl font-serif font-bold text-ink mb-8 text-center">Our Mission & Values</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-himachali-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🧵</span>
                            </div>
                            <h3 className="font-serif font-bold text-ink mb-2">Authenticity</h3>
                            <p className="text-muted text-sm">
                                We ensure every product is genuinely handcrafted by local artisans using traditional methods passed down for generations.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-himachali-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🏔️</span>
                            </div>
                            <h3 className="font-serif font-bold text-ink mb-2">Community Support</h3>
                            <p className="text-muted text-sm">
                                We partner directly with weavers and craftspeople across Himachal Pradesh, ensuring fair wages and sustainable livelihoods.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-himachali-maroon/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">💎</span>
                            </div>
                            <h3 className="font-serif font-bold text-ink mb-2">Quality Excellence</h3>
                            <p className="text-muted text-sm">
                                Only the finest materials and meticulous craftsmanship make it to our collection—quality over everything.
                            </p>
                        </div>
                    </div>
                </div>

                {/* What We Offer */}
                <div className="mb-16">
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink mb-8 text-center">What We Offer</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-cream rounded-lg p-6 text-center">
                            <p className="text-4xl mb-3">🧣</p>
                            <h3 className="font-serif font-bold text-ink mb-2">Traditional Shawls</h3>
                            <p className="text-sm text-muted">Handwoven elegance from Shimla's finest looms</p>
                        </div>

                        <div className="bg-cream rounded-lg p-6 text-center">
                            <p className="text-4xl mb-3">👗</p>
                            <h3 className="font-serif font-bold text-ink mb-2">Himachali Suits</h3>
                            <p className="text-sm text-muted">Traditional formal wear for every occasion</p>
                        </div>

                        <div className="bg-cream rounded-lg p-6 text-center">
                            <p className="text-4xl mb-3">🧶</p>
                            <h3 className="font-serif font-bold text-ink mb-2">Winter Sweaters</h3>
                            <p className="text-sm text-muted">Cozy warmth crafted from natural fibers</p>
                        </div>

                        <div className="bg-cream rounded-lg p-6 text-center">
                            <p className="text-4xl mb-3">🏔️</p>
                            <h3 className="font-serif font-bold text-ink mb-2">Poonchu</h3>
                            <p className="text-sm text-muted">Traditional Himalayan wraps with heritage patterns</p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-linear-to-r from-himachali-red to-himachali-orange rounded-lg p-8 text-white text-center">
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4">
                        Visit Us at Lakkar Bazar, Shimla
                    </h2>
                    <p className="mb-6 text-white/90">
                        Experience authentic Himalayan craftsmanship. Walk the winding streets of Lakkar Bazar,
                        discover our store near Tripti, and take home a piece of Shimla's cultural heritage.
                    </p>
                    <a
                        href="https://www.google.com/maps/search/Lakkar+Bazar+Shimla"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-himachali-red px-8 py-3 rounded-lg font-semibold hover:bg-cream transition"
                    >
                        Find Us on Maps →
                    </a>
                </div>
            </div>
        </div>
    );
}
