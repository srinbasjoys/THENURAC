import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from './ui/badge';

const ProductCard = ({ product, showBadge = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/product/${product.id}`}>
      <div
        className="group relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Product Image */}
        <div className="relative aspect-[3/4] overflow-hidden bg-cosset-beige/30 mb-3">
          {showBadge && product.badge && (
            <Badge className="absolute top-3 left-3 bg-cosset-brown text-white text-xs z-10">
              {product.badge}
            </Badge>
          )}
          {product.discount && (
            <Badge className="absolute top-3 left-3 bg-red-600 text-white text-xs z-10">
              LAST CHANCE! Save {product.discount}
            </Badge>
          )}
          <img
            src={isHovered && product.hoverImage ? product.hoverImage : product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Choose Options Button - Shows on Hover */}
          <div className="absolute bottom-0 left-0 right-0 bg-cosset-cream bg-opacity-95 py-3 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button className="text-xs tracking-wider font-medium hover:text-cosset-brown transition-colors text-cosset-text">
              View Details
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="text-center">
          <h3 className="text-sm mb-2 hover:text-cosset-brown transition-colors cursor-pointer text-cosset-text">
            {product.name}
          </h3>
          <div className="flex items-center justify-center gap-2 mb-2">
            {product.originalPrice ? (
              <>
                <span className="text-sm font-medium text-cosset-dark-brown">Rs {product.price.toLocaleString('en-IN')}</span>
                <span className="text-sm text-cosset-text/40 line-through">Rs {product.originalPrice.toLocaleString('en-IN')}</span>
              </>
            ) : (
              <span className="text-sm font-medium text-cosset-dark-brown">Rs {product.price.toLocaleString('en-IN')}</span>
            )}
          </div>

          {/* Color Swatches */}
          {product.colors && product.colors.length > 0 && (
            <div className="flex justify-center gap-1 flex-wrap">
              {product.colors.slice(0, 5).map((color, index) => (
                <div
                  key={index}
                  className="w-5 h-5 rounded-full border border-cosset-tan flex items-center justify-center cursor-pointer hover:border-cosset-brown transition-colors"
                  title={color}
                >
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{
                      backgroundColor: getColorCode(color)
                    }}
                  ></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

// Helper function to map color names to hex codes
const getColorCode = (colorName) => {
  const colorMap = {
    'Plum': '#8b4789',
    'Maroon': '#800020',
    'Navy': '#000080',
    'Charcoal': '#36454F',
    'Dark Green': '#013220',
    'Mystic Blue': '#5C7E9F',
    'Rani Pink': '#E63E62',
    'Silver Taupe': '#C9C0BB',
    'Vanilla': '#F3E5AB',
    'Rose Pink': '#FF66CC',
    'Denim Blue': '#1560BD',
    'Rose': '#FF007F',
    'Caramel': '#C68E17',
    'Blueberry': '#4F86F7',
    'Candy': '#FFB6C1',
    'Matcha': '#BFFF00',
    'Mocha': '#967969',
    'Forest Green': '#228B22',
    'Powder Blue': '#B0E0E6',
    'Sage Green': '#9DC183',
    'Stone Grey': '#928E85',
    'Warm Blue': '#5F9EA0',
    'Hot Pink': '#FF69B4'
  };
  return colorMap[colorName] || '#CCCCCC';
};

export default ProductCard;