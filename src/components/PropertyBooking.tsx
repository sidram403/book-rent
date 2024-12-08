import { useState } from 'react';
import { Calendar, Users, Clock } from 'lucide-react';

interface BookingProps {
  propertyPrice: string;
  onBook: (dates: { startDate: Date; endDate: Date; guests: number }) => void;
}

export default function PropertyBooking({ propertyPrice, onBook }: BookingProps) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onBook({
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      guests
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-6">Book this Property</h2>
      <div className="text-2xl font-bold text-emerald-500 mb-6">{propertyPrice}</div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Check In</label>
            <div className="relative">
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500"
                required
              />
              <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Check Out</label>
            <div className="relative">
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500"
                required
              />
              <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Number of Guests</label>
          <div className="relative">
            <select
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500"
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'Guest' : 'Guests'}
                </option>
              ))}
            </select>
            <Users className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-500 text-white py-2 px-4 rounded-md hover:bg-emerald-600"
        >
          Book Now
        </button>

        <div className="text-center text-sm text-gray-500">
          <Clock className="inline-block h-4 w-4 mr-1" />
          Instant Booking Available
        </div>
      </form>
    </div>
  );
}