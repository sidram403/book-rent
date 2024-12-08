import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PaymentSuccess() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50 flex items-center">
      <div className="max-w-md mx-auto px-4 py-8 text-center">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-emerald-500" />
          </div>
          <h1 className="text-2xl font-bold mb-4">Payment Successful!</h1>
          <p className="text-gray-600 mb-8">
            Your booking has been confirmed. You will receive a confirmation email shortly.
          </p>
          <div className="space-y-4">
            <Link
              to="/profile"
              className="block w-full bg-emerald-500 text-white py-2 px-4 rounded-md hover:bg-emerald-600"
            >
              View Booking
            </Link>
            <Link
              to="/"
              className="block w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}