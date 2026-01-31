import { useState } from 'react';
import AccommodationCard from './AccommodationCard';
import BookingModal from './BookingModal';
import { accommodations, Accommodation } from '@/data/accommodations';

const AccommodationSection = () => {
  const [selectedAccommodation, setSelectedAccommodation] = useState<Accommodation | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBook = (accommodation: Accommodation) => {
    setSelectedAccommodation(accommodation);
    setIsModalOpen(true);
  };

  return (
    <section id="accommodations" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Szállásaink
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Válaszd ki <span className="text-primary">tökéletes</span> szállásod
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A hangulatos tengerparti házikóktól a luxus lakosztályokig - 
            nálunk mindenki megtalálja az ideális szállását.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {accommodations.map((accommodation, index) => (
            <div 
              key={accommodation.id} 
              className="animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <AccommodationCard 
                accommodation={accommodation}
                onBook={handleBook}
              />
            </div>
          ))}
        </div>
      </div>

      <BookingModal 
        accommodation={selectedAccommodation}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default AccommodationSection;
