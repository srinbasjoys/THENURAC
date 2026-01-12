import React, { useState } from 'react';
import { User, Package, Heart, Settings, LogOut } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [userInfo, setUserInfo] = useState({
    name: 'Guest User',
    email: 'guest@thenura.in',
    phone: '+91 9876543210',
  });

  const orders = [
    {
      id: 'ORD001',
      date: '2026-01-05',
      total: 12340,
      status: 'Delivered',
      items: 2,
    },
    {
      id: 'ORD002',
      date: '2025-12-28',
      total: 8890,
      status: 'In Transit',
      items: 1,
    },
  ];

  const wishlist = [
    {
      id: 1,
      name: 'Premium Linen Co-ord Set',
      price: 8880,
      image: 'https://images.unsplash.com/photo-1610652492500-ded49ceaa911?w=400&q=80',
    },
    {
      id: 2,
      name: 'Satin Halterneck Top',
      price: 5690,
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-light tracking-wider mb-8">My Account</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab('profile')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'profile'
                  ? 'bg-[#9b8676] text-white'
                  : 'hover:bg-gray-100'
              }`}
            >
              <User size={20} />
              <span>Profile</span>
            </button>
            <button
              onClick={() => setActiveTab('orders')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'orders'
                  ? 'bg-[#9b8676] text-white'
                  : 'hover:bg-gray-100'
              }`}
            >
              <Package size={20} />
              <span>Orders</span>
            </button>
            <button
              onClick={() => setActiveTab('wishlist')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'wishlist'
                  ? 'bg-[#9b8676] text-white'
                  : 'hover:bg-gray-100'
              }`}
            >
              <Heart size={20} />
              <span>Wishlist</span>
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'settings'
                  ? 'bg-[#9b8676] text-white'
                  : 'hover:bg-gray-100'
              }`}
            >
              <Settings size={20} />
              <span>Settings</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-50 text-red-600">
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </nav>
        </div>

        {/* Content */}
        <div className="md:col-span-3">
          {activeTab === 'profile' && (
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-2xl font-light mb-6">Profile Information</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={userInfo.name}
                    onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={userInfo.email}
                    onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={userInfo.phone}
                    onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
                  />
                </div>
                <Button className="bg-[#9b8676] hover:bg-[#8a7969] text-white">
                  Save Changes
                </Button>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="space-y-4">
              <h2 className="text-2xl font-light mb-6">Order History</h2>
              {orders.map((order) => (
                <div key={order.id} className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="font-medium">Order #{order.id}</p>
                      <p className="text-sm text-gray-600">{order.date}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        order.status === 'Delivered'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600">{order.items} items</p>
                    <p className="font-medium text-lg">Rs {order.total.toLocaleString('en-IN')}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'wishlist' && (
            <div>
              <h2 className="text-2xl font-light mb-6">My Wishlist</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {wishlist.map((item) => (
                  <div key={item.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
                    <div className="p-4">
                      <h3 className="font-medium mb-2">{item.name}</h3>
                      <p className="text-lg font-medium mb-3">Rs {item.price.toLocaleString('en-IN')}</p>
                      <Button className="w-full bg-[#9b8676] hover:bg-[#8a7969] text-white">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-2xl font-light mb-6">Account Settings</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Change Password</h3>
                  <div className="space-y-3">
                    <Input type="password" placeholder="Current Password" />
                    <Input type="password" placeholder="New Password" />
                    <Input type="password" placeholder="Confirm New Password" />
                    <Button className="bg-[#9b8676] hover:bg-[#8a7969] text-white">
                      Update Password
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;