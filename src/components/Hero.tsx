import { Search } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative pt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Find A <span className="text-emerald-500">Perfect Home</span> To Live In
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button className="bg-emerald-500 text-white px-8 py-3 rounded-md hover:bg-emerald-600">
              Post Your Property
            </button>
            <button className="bg-white text-emerald-500 px-8 py-3 rounded-md hover:bg-gray-100">
              Looking for Property
            </button>
          </div>

          <div className="mt-12 bg-white p-4 rounded-lg shadow-lg max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Location"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <input
                type="text"
                placeholder="Property Type"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <div className="flex">
                <input
                  type="text"
                  placeholder="Price Range"
                  className="w-full px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button className="bg-emerald-500 text-white px-6 rounded-r-md hover:bg-emerald-600">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}