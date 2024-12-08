import { useState } from 'react';
import { CreditCard, Lock, Calendar } from 'lucide-react';
import type { CardDetails } from '../../types/booking';

interface PaymentFormProps {
  onSubmit: (cardDetails: CardDetails) => void;
}

export default function PaymentForm({ onSubmit }: PaymentFormProps) {
  const [cardDetails, setCardDetails] = useState<CardDetails>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(cardDetails);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Card Number
        </label>
        <div className="relative">
          <input
            type="text"
            value={cardDetails.cardNumber}
            onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
            placeholder="1234 5678 9012 3456"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500"
            required
          />
          <CreditCard className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Expiry Date
          </label>
          <div className="relative">
            <input
              type="text"
              value={cardDetails.expiryDate}
              onChange={(e) => setCardDetails({ ...cardDetails, expiryDate: e.target.value })}
              placeholder="MM/YY"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500"
              required
            />
            <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            CVV
          </label>
          <div className="relative">
            <input
              type="text"
              value={cardDetails.cvv}
              onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
              placeholder="123"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500"
              required
            />
            <Lock className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Cardholder Name
        </label>
        <input
          type="text"
          value={cardDetails.name}
          onChange={(e) => setCardDetails({ ...cardDetails, name: e.target.value })}
          placeholder="John Doe"
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-emerald-500 text-white py-3 px-4 rounded-md hover:bg-emerald-600"
      >
        Pay Now
      </button>
    </form>
  );
}