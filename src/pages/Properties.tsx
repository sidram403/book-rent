import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Maximize2, Bed, Bath, Search, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Extended property data
const allProperties = [
  {
    id: 1,
    type: 'For Sale',
    category: 'Apartment',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80',
    price: 345000,
    title: 'Modern Urban Apartment',
    location: 'Manhattan, New York',
    area: '1200 Sqft',
    beds: '3 Bed',
    baths: '2 Bath'
  },
  {
    id: 2,
    type: 'For Rent',
    category: 'Villa',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80',
    price: 5000,
    title: 'Luxury Beachfront Villa',
    location: 'Miami Beach, Florida',
    area: '3500 Sqft',
    beds: '5 Bed',
    baths: '4 Bath'
  },
  {
    id: 3,
    type: 'For Sale',
    category: 'House',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80',
    price: 875000,
    title: 'Spacious Family Home',
    location: 'Beverly Hills, California',
    area: '4200 Sqft',
    beds: '6 Bed',
    baths: '5 Bath'
  },
  {
    id: 4,
    type: 'For Rent',
    category: 'Office',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
    price: 8500,
    title: 'Premium Office Space',
    location: 'Downtown Chicago',
    area: '2800 Sqft',
    beds: null,
    baths: '3 Bath'
  },
  {
    id: 5,
    type: 'For Sale',
    category: 'Penthouse',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80',
    price: 1250000,
    title: 'Luxury Penthouse Suite',
    location: 'Las Vegas Strip',
    area: '5000 Sqft',
    beds: '4 Bed',
    baths: '4.5 Bath'
  },
  {
    id: 6,
    type: 'For Rent',
    category: 'Apartment',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80',
    price: 2800,
    title: 'Cozy Downtown Loft',
    location: 'Seattle, Washington',
    area: '950 Sqft',
    beds: '2 Bed',
    baths: '1 Bath'
  }
];

const filters = {
  types: ['All', 'For Sale', 'For Rent'],
  categories: ['All', 'Apartment', 'Villa', 'House', 'Office', 'Penthouse'],
  priceRanges: ['All', '$0-$100k', '$100k-$500k', '$500k-$1M', '$1M+'],
};

export default function Properties() {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProperties, setFilteredProperties] = useState(allProperties);

  const getPriceRange = (price: number) => {
    if (price < 100000) return '$0-$100k';
    if (price < 500000) return '$100k-$500k';
    if (price < 1000000) return '$500k-$1M';
    return '$1M+';
  };

  useEffect(() => {
    let filtered = allProperties;

    // Filter by type
    if (selectedType !== 'All') {
      filtered = filtered.filter(property => property.type === selectedType);
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(property => property.category === selectedCategory);
    }

    // Filter by price range
    if (selectedPrice !== 'All') {
      filtered = filtered.filter(property => getPriceRange(property.price) === selectedPrice);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(property => 
        property.title.toLowerCase().includes(query) ||
        property.location.toLowerCase().includes(query)
      );
    }

    setFilteredProperties(filtered);
  }, [selectedType, selectedCategory, selectedPrice, searchQuery]);

  const formatPrice = (price: number) => {
    return price >= 10000 
      ? `$${(price / 1000).toFixed(0)}k`
      : `$${price.toLocaleString()}`;
  };

  return (
    <div className="pt-16">
      {/* Search and Filter Section */}
      <div className="bg-emerald-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500"
                  />
                  <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500"
                >
                  {filters.types.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500"
                >
                  {filters.categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
                <select
                  value={selectedPrice}
                  onChange={(e) => setSelectedPrice(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500"
                >
                  {filters.priceRanges.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Property Listings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatePresence>
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProperties.map((property) => (
              <motion.div
                key={property.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={`/property/${property.id}`}>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-64 object-cover"
                      />
                      <span className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded">
                        {property.type}
                      </span>
                      <span className="absolute top-4 right-4 bg-white text-emerald-500 px-3 py-1 rounded">
                        {property.category}
                      </span>
                    </div>

                    <div className="p-6">
                      <div className="text-emerald-500 text-xl font-bold mb-2">
                        {formatPrice(property.price)}
                        {property.type === 'For Rent' && '/month'}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                      <div className="flex items-center text-gray-600 mb-4">
                        <MapPin className="h-4 w-4 mr-2" />
                        {property.location}
                      </div>

                      <div className="flex justify-between text-sm text-gray-600 border-t pt-4">
                        <div className="flex items-center">
                          <Maximize2 className="h-4 w-4 mr-1" />
                          {property.area}
                        </div>
                        {property.beds && (
                          <div className="flex items-center">
                            <Bed className="h-4 w-4 mr-1" />
                            {property.beds}
                          </div>
                        )}
                        <div className="flex items-center">
                          <Bath className="h-4 w-4 mr-1" />
                          {property.baths}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}