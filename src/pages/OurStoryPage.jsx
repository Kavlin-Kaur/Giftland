import { Heart, Clock, Award, Users } from 'lucide-react';

export default function OurStoryPage() {
  const milestones = [
    {
      year: '1993',
      title: 'The Beginning',
      description: 'Founded by the Kaur family in the heart of Lakkar Bazar, Shimla. What started as a small stall became a destination for authentic Himachali textiles.',
    },
    {
      year: '2000',
      title: 'Artisan Network Grows',
      description: 'Established partnerships with 50+ weaving families across Himachal Pradesh, ensuring fair wages and preserving traditional techniques.',
    },
    {
      year: '2010',
      title: 'Heritage Recognition',
      description: 'Recognized by Himachal Pradesh Tourism for preserving and promoting traditional Himalayan textile arts.',
    },
    {
      year: '2020',
      title: 'Going Digital',
      description: 'Launched online presence to share Himachali heritage with the world while maintaining our physical roots in Lakkar Bazar.',
    },
    {
      year: '2026',
      title: 'Sustainable Future',
      description: 'Now supporting 250+ artisan families, planting 5,000+ trees, and leading sustainable textile practices in the region.',
    },
  ];

  return (
    <div className="min-h-screen bg-cream pt-24 pb-16">
      {/* Hero Section */}
      <div className="relative h-96 bg-linear-to-r from-himachali-maroon via-himachali-red to-himachali-orange mb-12">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">Our Story</h1>
          <p className="text-lg text-white/90 max-w-2xl text-center">
            Three decades of tradition, craftsmanship, and community in the heart of Shimla
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Opening */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-lg p-8 sm:p-12 card-shadow geometric-border">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink mb-6">
              From a Family Dream to a Heritage Destination
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                In 1993, our family opened a modest shop in Lakkar Bazar, Shimla—a bustling marketplace 
                known for its wooden handicrafts and traditional textiles. We had one goal: to preserve 
                and celebrate the rich weaving heritage of Himachal Pradesh.
              </p>
              <p>
                What began as a single storefront near Tripti Restaurant has grown into a beloved 
                destination for travelers and locals seeking authentic Himachali shawls, suits, 
                sweaters, and the traditional Poonchu. But our mission has never changed—honor the craft, 
                support the artisans, and share our heritage with the world.
              </p>
              <p>
                Today, over 30 years later, TriJas is more than a shop. It's a bridge between ancient 
                Himalayan traditions and modern appreciation for handcrafted excellence. Every piece we 
                sell tells a story of dedication, skill, and cultural pride.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink mb-12 text-center">
            Our Journey
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-himachali-orange"></div>

            {milestones.map((milestone, index) => (
              <div key={index} className={`mb-12 lg:mb-16 flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="bg-white rounded-lg p-6 card-shadow">
                    <p className="text-3xl font-bold text-himachali-red mb-2">{milestone.year}</p>
                    <h3 className="text-xl font-serif font-bold text-ink mb-3">{milestone.title}</h3>
                    <p className="text-muted leading-relaxed">{milestone.description}</p>
                  </div>
                </div>

                {/* Dot */}
                <div className="hidden lg:block w-4 h-4 rounded-full bg-himachali-orange border-4 border-cream z-10"></div>

                {/* Spacer */}
                <div className="hidden lg:block lg:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink mb-12 text-center">
            What Drives Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center card-shadow">
              <div className="flex justify-center mb-4 text-himachali-red">
                <Heart size={32} />
              </div>
              <h3 className="font-serif font-bold text-lg text-ink mb-2">Passion for Craft</h3>
              <p className="text-sm text-muted">
                Every textile is a work of art, crafted with centuries of inherited skill and love.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center card-shadow">
              <div className="flex justify-center mb-4 text-himachali-orange">
                <Users size={32} />
              </div>
              <h3 className="font-serif font-bold text-lg text-ink mb-2">Community First</h3>
              <p className="text-sm text-muted">
                We support artisan families, ensuring fair wages and sustainable livelihoods.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center card-shadow">
              <div className="flex justify-center mb-4 text-himachali-maroon">
                <Award size={32} />
              </div>
              <h3 className="font-serif font-bold text-lg text-ink mb-2">Quality Promise</h3>
              <p className="text-sm text-muted">
                Only authentic, handcrafted textiles. No shortcuts, no mass production.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center card-shadow">
              <div className="flex justify-center mb-4 text-himachali-gold">
                <Clock size={32} />
              </div>
              <h3 className="font-serif font-bold text-lg text-ink mb-2">Timeless Tradition</h3>
              <p className="text-sm text-muted">
                Preserving 300-year-old weaving techniques for future generations.
              </p>
            </div>
          </div>
        </div>

        {/* Family Legacy */}
        <div className="bg-white rounded-lg overflow-hidden card-shadow mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="relative h-80 lg:h-auto">
              <img
                src="https://images.unsplash.com/photo-1469022563149-aa64dbd37dae?w=800&h=600&fit=crop"
                alt="Lakkar Bazar Shimla"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink mb-6">
                Still in Lakkar Bazar, Still Family-Run
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                Despite expanding online, our heart remains in Lakkar Bazar. Walk into our shop 
                today and you'll be greeted by the same family that founded it over 30 years ago.
              </p>
              <p className="text-muted leading-relaxed mb-4">
                You'll see shawls draped from floor to ceiling, smell the natural dyes, and feel 
                the texture of hand-loomed wool under your fingers. This is where tradition lives.
              </p>
              <p className="text-muted leading-relaxed">
                Our legacy is not in profits—it's in preserving a way of life. Every artisan we 
                support, every customer we serve, becomes part of this story.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-linear-to-r from-himachali-red to-himachali-orange rounded-lg p-8 text-white text-center geometric-border">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4">
            Become Part of Our Story
          </h2>
          <p className="mb-6 text-white/90 max-w-2xl mx-auto">
            When you shop with TriJas, you're not just buying a product—you're supporting 
            artisan families, preserving heritage, and carrying a piece of Himachal with you.
          </p>
          <a
            href="/shawls"
            className="inline-block bg-white text-himachali-red px-8 py-3 rounded-lg font-semibold hover:bg-cream transition"
          >
            Explore Our Collection →
          </a>
        </div>
      </div>
    </div>
  );
}
