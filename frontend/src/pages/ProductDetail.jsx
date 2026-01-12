import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';
import { newArrivals, bestSellers, lastChance } from '../mockData';
import { toast } from '../hooks/use-toast';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const allProducts = [...newArrivals, ...bestSellers, ...lastChance];
  const product = allProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-light mb-6">Product Not Found</h1>
        <Button onClick={() => navigate('/shop')} className="bg-[#9b8676] hover:bg-[#8a7969] text-white">
          Back to Shop
        </Button>
      </div>
    );
  }

  const images = [product.image, product.hoverImage].filter(Boolean);

  const handleAddToCart = () => {
    if (product.colors && product.colors.length > 0 && !selectedColor) {
      toast({
        title: "Please select a color",
        variant: "destructive"
      });
      return;
    }

    addToCart(product, selectedColor, quantity);
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Images */}
        <div>
          <div className="aspect-[3/4] mb-4 overflow-hidden bg-gray-100">
            <img
              src={images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          {images.length > 1 && (
            <div className="flex gap-4">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-24 h-32 overflow-hidden border-2 ${
                    selectedImage === index ? 'border-[#9b8676]' : 'border-gray-200'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          {product.badge && (
            <span className="inline-block bg-[#9b8676] text-white text-xs px-3 py-1 mb-4">
              {product.badge}
            </span>
          )}
          <h1 className="text-3xl font-light mb-4">{product.name}</h1>
          <div className="flex items-center gap-3 mb-6">
            {product.originalPrice ? (
              <>
                <span className="text-2xl font-medium">Rs {product.price.toLocaleString('en-IN')}</span>
                <span className="text-xl text-gray-400 line-through">
                  Rs {product.originalPrice.toLocaleString('en-IN')}
                </span>
                {product.discount && (
                  <span className="bg-red-100 text-red-600 text-sm px-2 py-1 rounded">
                    Save {product.discount}
                  </span>
                )}
              </>
            ) : (
              <span className="text-2xl font-medium">Rs {product.price.toLocaleString('en-IN')}</span>
            )}
          </div>

          {/* Color Selection */}
          {product.colors && product.colors.length > 0 && (
            <div className="mb-6">
              <h3 className="font-medium mb-3">Select Color:</h3>
              <div className="flex gap-3 flex-wrap">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border-2 rounded transition-colors ${
                      selectedColor === color
                        ? 'border-[#9b8676] bg-[#9b8676] text-white'
                        : 'border-gray-300 hover:border-[#9b8676]'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Quantity:</h3>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
              >
                -
              </button>
              <span className="text-lg font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <Button
            onClick={handleAddToCart}
            className="w-full bg-[#9b8676] hover:bg-[#8a7969] text-white py-6 text-lg mb-4"
          >
            Add to Cart
          </Button>

          {/* Product Details */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="font-medium mb-4">Product Details</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Premium quality fabric</li>
              <li>• Comfortable fit for everyday wear</li>
              <li>• Made in India</li>
              <li>• Easy to care - Machine washable</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;