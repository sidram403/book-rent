import { Link } from 'react-router-dom';
import { MapPin, Maximize2, Bed, Bath } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Property } from '../../types/property';
import { formatPrice } from '../../utils/propertyFilters';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <motion.div
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
              {formatPrice(property.price, property.type === 'For Rent')}
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
  );
}