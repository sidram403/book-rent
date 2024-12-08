import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Maximize2, Bed, Bath, Calendar, DollarSign, Clock } from 'lucide-react';
import PropertyContact from '../components/PropertyContact';

// In a real app, this would come from an API
const property = {
  id: 1,
  type: 'For Sell',
  category: 'Apartment',
  images: [
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80',
  ],
  price: '$12,345',
  title: 'Golden Urban House For Sell',
  location: '123 Street, New York, USA',
  description: 'This beautiful property features modern amenities and stunning views. Perfect for families looking for their dream home.',
  features: [
    'Central Air Conditioning',
    'Swimming Pool',
    'Garden',
    'Parking Space',
    'Security System',
    'High-Speed Internet',
  ],
  details: {
    area: '1000 Sqft',
    beds: '3 Bed',
    baths: '2 Bath',
    built: '2020',
    parking: '2 Cars',
  },
  agent: {
    name: 'John Doe',
    phone: '+1 234 567 890',
    email: 'john@example.com'
  }
};

export default function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate('/payment');
  };

  return (
    <div className="pt-16">
      {/* Image Gallery */}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="h-96">
              <img
                src={property.images[0]}
                alt={property.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {property.images.slice(1).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${property.title} ${index + 2}`}
                  className="w-full h-44 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Property Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2" />
                    {property.location}
                  </div>
                </div>
                <div className="text-2xl font-bold text-emerald-500">{property.price}</div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center">
                  <Maximize2 className="h-5 w-5 text-emerald-500 mr-2" />
                  <span>{property.details.area}</span>
                </div>
                <div className="flex items-center">
                  <Bed className="h-5 w-5 text-emerald-500 mr-2" />
                  <span>{property.details.beds}</span>
                </div>
                <div className="flex items-center">
                  <Bath className="h-5 w-5 text-emerald-500 mr-2" />
                  <span>{property.details.baths}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-emerald-500 mr-2" />
                  <span>Built {property.details.built}</span>
                </div>
              </div>

              <div className="border-t pt-6">
                <h2 className="text-xl font-bold mb-4">Description</h2>
                <p className="text-gray-600">{property.description}</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="space-y-4">
                <button
                  onClick={handleProceed}
                  className="w-full bg-emerald-500 text-white py-3 px-4 rounded-md hover:bg-emerald-600"
                >
                  {property.type === 'For Sell' ? 'Proceed to Buy' : 'Proceed to Rent'}
                </button>
                <button
                  className="w-full bg-white text-emerald-500 border-2 border-emerald-500 py-3 px-4 rounded-md hover:bg-emerald-50"
                >
                  Schedule a Visit
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <PropertyContact agent={property.agent} />
          </div>
        </div>
      </div>
    </div>
  );
}