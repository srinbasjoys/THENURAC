import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-light mb-6">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8">Add some beautiful pieces to your cart!</p>
        <Link to="/shop">
          <Button className="bg-[#9b8676] hover:bg-[#8a7969] text-white">
            Continue Shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-light tracking-wider mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={`${item.id}-${item.selectedColor}`}
                className="flex gap-4 bg-white border border-gray-200 p-4 rounded-lg"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-32 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-medium mb-2">{item.name}</h3>
                  {item.selectedColor && (
                    <p className="text-sm text-gray-600 mb-2">Color: {item.selectedColor}</p>
                  )}
                  <p className="text-lg font-medium mb-4">Rs {item.price.toLocaleString('en-IN')}</p>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-gray-300 rounded">
                      <button
                        onClick={() => updateQuantity(item.id, item.selectedColor, item.quantity - 1)}
                        className="p-2 hover:bg-gray-100"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="px-4 py-2 border-x border-gray-300">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.selectedColor, item.quantity + 1)}
                        className="p-2 hover:bg-gray-100"
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
          <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
            <h2 className="text-xl font-medium mb-6">Order Summary</h2>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">Rs {getCartTotal().toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium text-green-600">FREE</span>
              </div>
              <div className="border-t border-gray-300 pt-3 flex justify-between text-lg">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">Rs {getCartTotal().toLocaleString('en-IN')}</span>
              </div>
            </div>
            <Button className="w-full bg-[#9b8676] hover:bg-[#8a7969] text-white mb-3">
              Proceed to Checkout
            </Button>
            <Link to="/shop">
              <Button variant="outline" className="w-full">
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