import { useNavigate } from 'react-router-dom';
import PaymentForm from '../components/payment/PaymentForm';
import PaymentSummary from '../components/payment/PaymentSummary';
import { calculateFees } from '../utils/payment';
import type { CardDetails } from '../types/booking';

export default function Payment() {
  const navigate = useNavigate();
  const propertyPrice = 12345; // This would come from the booking context/state
  const paymentDetails = {
    propertyPrice,
    ...calculateFees(propertyPrice)
  };

  const handlePayment = (cardDetails: CardDetails) => {
    // Handle payment processing
    console.log('Processing payment with:', cardDetails);
    navigate('/payment-success');
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6">Payment Details</h2>
            <PaymentForm onSubmit={handlePayment} />
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 h-fit">
            <h3 className="text-xl font-bold mb-6">Payment Summary</h3>
            <PaymentSummary details={paymentDetails} />
          </div>
        </div>
      </div>
    </div>
  );
}