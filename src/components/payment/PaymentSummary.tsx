import type { PaymentDetails } from '../../types/booking';

interface PaymentSummaryProps {
  details: PaymentDetails;
}

export default function PaymentSummary({ details }: PaymentSummaryProps) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <span className="text-gray-600">Property Price</span>
        <span className="font-semibold">${details.propertyPrice.toLocaleString()}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Platform Fee</span>
        <span className="font-semibold">${details.platformFee.toLocaleString()}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Tax</span>
        <span className="font-semibold">${details.tax.toLocaleString()}</span>
      </div>
      <div className="border-t pt-4 flex justify-between">
        <span className="font-bold">Total</span>
        <span className="font-bold text-emerald-500">${details.total.toLocaleString()}</span>
      </div>
    </div>
  );
}