import { Waves, Sun, UtensilsCrossed, Camera } from 'lucide-react';

const features = [
  {
    icon: Waves,
    title: 'World-Class Surfing',
    description: 'Fistral Beach is the UK\'s surfing capital, with perfect waves for beginners and pros alike.'
  },
  {
    icon: Sun,
    title: 'Beautiful Beaches',
    description: '7 stunning beaches await with golden sand and crystal-clear waters in the heart of Cornwall.'
  },
  {
    icon: UtensilsCrossed,
    title: 'Local Cuisine',
    description: 'Fresh seafood, local craft beers and award-winning restaurants on every corner.'
  },
  {
    icon: Camera,
    title: 'Unforgettable Experiences',
    description: 'Whale watching, coastal walks, and the most beautiful sunsets await you in Cornwall.'
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Why Newquay?
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Cornwall's <span className="text-primary">Jewel</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Newquay is the UK's most popular coastal destination, 
            where natural beauty meets surf culture.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group p-6 bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-ocean flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
