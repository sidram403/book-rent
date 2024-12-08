import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
import type { PropertyFilters } from '../../types/property';

interface PropertyFiltersProps {
  filters: PropertyFilters;
  onFilterChange: (filters: PropertyFilters) => void;
}

const filterOptions = {
  types: ['All', 'For Sale', 'For Rent'],
  categories: ['All', 'Apartment', 'Villa', 'House', 'Office', 'Penthouse'],
  priceRanges: ['All', '$0-$100k', '$100k-$500k', '$500k-$1M', '$1M+'],
};

export default function PropertyFilters({ filters, onFilterChange }: PropertyFiltersProps) {
  return (
    <motion.div 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Search properties..."
              value={filters.searchQuery}
              onChange={(e) => onFilterChange({ ...filters, searchQuery: e.target.value })}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500"
            />
            <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
          <select
            value={filters.type}
            onChange={(e) => onFilterChange({ ...filters, type: e.target.value })}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500"
          >
            {filterOptions.types.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <select
            value={filters.category}
            onChange={(e) => onFilterChange({ ...filters, category: e.target.value })}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500"
          >
            {filterOptions.categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
          <select
            value={filters.priceRange}
            onChange={(e) => onFilterChange({ ...filters, priceRange: e.target.value })}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500"
          >
            {filterOptions.priceRanges.map((range) => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
        </div>
      </div>
    </motion.div>
  );
}