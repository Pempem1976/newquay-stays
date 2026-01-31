import { useState } from 'react';
import { format } from 'date-fns';
import { hu } from 'date-fns/locale';
import { Calendar as CalendarIcon, X, Users, Star, MapPin } from 'lucide-react';
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

  if (!accommodation) return null;

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
      toast.error('Kérjük, töltsd ki az összes mezőt!');
      return;
    }

    toast.success('Foglalás sikeresen elküldve!', {
      description: `${accommodation.name} - ${nights} éjszaka - ${accommodation.currency}${totalPrice}`,
    });
    
    onClose();
    setCheckIn(undefined);
    setCheckOut(undefined);
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Foglalás</DialogTitle>
        </DialogHeader>

        <div className="flex gap-4 p-4 bg-secondary rounded-lg mb-4">
          <img 
            src={accommodation.image} 
            alt={accommodation.name}
            className="w-24 h-24 object-cover rounded-lg"
          />
          <div className="flex-1">
            <h3 className="font-display font-semibold text-foreground">{accommodation.name}</h3>
            <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
              <MapPin className="h-3.5 w-3.5" />
              <span>{accommodation.location}</span>
            </div>
            <div className="flex items-center gap-1 text-sm mt-1">
              <Star className="h-3.5 w-3.5 fill-sunset text-sunset" />
              <span className="font-medium">{accommodation.rating}</span>
            </div>
            <p className="text-primary font-semibold mt-2">
              {accommodation.currency}{accommodation.price}/éj
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Bejelentkezés</Label>
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
                    {checkIn ? format(checkIn, "MMM d", { locale: hu }) : "Válassz"}
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
              <Label>Kijelentkezés</Label>
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
                    {checkOut ? format(checkOut, "MMM d", { locale: hu }) : "Válassz"}
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
            <Label>Vendégek száma</Label>
            <Select value={guests} onValueChange={setGuests}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: accommodation.maxGuests }, (_, i) => (
                  <SelectItem key={i + 1} value={String(i + 1)}>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      {i + 1} vendég
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="name">Teljes név</Label>
            <Input 
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Kovács János"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email cím</Label>
            <Input 
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="pelda@email.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefonszám</Label>
            <Input 
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+36 30 123 4567"
              required
            />
          </div>

          {nights > 0 && (
            <div className="p-4 bg-muted rounded-lg space-y-2">
              <div className="flex justify-between text-sm">
                <span>{accommodation.currency}{accommodation.price} × {nights} éjszaka</span>
                <span>{accommodation.currency}{totalPrice}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg border-t border-border pt-2">
                <span>Összesen</span>
                <span className="text-primary">{accommodation.currency}{totalPrice}</span>
              </div>
            </div>
          )}

          <Button 
            type="submit" 
            className="w-full bg-gradient-sunset text-accent-foreground font-semibold py-6 text-lg"
          >
            Foglalás megerősítése
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
