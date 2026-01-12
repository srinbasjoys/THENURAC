import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-[#f5f1ed]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-light tracking-wider mb-4">About TheNura</h1>
            <p className="text-xl text-gray-600 italic">The Art of Everyday</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-light tracking-wider text-center mb-8">Our Story</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light tracking-wider text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-medium mb-4">Quality First</h3>
              <p className="text-gray-600">
                We use only premium fabrics and ensure the finest craftsmanship in every piece we create.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium mb-4">Sustainable Fashion</h3>
              <p className="text-gray-600">
                Our slow fashion approach means creating timeless pieces that last, reducing waste and environmental impact.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium mb-4">Made in India</h3>
              <p className="text-gray-600">
                Proudly supporting local artisans and craftspeople, keeping traditional techniques alive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light tracking-wider mb-6">Explore Our Collection</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover pieces that elevate your everyday style, designed with care for you and the planet.
          </p>
          <Link to="/shop">
            <Button className="bg-[#9b8676] hover:bg-[#8a7969] text-white px-8 py-6 text-lg">
              Shop Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;