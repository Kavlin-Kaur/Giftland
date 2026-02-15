import { Leaf, Users, Recycle, Heart, Mountain, Droplets, Sun, Wind } from 'lucide-react';

export default function SustainabilityPage() {
  const principles = [
    {
      icon: <Leaf size={32} />,
      title: 'Natural Materials',
      description: 'We exclusively use organic wool, cotton, and silk sourced from Himalayan farms. No synthetic fibers, no chemical treatments—just pure, natural textiles that breathe with the land.',
    },
    {
      icon: <Users size={32} />,
      title: 'Fair Wages for Artisans',
      description: 'Every weaver receives fair compensation above regional standards. We build long-term partnerships with families who have practiced this craft for generations, ensuring dignity and economic stability.',
    },
    {
      icon: <Recycle size={32} />,
      title: 'Zero-Waste Production',
      description: 'Traditional handloom techniques naturally minimize waste. Leftover threads are repurposed into smaller goods, and natural dyes return safely to the earth after use.',
    },
    {
      icon: <Heart size={32} />,
      title: 'Community Investment',
      description: 'We reinvest in local schools, healthcare, and weaving cooperatives. Strong communities create strong textiles—supporting artisans means supporting entire villages.',
    },
  ];

  const practices = [
    {
      icon: <Mountain size={28} />,
      title: 'Himalayan Wool',
      stat: '100% Mountain-Sourced',
      description: 'Our wool comes from free-grazing sheep and goats in Himachal Pradesh\'s high-altitude pastures. These animals graze on natural grasses, producing the finest, warmest fibers without industrial farming.',
      color: 'himachali-maroon',
    },
    {
      icon: <Droplets size={28} />,
      title: 'Natural Dyeing',
      stat: 'Plant-Based Colors',
      description: 'We use traditional natural dyes extracted from indigo, madder root, turmeric, and walnut shells. These dyes are biodegradable, non-toxic, and create the rich, earthy tones that define Himachali textiles.',
      color: 'himachali-orange',
    },
    {
      icon: <Sun size={28} />,
      title: 'Solar-Powered Workshops',
      stat: '80% Renewable Energy',
      description: 'Many of our partner workshops have transitioned to solar power, harnessing abundant Himalayan sunlight. Hand-looms require minimal electricity, making sustainable production achievable.',
      color: 'himachali-gold',
    },
    {
      icon: <Wind size={28} />,
      title: 'Carbon-Neutral Shipping',
      stat: 'Offset Every Delivery',
      description: 'We partner with carbon-neutral couriers and offset emissions through reforestation projects in Himachal Pradesh. Your purchase helps plant native trees in the Himalayas.',
      color: 'himachali-red',
    },
  ];

  const artisanStories = [
    {
      name: 'Kamla Devi',
      location: 'Kullu Valley',
      craft: 'Master Weaver - 40 Years',
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop',
      quote: 'Weaving is not just work—it is meditation, tradition, and love passed from my grandmother to me, and now to my daughters.',
    },
    {
      name: 'Rajesh Thakur',
      location: 'Kinnaur',
      craft: 'Natural Dye Specialist',
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop',
      quote: 'The colors of the mountains—green forests, golden harvests, red sunsets—these are the colors I create with plants, not chemicals.',
    },
    {
      name: 'Sunita Sharma',
      location: 'Shimla',
      craft: 'Embroidery Artisan',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
      quote: 'Each stitch carries a story. When you wear our work, you carry the soul of Himachal with you.',
    },
  ];

  return (
    <div className="min-h-screen bg-cream pt-24 pb-16">
      {/* Hero Section */}
      <div className="relative h-96 bg-linear-to-r from-green-700 via-green-600 to-green-500 mb-12">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&h=800&fit=crop)',
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <Leaf size={20} />
            <span className="text-sm font-semibold">Sustainability</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4 text-center">Crafted by Nature, Woven with Care</h1>
          <p className="text-lg text-white/90 max-w-2xl text-center">
            Preserving Himalayan heritage through ethical practices, natural materials, and community empowerment
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink mb-6">
            Sustainability is Our Heritage
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            For centuries, Himachali artisans have practiced what the modern world now calls "sustainability." 
            It was never a trend—it was survival, respect for nature, and reverence for craft.
          </p>
          <p className="text-muted leading-relaxed">
            Our textiles are made the way they have been for 300 years: by hand, with natural fibers, plant-based 
            dyes, and techniques passed down through generations. This is not just eco-friendly—it is a way of life.
          </p>
        </div>

        {/* Core Principles */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink mb-12 text-center">
            Our Core Principles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="bg-white rounded-lg p-8 card-shadow geometric-border">
                <div className="flex items-start gap-4">
                  <div className="text-himachali-red shrink-0 mt-1">
                    {principle.icon}
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl text-ink mb-3">{principle.title}</h3>
                    <p className="text-muted leading-relaxed">{principle.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sustainable Practices */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink mb-12 text-center">
            How We Practice Sustainability
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {practices.map((practice, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden card-shadow">
                <div className={`bg-${practice.color}/10 p-6 border-b-4 border-${practice.color}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`text-${practice.color}`}>
                      {practice.icon}
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-lg text-ink">{practice.title}</h3>
                      <p className={`text-sm font-bold text-${practice.color}`}>{practice.stat}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted leading-relaxed">{practice.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Artisan Stories */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink mb-6 text-center">
            Meet Our Artisans
          </h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-12">
            Behind every thread is a person, a family, and a story of dedication to craft and community.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {artisanStories.map((artisan, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden card-shadow">
                <div className="relative h-64">
                  <img
                    src={artisan.image}
                    alt={artisan.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-serif font-bold text-lg">{artisan.name}</h3>
                    <p className="text-sm text-white/80">{artisan.location}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-widest text-himachali-orange font-bold mb-3">
                    {artisan.craft}
                  </p>
                  <blockquote className="text-muted italic text-sm leading-relaxed">
                    "{artisan.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Environmental Impact */}
        <div className="bg-himachali-cream rounded-lg p-8 sm:p-12 geometric-border mb-16">
          <h2 className="text-3xl font-serif font-bold text-ink mb-8 text-center">
            Our Environmental Impact (2025)
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-4xl font-bold text-himachali-red mb-2">5,000+</p>
              <p className="text-sm text-muted">Trees Planted in Himachal</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-himachali-orange mb-2">100%</p>
              <p className="text-sm text-muted">Natural Fiber Products</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-himachali-maroon mb-2">250+</p>
              <p className="text-sm text-muted">Artisan Families Supported</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-green-600 mb-2">Zero</p>
              <p className="text-sm text-muted">Chemical Dyes or Synthetics</p>
            </div>
          </div>
        </div>

        {/* The Himalayan Way */}
        <div className="bg-white rounded-lg p-8 sm:p-12 card-shadow mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-ink mb-6">
                The Himalayan Way
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                In the mountains, nothing is wasted. Wool comes from animals that graze freely. 
                Water flows from glacial streams. Dyes come from roots, flowers, and bark. 
                The loom sits in a home, powered by human hands—not factories.
              </p>
              <p className="text-muted leading-relaxed mb-4">
                This is not new. This is how textiles have been made in Himachal Pradesh for centuries. 
                We are simply continuing what our ancestors perfected: creating beauty without harm.
              </p>
              <p className="text-muted leading-relaxed">
                When you choose TriJas, you choose a product born from harmony with nature, respect for people, 
                and pride in craft. You become part of this story.
              </p>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden card-shadow">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=800&fit=crop"
                alt="Himalayan Mountains"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-serif text-xl font-bold">
                  "Respect the land, honor the craft, sustain the people."
                </p>
                <p className="text-sm text-white/80 mt-2">— Himalayan Weaving Tradition</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-linear-to-r from-himachali-red to-himachali-orange rounded-lg p-8 text-white text-center geometric-border">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4">
            Support Sustainable Craftsmanship
          </h2>
          <p className="mb-6 text-white/90 max-w-2xl mx-auto">
            Every purchase supports artisan families, reforestation efforts, and the preservation 
            of centuries-old Himalayan textile traditions.
          </p>
          <a
            href="/shawls"
            className="inline-block bg-white text-himachali-red px-8 py-3 rounded-lg font-semibold hover:bg-cream transition"
          >
            Shop Sustainable Textiles →
          </a>
        </div>
      </div>
    </div>
  );
}
