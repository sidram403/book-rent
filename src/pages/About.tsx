import { Users, Award, Building, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative py-20 bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80"
            alt="About Us"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">About Makaan</h1>
          <p className="text-xl text-gray-300">Your Trusted Real Estate Partner Since 1990</p>
        </div>
      </div>

      {/* Stats */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-emerald-500 mb-2">1990</div>
              <div className="text-gray-600">Year Founded</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-500 mb-2">15K+</div>
              <div className="text-gray-600">Properties Sold</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-500 mb-2">100+</div>
              <div className="text-gray-600">Expert Agents</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-500 mb-2">99%</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                To provide exceptional real estate services that exceed our clients' expectations, 
                making their property dreams a reality through professional expertise and personalized attention.
              </p>
              <ul className="space-y-4">
                {['Professional Service', 'Expert Guidance', 'Transparent Process', 'Client Satisfaction'].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-600">
                To be the most trusted and innovative real estate company, setting industry standards 
                for excellence while creating lasting relationships with our clients and communities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-gray-600">Meet the experts behind our success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Robert Johnson',
                role: 'CEO & Founder',
                image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80'
              },
              {
                name: 'Sarah Williams',
                role: 'Head of Sales',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80'
              },
              {
                name: 'Michael Chen',
                role: 'Chief Operations Officer',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}