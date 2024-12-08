import { MapPin, Maximize2, Bed, Bath } from 'lucide-react';

const properties = [
  {
    id: 1,
    type: 'For Sell',
    category: 'Apartment',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80',
    price: '$12,345',
    title: 'Golden Urban House For Sell',
    location: '123 Street, New York, USA',
    area: '1000 Sqft',
    beds: '3 Bed',
    baths: '2 Bath'
  },
  {
    id: 2,
    type: 'For Rent',
    category: 'Villa',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80',
    price: '$12,345',
    title: 'Golden Urban House For Sell',
    location: '123 Street, New York, USA',
    area: '1000 Sqft',
    beds: '3 Bed',
    baths: '2 Bath'
  },
  {
    id: 3,
    type: 'For Sell',
    category: 'Office',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80',
    price: '$12,345',
    title: 'Golden Urban House For Sell',
    location: '123 Street, New York, USA',
    area: '1000 Sqft',
    beds: '3 Bed',
    baths: '2 Bath'
  }
];

export default function PropertyListing() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Property Listing</h2>
          <p className="text-gray-600">
            Check out our latest collection of properties
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <button className="bg-emerald-500 text-white px-6 py-2 rounded-md">Featured</button>
            <button className="bg-white text-gray-700 px-6 py-2 rounded-md border hover:bg-gray-50">
              For Sell
            </button>
            <button className="bg-white text-gray-700 px-6 py-2 rounded-md border hover:bg-gray-50">
              For Rent
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
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
                <div className="text-emerald-500 text-xl font-bold mb-2">{property.price}</div>
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
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-1" />
                    {property.beds}
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" />
                    {property.baths}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}