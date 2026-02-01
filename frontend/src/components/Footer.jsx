import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Footer = () => {
  return (
    <footer className="bg-cosset-beige border-t border-cosset-tan/30 mt-20">
      {/* Features Section */}
      <div className="border-b border-cosset-tan/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-sm font-medium mb-2 text-cosset-dark-brown">India Proud</h3>
              <p className="text-xs text-cosset-text/70">Women led brand, homegrown slow fashion brand.</p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2 text-cosset-dark-brown">CUSTOMER SUPPORT</h3>
              <p className="text-xs text-cosset-text/70">Available from Monday to Saturday, 10 am to 7 pm.</p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2 text-cosset-dark-brown">FREE SHIPPING</h3>
              <p className="text-xs text-cosset-text/70">Free shipping & more perks on all Prepaid Orders.</p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2 text-cosset-dark-brown">Secure payments</h3>
              <p className="text-xs text-cosset-text/70">Safer, faster, and more secure online payment.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* About the Brand */}
            <div>
              <h3 className="text-sm font-semibold tracking-wider mb-4 text-cosset-dark-brown">ABOUT THE BRAND</h3>
              <h4 className="text-lg font-medium mb-2 text-cosset-text">THENURA</h4>
              <p className="text-xs text-cosset-text/70 mb-2">/θəˈnʊrə/</p>
              <p className="text-xs text-cosset-text/70 leading-relaxed">
                verb: to care for, pamper & indulge.
              </p>
              <p className="text-xs text-cosset-text/70 leading-relaxed mt-3">
                Founded by two-sisters in New Delhi, the brand offers timeless classics & elevated essentials that transcend seasonal trends.
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-cosset-text/70 hover:text-cosset-brown transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-cosset-text/70 hover:text-cosset-brown transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold tracking-wider mb-4 text-cosset-dark-brown">QUICK LINKS</h3>
              <ul className="space-y-2 text-xs text-cosset-text/70">
                <li><a href="#" className="hover:text-cosset-brown transition-colors">Shop All</a></li>
                <li><a href="#" className="hover:text-cosset-brown transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-cosset-brown transition-colors">Shipping Policy</a></li>
                <li><a href="#" className="hover:text-cosset-brown transition-colors">Refund policy</a></li>
                <li><a href="#" className="hover:text-cosset-brown transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-cosset-brown transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-cosset-brown transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-sm font-semibold tracking-wider mb-4 text-cosset-dark-brown">NEWSLETTER</h3>
              <p className="text-xs text-cosset-text/70 mb-4">
                Subscribe to receive updates, access to exclusive offers, and more.
              </p>
              <div className="flex flex-col space-y-2">
                <Input
                  type="email"
                  placeholder="E-mail"
                  className="text-xs border-cosset-tan/50"
                />
                <Button className="bg-cosset-brown hover:bg-cosset-dark-brown text-white tracking-wider">
                  SUBSCRIBE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-cosset-tan/30 py-6">
        <div className="container mx-auto px-4">
          <p className="text-xs text-cosset-text/60 text-center">
            © 2026 - THENURA CLOTHING
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;