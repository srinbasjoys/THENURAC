import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { newArrivals, bestSellers, lastChance, editorsCuration, testimonials, pressLogos } from '../mockData';
import { Button } from '../components/ui/button';

const Home = () => {
  const newArrivalsRef = useRef(null);
  const lastChanceRef = useRef(null);

  const scroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-cosset-cream">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-cosset-tan">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=2000&q=80"
            alt="Hero"
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-wide">
                soft shine, strong presence.
              </h2>
              <Link to="/shop">
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-cosset-text transition-colors mt-4"
                >
                  DISCOVER NOW
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-light tracking-wider text-cosset-dark-brown">NEW ARRIVALS</h2>
            <div className="flex gap-2">
              <button
                onClick={() => scroll(newArrivalsRef, 'left')}
                className="p-2 border border-cosset-tan hover:border-cosset-brown transition-colors text-cosset-text"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll(newArrivalsRef, 'right')}
                className="p-2 border border-cosset-tan hover:border-cosset-brown transition-colors text-cosset-text"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          <div
            ref={newArrivalsRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {newArrivals.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-72">
                <ProductCard product={product} showBadge={true} />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/new-arrivals" className="text-sm tracking-wider underline hover:text-cosset-brown transition-colors text-cosset-text">
              View All
            </Link>
          </div>
        </div>
      </section>

      {/* All Time Bestsellers Section */}
      <section className="py-16 bg-cosset-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light tracking-wider mb-3 text-cosset-dark-brown">ALL TIME BESTSELLERS</h2>
            <p className="text-sm text-cosset-text/70 italic">Designed to elevate your everyday style, anywhere.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Last Chance Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-light tracking-wider text-cosset-dark-brown">Last Chance</h2>
            <div className="flex gap-2">
              <button
                onClick={() => scroll(lastChanceRef, 'left')}
                className="p-2 border border-cosset-tan hover:border-cosset-brown transition-colors text-cosset-text"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll(lastChanceRef, 'right')}
                className="p-2 border border-cosset-tan hover:border-cosset-brown transition-colors text-cosset-text"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          <div
            ref={lastChanceRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {lastChance.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-72">
                <ProductCard product={product} showBadge={false} />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/sale" className="text-sm tracking-wider underline hover:text-cosset-brown transition-colors text-cosset-text">
              View all
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-cosset-beige">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-cosset-cream p-6 rounded-lg shadow-sm border border-cosset-tan/20">
                <p className="text-sm text-cosset-text mb-3">{testimonial.text}</p>
                <p className="text-xs text-cosset-text/60 font-medium">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In the Press Section */}
      <section className="py-12 border-y border-cosset-tan/30 overflow-hidden bg-cosset-cream">
        <h3 className="text-center text-sm tracking-wider mb-8 text-cosset-text/60">In the Press</h3>
        <div className="flex animate-scroll">
          {[...pressLogos, ...pressLogos].map((logo, index) => (
            <div key={index} className="flex-shrink-0 mx-8">
              <img src={logo} alt="Press Logo" className="h-12 opacity-60 hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </section>

      {/* Editor's Curation Section */}
      <section className="py-16 bg-cosset-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light tracking-wider text-center mb-12 text-cosset-dark-brown">EDITOR'S CURATION</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {editorsCuration.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className="group relative overflow-hidden aspect-[16/9]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity">
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-white text-xl tracking-widest font-light">{item.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-cosset-beige">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-light tracking-wider mb-6 text-cosset-dark-brown">About Us</h2>
            <p className="text-cosset-text leading-relaxed mb-4">
              We believe investing in comfort clothing <em>is the Art of Everyday.</em> At TheNura, each style has been thoughtfully designed using quality fabrics and finest craftsmanship - serving as a testament to our commitment towards mindful living.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;