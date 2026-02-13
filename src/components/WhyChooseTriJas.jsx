import { Zap, Award, RotateCcw } from 'lucide-react';

export default function WhyChooseTriJas() {
  const features = [
    {
      id: 1,
      icon: <Award size={40} className="text-primary" />,
      title: 'Premium Fabrics',
      description: 'Handpicked materials sourced from the finest textile mills across the world.',
    },
    {
      id: 2,
      icon: <Zap size={40} className="text-primary" />,
      title: 'Handcrafted Quality',
      description: 'Every piece is meticulously created by skilled artisans preserving traditional techniques.',
    },
    {
      id: 3,
      icon: <RotateCcw size={40} className="text-primary" />,
      title: 'Easy Returns',
      description: '30-day hassle-free returns and exchanges. Your satisfaction is our priority.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-cream geometric-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink mb-2">
            Why Choose TriJas
          </h2>
          <p className="text-muted text-sm sm:text-base">
            The TriJas difference
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature) => (
            <div key={feature.id} className="text-center">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white rounded-full shadow-md">
                  {feature.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-serif font-bold text-lg sm:text-xl text-ink mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-muted text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
