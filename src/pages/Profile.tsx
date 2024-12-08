import { User, Mail, Phone, MapPin, Building, Edit, Key } from 'lucide-react';

export default function Profile() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto bg-emerald-100 rounded-full flex items-center justify-center">
                  <User className="h-16 w-16 text-emerald-500" />
                </div>
                <h2 className="mt-4 text-xl font-bold">John Doe</h2>
                <p className="text-gray-600">Premium Member</p>
              </div>

              <div className="mt-6 border-t pt-6">
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <Mail className="h-5 w-5 mr-3" />
                    <span>john.doe@example.com</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="h-5 w-5 mr-3" />
                    <span>+1 234 567 890</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-3" />
                    <span>New York, USA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* My Properties */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">My Properties</h3>
                <button className="text-emerald-500 hover:text-emerald-600">View All</button>
              </div>

              <div className="space-y-6">
                {[1, 2].map((item) => (
                  <div key={item} className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center">
                      <Building className="h-12 w-12 text-emerald-500 mr-4" />
                      <div>
                        <h4 className="font-semibold">Golden Urban House</h4>
                        <p className="text-gray-600">123 Street, New York, USA</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 text-emerald-500 hover:bg-emerald-50 rounded">
                        <Edit className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Account Settings */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-6">Account Settings</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input
                      type="text"
                      defaultValue="John"
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input
                      type="text"
                      defaultValue="Doe"
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    defaultValue="john.doe@example.com"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    defaultValue="+1 234 567 890"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <textarea
                    rows={3}
                    defaultValue="123 Street, New York, USA"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div className="flex justify-between items-center pt-4">
                  <button
                    type="button"
                    className="flex items-center text-gray-600 hover:text-gray-800"
                  >
                    <Key className="h-5 w-5 mr-2" />
                    Change Password
                  </button>
                  <button
                    type="submit"
                    className="bg-emerald-500 text-white px-6 py-2 rounded-md hover:bg-emerald-600"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}