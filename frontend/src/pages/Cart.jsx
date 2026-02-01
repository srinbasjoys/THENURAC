import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center bg-cosset-cream min-h-screen">
        <h1 className="text-3xl font-light mb-6 text-cosset-dark-brown">Your Cart is Empty</h1>
        <p className="text-cosset-text/70 mb-8">Add some beautiful pieces to your cart!</p>
        <Link to="/shop">
          <Button className="bg-cosset-brown hover:bg-cosset-dark-brown text-white">
            Continue Shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 bg-cosset-cream min-h-screen">
      <h1 className="text-3xl font-light tracking-wider mb-8 text-cosset-dark-brown">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={`${item.id}-${item.selectedColor}`}
                className="flex gap-4 bg-white border border-cosset-tan/30 p-4 rounded-lg"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-32 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-medium mb-2 text-cosset-text">{item.name}</h3>
                  {item.selectedColor && (
                    <p className="text-sm text-cosset-text/70 mb-2">Color: {item.selectedColor}</p>
                  )}
                  <p className="text-lg font-medium mb-4 text-cosset-dark-brown">Rs {item.price.toLocaleString('en-IN')}</p>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-cosset-tan rounded">
                      <button
                        onClick={() => updateQuantity(item.id, item.selectedColor, item.quantity - 1)}
                        className="p-2 hover:bg-cosset-beige transition-colors text-cosset-text"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="px-4 py-2 border-x border-cosset-tan text-cosset-text">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.selectedColor, item.quantity + 1)}
                        className="p-2 hover:bg-cosset-beige transition-colors text-cosset-text"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id, item.selectedColor)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-cosset-beige p-6 rounded-lg sticky top-24 border border-cosset-tan/30">
            <h2 className="text-xl font-medium mb-6 text-cosset-dark-brown">Order Summary</h2>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-cosset-text/70">Subtotal</span>
                <span className="font-medium text-cosset-text">Rs {getCartTotal().toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-cosset-text/70">Shipping</span>
                <span className="font-medium text-green-600">FREE</span>
              </div>
              <div className="border-t border-cosset-tan pt-3 flex justify-between text-lg">
                <span className="font-semibold text-cosset-dark-brown">Total</span>
                <span className="font-semibold text-cosset-dark-brown">Rs {getCartTotal().toLocaleString('en-IN')}</span>
              </div>
            </div>
            <Button className="w-full bg-cosset-brown hover:bg-cosset-dark-brown text-white mb-3">
              Proceed to Checkout
            </Button>
            <Link to="/shop">
              <Button variant="outline" className="w-full border-cosset-brown text-cosset-brown hover:bg-cosset-beige">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;