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
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-cream geometric-border himachali-pattern-bg">
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
            <div key={feature.id} className="text-center bg-white rounded-lg p-6 card-shadow">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-cream rounded-full shadow-md">
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

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-white rounded-lg p-4 shadow-md">
            <p className="text-xs uppercase tracking-widest text-muted">Craft</p>
            <p className="text-lg font-semibold text-ink">Handwoven in HP</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <p className="text-xs uppercase tracking-widest text-muted">Care</p>
            <p className="text-lg font-semibold text-ink">Ethical Sourcing</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <p className="text-xs uppercase tracking-widest text-muted">Support</p>
            <p className="text-lg font-semibold text-ink">24/7 Assistance</p>
          </div>
        </div>
      </div>
    </section>
  );
}
