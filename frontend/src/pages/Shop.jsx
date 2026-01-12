import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { newArrivals, bestSellers, lastChance } from '../mockData';
import { Button } from '../components/ui/button';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const allProducts = [...newArrivals, ...bestSellers, ...lastChance];

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'new', label: 'New Arrivals' },
    { id: 'bestsellers', label: 'Best Sellers' },
    { id: 'sale', label: 'Sale' },
  ];

  const getFilteredProducts = () => {
    let products = [...allProducts];

    if (selectedCategory === 'new') {
      products = newArrivals;
    } else if (selectedCategory === 'bestsellers') {
      products = bestSellers;
    } else if (selectedCategory === 'sale') {
      products = lastChance;
    }

    if (sortBy === 'price-low') {
      products.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      products.sort((a, b) => b.price - a.price);
    }

    return products;
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-light tracking-wider mb-8">Shop All</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8 justify-between items-center">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={selectedCategory === cat.id ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(cat.id)}
              className={selectedCategory === cat.id ? 'bg-[#9b8676] hover:bg-[#8a7969]' : ''}
            >
              {cat.label}
            </Button>
          ))}
        </div>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} showBadge={true} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-600 text-lg">No products found.</p>
        </div>
      )}
    </div>
  );
};

export default Shop;