import React from 'react';

const Celebs = () => {
  const celebs = [
    {
      name: 'Priyanka Sharma',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      product: 'Premium Linen Co-ord Set',
    },
    {
      name: 'Ananya Kapoor',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
      product: 'Satin Halterneck Top',
    },
    {
      name: 'Meera Reddy',
      image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&q=80',
      product: 'Aperol Poplin Dress',
    },
    {
      name: 'Kavya Menon',
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80',
      product: 'Embellished Poplin Top',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 bg-cosset-cream min-h-screen">
      <h1 className="text-3xl font-light tracking-wider text-center mb-4 text-cosset-dark-brown">Celebrity Style</h1>
      <p className="text-center text-cosset-text/70 mb-12 max-w-2xl mx-auto">
        See how celebrities and influencers style their favorite TheNura pieces
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {celebs.map((celeb, index) => (
          <div key={index} className="group">
            <div className="aspect-[3/4] overflow-hidden mb-4 rounded-lg">
              <img
                src={celeb.image}
                alt={celeb.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="font-medium text-center mb-2 text-cosset-text">{celeb.name}</h3>
            <p className="text-sm text-cosset-text/70 text-center">wearing {celeb.product}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Celebs;