import heroImage from '@/assets/hero-newquay.jpg';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAccommodations = () => {
    document.getElementById('accommodations')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm text-primary-foreground text-sm font-medium mb-6">
            Cornwall's most beautiful coastline
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Discover Newquay's
            <br />
            <span className="text-sunset-light">stunning stays</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl mx-auto font-body">
            Surfing, sunsets and unforgettable moments await. 
            Find your perfect coastal getaway.
          </p>
          <Button 
            onClick={scrollToAccommodations}
            size="lg"
            className="bg-gradient-sunset text-accent-foreground shadow-button hover:opacity-90 transition-all font-semibold px-8 py-6 text-lg rounded-full"
          >
            View Accommodations
          </Button>
        </div>
      </div>

      <button 
        onClick={scrollToAccommodations}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/80 hover:text-primary-foreground transition-colors animate-float"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-10 w-10" />
      </button>
    </section>
  );
};

export default Hero;
