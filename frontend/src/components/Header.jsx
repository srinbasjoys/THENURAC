import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Search, ShoppingBag, Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'NEW ARRIVALS', path: '/new-arrivals' },
    { label: 'BEST SELLERS', path: '/best-sellers' },
    { label: 'CELEBS', path: '/celebs' },
    { label: 'SHOP', path: '/shop' },
    { label: 'TOTE BAGS', path: '/tote-bags' },
    { label: 'SALE', path: '/sale' },
    { label: "FOUNDERS' EDIT", path: '/founders-edit' },
    { label: 'ABOUT US', path: '/about' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Announcement Bar */}
      <div className="bg-[#9b8676] text-white text-center py-2 text-sm tracking-wider">
        HAPPY NEW YEAR 2026!
      </div>

      {/* Main Header */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <Link to="/" className="text-center flex-1 lg:flex-initial">
              <h1 className="text-2xl tracking-[0.3em] font-light text-[#7a6a5b]">
                THENURA
              </h1>
              <p className="text-[10px] tracking-[0.2em] text-[#9b8676]">CLOTHING</p>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8 flex-1 justify-center">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="text-xs tracking-wider text-gray-700 hover:text-[#9b8676] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <button className="hover:text-[#9b8676] transition-colors">
                <User size={20} />
              </button>
              <button className="hover:text-[#9b8676] transition-colors">
                <Search size={20} />
              </button>
              <button className="hover:text-[#9b8676] transition-colors relative">
                <ShoppingBag size={20} />
                <span className="absolute -top-2 -right-2 bg-[#9b8676] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200">
          <nav className="container mx-auto px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="block text-sm tracking-wider text-gray-700 hover:text-[#9b8676] transition-colors"
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