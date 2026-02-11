import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-ocean-deep text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-6 w-6 text-sunset" />
              <span className="font-display text-2xl font-semibold">
                Newquay<span className="text-sunset">Stays</span>
              </span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Premium accommodations in Newquay's most beautiful locations. 
              Make your holiday unforgettable with us!  Our prices are indicative only. For an accurate quote, please send us your preferred dates and any special requests, and we will prepare a tailored offer just for you. 
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-primary-foreground/60 hover:text-sunset transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-sunset transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-sunset transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">More information </h4>
            <ul className="space-y-3">
              <li>
                <a href="#accommodations" className="text-primary-foreground/80 hover:text-sunset transition-colors text-sm">
                  For more information about our accommodations, please get in touch with us — we’ll be happy to assist you.
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-sunset transition-colors text-sm">
                  About Newquay
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-sunset transition-colors text-sm">
                  
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-sunset transition-colors text-sm">
                  
                </a> 
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Accommodations</h4>
            <ul className="space-y-3">
              <li>
                <a href="#accommodations" className="text-primary-foreground/80 hover:text-sunset transition-colors text-sm">
                  Fistral Beach View with pool
                </a>
              </li>
              <li>
                <a href="#accommodations" className="text-primary-foreground/80 hover:text-sunset transition-colors text-sm">
                  Newquay Rocklands Beach View
                </a>
              </li>
              <li>
                <a href="#accommodations" className="text-primary-foreground/80 hover:text-sunset transition-colors text-sm">
                  Retro Ocean View Pad by Fistral Beach
                </a>
              </li>
              <li>
                <a href="#accommodations" className="text-primary-foreground/80 hover:text-sunset transition-colors text-sm">
                  Sea View Studio by Fistral Beach
                </a>
              </li>
                            <li>
                <a href="#accommodations" className="text-primary-foreground/80 hover:text-sunset transition-colors text-sm">
                  Blue Tides Hideaway by Fistral
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 text-sunset flex-shrink-0" />
                <span>15 Fistral Court, Pentire Avenue, Newquay TR71PD</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4 text-sunset flex-shrink-0" />
                <span>+44 7592 987818</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4 text-sunset flex-shrink-0" />
                <span>newquay15fistral@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} NewquayStays. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
