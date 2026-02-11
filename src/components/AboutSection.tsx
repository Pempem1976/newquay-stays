import { Waves, BabyIcon, UtensilsCrossed, Camera , HeartIcon } from 'lucide-react';

const features = [
  {
    icon: Waves,
    title: 'World-Class Surfing',
    description: 'If you’re here to surf, you’re in the right place. Newquay is often called the surf capital of the UK, with world-famous beaches like Fistral Beach, Towan Beach, and Lusty Glaze. Whether you’re a beginner or an experienced surfer, there are waves, surf schools, and board hire all close by.'
  },
  {
    icon: BabyIcon,
    title: 'Perfect for Families',
    description: 'Newquay is a wonderful destination for families. Safe sandy beaches, rock pools, and gentle coastal walks make it easy to enjoy time together. Newquay Zoo and the Blue Reef Aquarium are both nearby and always a hit with children, while plenty of cafés and restaurants welcome families with open arms.'
  },
  {
    icon: HeartIcon,
    title: 'Ideal for Couples ',
    description: 'For couples, Newquay offers romance in its simplest form – long beach walks, stunning sunsets, and cosy seaside dinners. Enjoy a sunset drink overlooking the ocean, explore quiet coves along the South West Coast Path, or take a short trip to nearby villages for a slower pace and beautiful scenery.'
  },
  {
    icon: UtensilsCrossed,
    title: 'Food, Culture & Local Life',
    description: 'Cornwall is known for its food, and Newquay delivers. Don’t leave without trying a traditional Cornish pasty, fresh local seafood, or a cream tea. The town has a lively cultural scene too, with music events, beach festivals and the well-known Boardmasters Festival, bringing together surf, music and summer vibes.'
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
