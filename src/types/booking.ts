export interface BookingDates {
  startDate: Date;
  endDate: Date;
  guests: number;
}

export interface PaymentDetails {
  propertyPrice: number;
  platformFee: number;
  tax: number;
  total: number;
}

export interface CardDetails {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  name: string;
}