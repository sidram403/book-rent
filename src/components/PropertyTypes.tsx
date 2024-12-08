import { Building, Home, Building2, Store, Warehouse, Hotel } from 'lucide-react';

const propertyTypes = [
  { icon: Building2, name: 'Apartment', count: '123 Properties' },
  { icon: Home, name: 'Villa', count: '123 Properties' },
  { icon: Building, name: 'Home', count: '123 Properties' },
  { icon: Store, name: 'Office', count: '123 Properties' },
  { icon: Building2, name: 'Building', count: '123 Properties' },
  { icon: Home, name: 'Townhouse', count: '123 Properties' },
  { icon: Store, name: 'Shop', count: '123 Properties' },
  { icon: Warehouse, name: 'Garage', count: '123 Properties' },
];

export default function PropertyTypes() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Property Types</h2>
          <p className="text-gray-600">
            Explore Your Dream Property from Our Various Types of Property
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {propertyTypes.map((type, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow 
                ${type.name === 'Home' ? 'ring-2 ring-emerald-500' : ''}`}
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <type.icon className="h-8 w-8 text-emerald-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{type.name}</h3>
                <p className="text-emerald-500">{type.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}