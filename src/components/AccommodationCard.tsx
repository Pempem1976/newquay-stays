import { useState } from 'react';
import { Star, MapPin, Users, Bed, Bath, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accommodation } from '@/data/accommodations';

interface AccommodationCardProps {
  accommodation: Accommodation;
}

const AccommodationCard = ({ accommodation }: AccommodationCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === accommodation.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === 0 ? accommodation.images.length - 1 : prev - 1
    );
  };

  return (
    <Card className="group overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border-0 bg-card">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img 
          src={accommodation.images[currentImageIndex]} 
          alt={`${accommodation.name} - Image ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Image Navigation */}
        {accommodation.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-card"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-card"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            
            {/* Image Indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {accommodation.images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex 
                      ? 'bg-white w-4' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </>
        )}

        <div className="absolute top-4 left-4">
          <Badge className="bg-card/90 backdrop-blur-sm text-foreground font-medium">
            <Star className="h-3.5 w-3.5 fill-sunset text-sunset mr-1" />
            {accommodation.rating}/10
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Badge className="bg-primary text-primary-foreground font-semibold">
            {accommodation.currency}{accommodation.price}/night
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

        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
          <Maximize2 className="h-3.5 w-3.5" />
          <span>{accommodation.size}</span>
          <span className="text-border">•</span>
          <span>{accommodation.reviewCount} reviews</span>
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
        
        <div className="flex flex-wrap gap-2">
          {accommodation.amenities.slice(0, 4).map((amenity) => (
            <Badge 
              key={amenity} 
              variant="secondary" 
              className="bg-secondary text-secondary-foreground text-xs font-normal"
            >
              {amenity}
            </Badge>
          ))}
          {accommodation.amenities.length > 4 && (
            <Badge 
              variant="secondary" 
              className="bg-secondary text-secondary-foreground text-xs font-normal"
            >
              +{accommodation.amenities.length - 4} more
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AccommodationCard;
