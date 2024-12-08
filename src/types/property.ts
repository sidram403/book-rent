export interface Property {
  id: number;
  type: 'For Sale' | 'For Rent';
  category: string;
  image: string;
  price: number;
  title: string;
  location: string;
  area: string;
  beds: string | null;
  baths: string;
  description?: string;
  features?: string[];
  details?: {
    area: string;
    beds: string;
    baths: string;
    built: string;
    parking: string;
  };
  agent?: Agent;
}

export interface Agent {
  name: string;
  phone: string;
  email: string;
}

export interface PropertyFilters {
  type: string;
  category: string;
  priceRange: string;
  searchQuery: string;
}