import { Phone, Mail, User } from 'lucide-react';
import { useState } from 'react';

interface Agent {
  name: string;
  phone: string;
  email: string;
}

interface PropertyContactProps {
  agent: Agent;
}

export default function PropertyContact({ agent }: PropertyContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Contact Agent</h3>
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
            <User className="h-6 w-6 text-emerald-500" />
          </div>
          <div className="ml-4">
            <div className="font-semibold">{agent.name}</div>
            <div className="text-sm text-gray-500">Property Agent</div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center text-gray-600">
            <Phone className="h-5 w-5 mr-2" />
            <span>{agent.phone}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Mail className="h-5 w-5 mr-2" />
            <span>{agent.email}</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-emerald-500 text-white py-2 px-4 rounded-md hover:bg-emerald-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}