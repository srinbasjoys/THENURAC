import React, { useState } from 'react';
import { Badge } from './ui/badge';

const ProductCard = ({ product, showBadge = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-3">
        {showBadge && product.badge && (
          <Badge className="absolute top-3 left-3 bg-[#9b8676] text-white text-xs z-10">
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
        <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 py-3 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="text-xs tracking-wider font-medium hover:text-[#9b8676] transition-colors">
            Choose options
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="text-center">
        <h3 className="text-sm mb-2 hover:text-[#9b8676] transition-colors cursor-pointer">
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-2 mb-2">
          {product.originalPrice ? (
            <>
              <span className="text-sm font-medium">Rs {product.price.toLocaleString('en-IN')}</span>
              <span className="text-sm text-gray-400 line-through">Rs {product.originalPrice.toLocaleString('en-IN')}</span>
            </>
          ) : (
            <span className="text-sm font-medium">Rs {product.price.toLocaleString('en-IN')}</span>
          )}
        </div>

        {/* Color Swatches */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex justify-center gap-1 flex-wrap">
            {product.colors.slice(0, 5).map((color, index) => (
              <div
                key={index}
                className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center cursor-pointer hover:border-[#9b8676] transition-colors"
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