import { useState } from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Users, Star, MapPin, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Accommodation } from '@/data/accommodations';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface BookingModalProps {
  accommodation: Accommodation | null;
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal = ({ accommodation, isOpen, onClose }: BookingModalProps) => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState<string>('2');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!accommodation) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === accommodation.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? accommodation.images.length - 1 : prev - 1
    );
  };

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const diff = checkOut.getTime() - checkIn.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  };

  const nights = calculateNights();
  const totalPrice = nights * accommodation.price;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!checkIn || !checkOut || !name || !email || !phone) {
      toast.error('Please fill in all fields!');
      return;
    }

    toast.success('Booking successfully submitted!', {
      description: `${accommodation.name} - ${nights} nights - ${accommodation.currency}${totalPrice}`,
    });
    
    onClose();
    setCheckIn(undefined);
    setCheckOut(undefined);
    setName('');
    setEmail('');
    setPhone('');
    setCurrentImageIndex(0);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Book Your Stay</DialogTitle>
        </DialogHeader>

        {/* Image Gallery */}
        <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
          <img 
            src={accommodation.images[currentImageIndex]} 
            alt={`${accommodation.name} - Image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />
          
          {accommodation.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm p-2 rounded-full hover:bg-card transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm p-2 rounded-full hover:bg-card transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {accommodation.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
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
        </div>

        {/* Thumbnail Gallery */}
        <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
          {accommodation.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                index === currentImageIndex 
                  ? 'border-primary' 
                  : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <img 
                src={image} 
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Property Info */}
        <div className="p-4 bg-secondary rounded-lg mb-4">
          <h3 className="font-display font-semibold text-lg text-foreground mb-2">
            {accommodation.name}
          </h3>
          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
            <MapPin className="h-3.5 w-3.5" />
            <span>{accommodation.address}</span>
          </div>
          <div className="flex items-center gap-4 text-sm mb-3">
            <div className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-sunset text-sunset" />
              <span className="font-medium">{accommodation.rating}/10</span>
              <span className="text-muted-foreground">({accommodation.reviewCount} reviews)</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Maximize2 className="h-3.5 w-3.5" />
              <span>{accommodation.size}</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-3">{accommodation.description}</p>
          <div className="flex flex-wrap gap-2">
            {accommodation.amenities.map((amenity) => (
              <Badge 
                key={amenity} 
                variant="secondary" 
                className="bg-background text-foreground text-xs"
              >
                {amenity}
              </Badge>
            ))}
          </div>
          <p className="text-primary font-semibold text-lg mt-3">
            {accommodation.currency}{accommodation.price}/night
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Check-in</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !checkIn && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkIn ? format(checkIn, "MMM d") : "Select"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={checkIn}
                    onSelect={setCheckIn}
                    disabled={(date) => date < new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label>Check-out</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !checkOut && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkOut ? format(checkOut, "MMM d") : "Select"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={checkOut}
                    onSelect={setCheckOut}
                    disabled={(date) => date < (checkIn || new Date())}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Number of Guests</Label>
            <Select value={guests} onValueChange={setGuests}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: accommodation.maxGuests }, (_, i) => (
                  <SelectItem key={i + 1} value={String(i + 1)}>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      {i + 1} {i === 0 ? 'guest' : 'guests'}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input 
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Smith"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input 
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input 
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+44 7700 123456"
              required
            />
          </div>

          {nights > 0 && (
            <div className="p-4 bg-muted rounded-lg space-y-2">
              <div className="flex justify-between text-sm">
                <span>{accommodation.currency}{accommodation.price} × {nights} {nights === 1 ? 'night' : 'nights'}</span>
                <span>{accommodation.currency}{totalPrice}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg border-t border-border pt-2">
                <span>Total</span>
                <span className="text-primary">{accommodation.currency}{totalPrice}</span>
              </div>
            </div>
          )}

          <Button 
            type="submit" 
            className="w-full bg-gradient-sunset text-accent-foreground font-semibold py-6 text-lg"
          >
            Confirm Booking
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
