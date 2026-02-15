import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function Stories() {
  const [currentStory, setCurrentStory] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const stories = [
    {
      id: 1,
      title: 'Heritage Silk Pashmina',
      description: 'Handcrafted with 100% pure silk and cashmere blend',
      image: 'https://images.unsplash.com/photo-1615568135662-0ff6d606203f?w=500&h=700&fit=crop',
      price: '$299',
      tag: 'NEW',
    },
    {
      id: 2,
      title: 'Luxe Cashmere Blend',
      description: 'Premium quality with traditional Himachali weave',
      image: 'https://images.unsplash.com/photo-1599917753413-310d9dcf1313?w=500&h=700&fit=crop',
      price: '$349',
      tag: 'BEST SELLER',
    },
    {
      id: 3,
      title: 'Artisan Wool Weave',
      description: 'Sustainable and ethically sourced materials',
      image: 'https://images.unsplash.com/photo-1585695159474-c3fb1176b13f?w=500&h=700&fit=crop',
      price: '$279',
      tag: 'ECO-FRIENDLY',
    },
    {
      id: 4,
      title: 'Premium Cotton Stole',
      description: 'Perfect for any season, lightweight comfort',
      image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=500&h=700&fit=crop',
      price: '$199',
      tag: 'SUMMER',
    },
    {
      id: 5,
      title: 'Embroidered Shawl',
      description: 'Intricate gold embroidery with traditional motifs',
      image: 'https://images.unsplash.com/photo-1534609949213-bc44e48dff0f?w=500&h=700&fit=crop',
      price: '$449',
      tag: 'LUXURY',
    },
  ];

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentStory((prev) => (prev + 1) % stories.length);
          return 0;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isAutoPlay, stories.length]);

  const handleNext = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
    setProgress(0);
    setIsAutoPlay(false);
  };

  const handlePrev = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
    setProgress(0);
    setIsAutoPlay(false);
  };

  const story = stories[currentStory];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-cream geometric-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink mb-2">
            Featured Stories
          </h2>
          <p className="text-muted text-sm sm:text-base">
            Discover our latest collections and exclusive pieces
          </p>
        </div>

        {/* Instagram-style Story */}
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Story Display */}
          <div className="flex-1 relative">
            <div className="relative h-[70vh] sm:h-[80vh] lg:h-screen max-h-96 sm:max-h-125 lg:max-h-150 bg-black rounded-lg overflow-hidden group">
              {/* Progress Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-white/20 z-20">
                <div
                  className="h-full bg-white transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Story Image with Gradient Overlay */}
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/60" />

              {/* Story Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-linear-to-r from-himachali-red to-himachali-orange flex items-center justify-center">
                    <span className="text-white text-sm font-bold">T</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm sm:text-base">TriJas Official</p>
                    <p className="text-white/70 text-xs">Now</p>
                  </div>
                  <button className="ml-auto text-white hover:bg-white/20 p-2 rounded-full transition">
                    <X size={20} />
                  </button>
                </div>

                {/* Content */}
                <div className="text-white">
                  <span className="inline-block bg-linear-to-r from-himachali-red to-himachali-orange text-white px-3 py-1 rounded-full text-xs font-bold mb-4">
                    {story.tag}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-2 text-white">
                    {story.title}
                  </h3>
                  <p className="text-white/90 text-sm sm:text-base mb-4">
                    {story.description}
                  </p>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-himachali-gold">{story.price}</span>
                  </div>
                  <button className="bg-linear-to-r from-himachali-red to-himachali-orange text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition transform hover:scale-105 text-sm sm:text-base">
                    Shop Now
                  </button>
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition z-10 opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition z-10 opacity-0 group-hover:opacity-100"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Story Indicators */}
            <div className="flex gap-2 mt-6 justify-center flex-wrap">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentStory(index);
                    setProgress(0);
                    setIsAutoPlay(false);
                  }}
                  className={`h-2 transition-all ${
                    index === currentStory
                      ? 'bg-himachali-red w-8'
                      : 'bg-gray-300 w-2 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* All Stories Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
              {stories.map((stry, index) => (
                <div
                  key={stry.id}
                  onClick={() => {
                    setCurrentStory(index);
                    setProgress(0);
                    setIsAutoPlay(false);
                  }}
                  className={`relative h-40 sm:h-48 rounded-lg overflow-hidden cursor-pointer group transition-transform hover:scale-105 ${
                    index === currentStory ? 'ring-2 ring-himachali-red' : ''
                  }`}
                >
                  <img
                    src={stry.image}
                    alt={stry.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                    <p className="font-semibold text-sm line-clamp-2">{stry.title}</p>
                    <p className="text-himachali-gold text-xs font-bold mt-1">{stry.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
