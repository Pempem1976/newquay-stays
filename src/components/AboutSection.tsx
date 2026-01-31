import { Waves, Sun, UtensilsCrossed, Camera } from 'lucide-react';

const features = [
  {
    icon: Waves,
    title: 'Világszínvonalú szörfözés',
    description: 'Fistral Beach az Egyesült Királyság szörfös fővárosa, tökéletes hullámokkal kezdőknek és profiknak egyaránt.'
  },
  {
    icon: Sun,
    title: 'Gyönyörű strandok',
    description: '7 lélegzetelállító strand vár arany homokkal és kristálytiszta vízzel Cornwall szívében.'
  },
  {
    icon: UtensilsCrossed,
    title: 'Gasztronómia',
    description: 'Friss tengeri ételek, helyi kézműves sörök és díjnyertes éttermek minden sarkon.'
  },
  {
    icon: Camera,
    title: 'Felejthetetlen élmények',
    description: 'Bálnalesés, part menti séták, és a legszebb naplementék várnak Cornwallban.'
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Miért Newquay?
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Cornwall <span className="text-primary">ékköve</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Newquay az Egyesült Királyság legkedveltebb tengerparti úti célja, 
            ahol a természet szépsége találkozik a szörfös életérzéssel.
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
