import React, { useState, useEffect } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { Input } from '../components/ui/input';
import ProductCard from '../components/ProductCard';
import { newArrivals, bestSellers, lastChance } from '../mockData';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const allProducts = [...newArrivals, ...bestSellers, ...lastChance];

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    const filtered = allProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filtered);
  }, [searchQuery]);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl font-light tracking-wider text-center mb-8">Search Products</h1>
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <Input
            type="text"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 py-6 text-lg"
          />
        </div>
      </div>

      {searchQuery && (
        <div className="mb-6">
          <p className="text-gray-600">
            {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found for "{searchQuery}"
          </p>
        </div>
      )}

      {searchResults.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {searchResults.map((product) => (
            <ProductCard key={product.id} product={product} showBadge={true} />
          ))}
        </div>
      ) : searchQuery ? (
        <div className="text-center py-20">
          <p className="text-gray-600 text-lg">No products found matching your search.</p>
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-600 text-lg">Start typing to search for products.</p>
        </div>
      )}
    </div>
  );
};

export default Search;