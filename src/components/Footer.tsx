import { Home, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Home className="h-8 w-8 text-emerald-500" />
              <span className="ml-2 text-2xl font-bold text-emerald-500">Makaan</span>
            </div>
            <p className="text-gray-400">
              Your trusted partner in finding the perfect property. We make real estate simple and accessible.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-emerald-500">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-500">Contact Us</Link></li>
              <li><Link to="/properties" className="hover:text-emerald-500">Our Properties</Link></li>
              <li><Link to="#" className="hover:text-emerald-500">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Property Types</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:text-emerald-500">Apartments</Link></li>
              <li><Link to="#" className="hover:text-emerald-500">Villas</Link></li>
              <li><Link to="#" className="hover:text-emerald-500">Offices</Link></li>
              <li><Link to="#" className="hover:text-emerald-500">Townhouses</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-emerald-500 mr-2" />
                <span>123 Street, New York, USA</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-emerald-500 mr-2" />
                <span>+012 345 67890</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-emerald-500 mr-2" />
                <span>info@makaan.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Makaan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}