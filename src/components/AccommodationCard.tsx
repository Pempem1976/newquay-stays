import { Star, MapPin, Users, Bed, Bath } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accommodation } from '@/data/accommodations';

interface AccommodationCardProps {
  accommodation: Accommodation;
  onBook: (accommodation: Accommodation) => void;
}

const AccommodationCard = ({ accommodation, onBook }: AccommodationCardProps) => {
  return (
    <Card className="group overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border-0 bg-card">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img 
          src={accommodation.image} 
          alt={accommodation.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-card/90 backdrop-blur-sm text-foreground font-medium">
            <Star className="h-3.5 w-3.5 fill-sunset text-sunset mr-1" />
            {accommodation.rating}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Badge className="bg-primary text-primary-foreground font-semibold">
            {accommodation.currency}{accommodation.price}/éj
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {accommodation.name}
          </h3>
        </div>
        
        <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
          <MapPin className="h-4 w-4" />
          <span>{accommodation.location}</span>
        </div>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {accommodation.description}
        </p>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            <span>{accommodation.bedrooms} bed</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            <span>{accommodation.bathrooms} bath</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{accommodation.maxGuests} guests</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {accommodation.amenities.slice(0, 3).map((amenity) => (
            <Badge 
              key={amenity} 
              variant="secondary" 
              className="bg-secondary text-secondary-foreground text-xs font-normal"
            >
              {amenity}
            </Badge>
          ))}
          {accommodation.amenities.length > 3 && (
            <Badge 
              variant="secondary" 
              className="bg-secondary text-secondary-foreground text-xs font-normal"
            >
              +{accommodation.amenities.length - 3}
            </Badge>
          )}
        </div>
        
        <Button 
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
          onClick={() => onBook(accommodation)}
        >
          Book Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default AccommodationCard;
