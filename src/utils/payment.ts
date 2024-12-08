export const calculateFees = (propertyPrice: number): {
  platformFee: number;
  tax: number;
  total: number;
} => {
  const platformFee = propertyPrice * 0.02; // 2% platform fee
  const tax = (propertyPrice + platformFee) * 0.08; // 8% tax
  const total = propertyPrice + platformFee + tax;

  return {
    platformFee: Number(platformFee.toFixed(2)),
    tax: Number(tax.toFixed(2)),
    total: Number(total.toFixed(2))
  };
};