import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { newArrivals, bestSellers, lastChance } from '../mockData';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('featured');
  const allProducts = [...newArrivals, ...bestSellers, ...lastChance];
  
  // Get category from URL query parameter
  const categoryParam = searchParams.get('category') || 'all';

  const getFilteredProducts = () => {
    let products = [...allProducts];

    // Filter by category from URL
    if (categoryParam === 'new') {
      products = newArrivals;
    } else if (categoryParam === 'bestsellers') {
      products = bestSellers;
    } else if (categoryParam === 'sale') {
      products = lastChance;
    }

    // Sort products
    if (sortBy === 'price-low') {
      products.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      products.sort((a, b) => b.price - a.price);
    }

    return products;
  };

  const filteredProducts = getFilteredProducts();
  
  // Get page title based on category
  const getPageTitle = () => {
    switch(categoryParam) {
      case 'new':
        return 'New Arrivals';
      case 'bestsellers':
        return 'Best Sellers';
      case 'sale':
        return 'Sale';
      default:
        return 'Shop All';
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-light tracking-wider mb-8">{getPageTitle()}</h1>

      {/* Sort Options */}
      <div className="flex justify-between items-center mb-8">
        <p className="text-gray-600">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
        </p>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b8676]"
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