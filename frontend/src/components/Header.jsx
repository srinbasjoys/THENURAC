import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getCartCount } = useCart();
  const navigate = useNavigate();

  const navItems = [
    { label: 'NEW ARRIVALS', path: '/shop?category=new' },
    { label: 'BEST SELLERS', path: '/shop?category=bestsellers' },
    { label: 'CELEBS', path: '/celebs' },
    { label: 'SHOP', path: '/shop' },
    { label: 'TOTE BAGS', path: '/tote-bags' },
    { label: 'SALE', path: '/shop?category=sale' },
    { label: "FOUNDERS' EDIT", path: '/founders-edit' },
    { label: 'ABOUT US', path: '/about' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-cosset-cream shadow-sm">
      {/* Announcement Bar */}
      <div className="bg-cosset-brown text-white text-center py-2 text-sm tracking-wider">
        HAPPY NEW YEAR 2026!
      </div>

      {/* Main Header */}
      <div className="border-b border-cosset-tan/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-cosset-text"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <Link to="/" className="text-center flex-1 lg:flex-initial">
              <h1 className="text-2xl tracking-[0.3em] font-light text-cosset-dark-brown">
                THENURA
              </h1>
              <p className="text-[10px] tracking-[0.2em] text-cosset-brown">CLOTHING</p>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8 flex-1 justify-center">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="text-xs tracking-wider text-cosset-text hover:text-cosset-brown transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center space-x-4 text-cosset-text">
              <button 
                onClick={() => navigate('/profile')}
                className="hover:text-cosset-brown transition-colors"
              >
                <User size={20} />
              </button>
              <button 
                onClick={() => navigate('/search')}
                className="hover:text-cosset-brown transition-colors"
              >
                <Search size={20} />
              </button>
              <button 
                onClick={() => navigate('/cart')}
                className="hover:text-cosset-brown transition-colors relative"
              >
                <ShoppingBag size={20} />
                {getCartCount() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-cosset-brown text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {getCartCount()}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-cosset-cream border-b border-cosset-tan/30">
          <nav className="container mx-auto px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="block text-sm tracking-wider text-cosset-text hover:text-cosset-brown transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;