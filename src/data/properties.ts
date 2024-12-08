import type { Property } from '../types/property';

export const properties: Property[] = [
  {
    id: 1,
    type: 'For Sale',
    category: 'Apartment',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80',
    price: 345000,
    title: 'Modern Urban Apartment',
    location: 'Manhattan, New York',
    area: '1200 Sqft',
    beds: '3 Bed',
    baths: '2 Bath',
    description: 'Luxurious modern apartment with stunning city views.',
    features: [
      'Central Air Conditioning',
      'High-Speed Internet',
      'Modern Kitchen',
      'Walk-in Closet',
      'Hardwood Floors',
      'City Views'
    ],
    details: {
      area: '1200 Sqft',
      beds: '3 Bed',
      baths: '2 Bath',
      built: '2020',
      parking: '1 Car'
    },
    agent: {
      name: 'John Smith',
      phone: '+1 234 567 890',
      email: 'john.smith@makaan.com'
    }
  },
  // Add more properties here...
];