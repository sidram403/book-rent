import type { Property } from '../types/property';

export const getPriceRange = (price: number): string => {
  if (price < 100000) return '$0-$100k';
  if (price < 500000) return '$100k-$500k';
  if (price < 1000000) return '$500k-$1M';
  return '$1M+';
};

export const formatPrice = (price: number, isRent: boolean = false): string => {
  const formatted = price >= 10000 
    ? `$${(price / 1000).toFixed(0)}k`
    : `$${price.toLocaleString()}`;
  return isRent ? `${formatted}/month` : formatted;
};

export const filterProperties = (
  properties: Property[],
  filters: {
    type: string;
    category: string;
    priceRange: string;
    searchQuery: string;
  }
): Property[] => {
  return properties.filter(property => {
    if (filters.type !== 'All' && property.type !== filters.type) return false;
    if (filters.category !== 'All' && property.category !== filters.category) return false;
    if (filters.priceRange !== 'All' && getPriceRange(property.price) !== filters.priceRange) return false;
    
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      return property.title.toLowerCase().includes(query) ||
             property.location.toLowerCase().includes(query);
    }
    
    return true;
  });
};