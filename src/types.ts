export interface PropertyListing {
    id: number;
    title: string;
    address: {
      street: string;
      city: string;
      state: string;
      zip: string;
    };
    price: {
      amount: number;
      type: 'sale' | 'rent';
    };
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    imageUrl: string;
    forSale: boolean;
  }