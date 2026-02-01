import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const About = () => {
  return (
    <div className="bg-cosset-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-cosset-beige">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-light tracking-wider mb-4 text-cosset-dark-brown">About TheNura</h1>
            <p className="text-xl text-cosset-text/70 italic">The Art of Everyday</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-cosset-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-light tracking-wider text-center mb-8 text-cosset-dark-brown">Our Story</h2>
          <div className="space-y-6 text-cosset-text leading-relaxed">
            <p>
              Founded by two-sisters in New Delhi, TheNura was born from a simple belief: that everyday clothing should be both beautiful and comfortable. Our name, derived from the verb meaning "to care for, pamper & indulge," reflects our core philosophy.
            </p>
            <p>
              We create timeless classics and elevated essentials that transcend seasonal trends. Each piece is thoughtfully designed using quality fabrics and the finest craftsmanship, serving as a testament to our commitment towards mindful living.
            </p>
            <p>
              As a women-led, homegrown slow fashion brand, we take pride in being Made in India. We believe that investing in comfort clothing is the Art of Everyday - a celebration of the small moments that make life beautiful.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-cosset-beige">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light tracking-wider text-center mb-12 text-cosset-dark-brown">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-medium mb-4 text-cosset-dark-brown">Quality First</h3>
              <p className="text-cosset-text/70">
                We use only premium fabrics and ensure the finest craftsmanship in every piece we create.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium mb-4 text-cosset-dark-brown">Sustainable Fashion</h3>
              <p className="text-cosset-text/70">
                Our slow fashion approach means creating timeless pieces that last, reducing waste and environmental impact.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium mb-4 text-cosset-dark-brown">Made in India</h3>
              <p className="text-cosset-text/70">
                Proudly supporting local artisans and craftspeople, keeping traditional techniques alive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-cosset-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light tracking-wider mb-6 text-cosset-dark-brown">Explore Our Collection</h2>
          <p className="text-cosset-text/70 mb-8 max-w-2xl mx-auto">
            Discover pieces that elevate your everyday style, designed with care for you and the planet.
          </p>
          <Link to="/shop">
            <Button className="bg-cosset-brown hover:bg-cosset-dark-brown text-white px-8 py-6 text-lg">
              Shop Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;