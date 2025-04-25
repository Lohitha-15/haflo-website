import { PropertyListing } from '../types';

export const properties: PropertyListing[] = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    address: {
      street: "543 Stanwich Road",
      city: "Greenwich",
      state: "CT",
      zip: "06831"
    },
    price: {
      amount: 1200000,
      type: 'sale'
    },
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3200,
    imageUrl: "https://framerusercontent.com/images/13ESQTiKBRAZSusoWVDy2BQDJks.png",
    forSale: true
  },
  {
    id: 2,
    title: "Manhattan Luxury Condo",
    address: {
      street: "65 Central Park West PH",
      city: "New York City",
      state: "NY",
      zip: "10023"
    },
    price: {
      amount: 7500,
      type: 'rent'
    },
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2400,
    imageUrl: "https://framerusercontent.com/images/Sk6FreoDBJoTe0FrxgJlG8TrXu0.png",
    forSale: true
  },
  {
    id: 3,
    title: "Contemporary City Residence",
    address: {
      street: "128 East 74th Street",
      city: "New York City",
      state: "NY",
      zip: "10021"
    },
    price: {
      amount: 725000,
      type: 'sale'
    },
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 2700,
    imageUrl: "https://framerusercontent.com/images/3fUCwn1rjf4vRdUcBQ92GQcQVIc.png",
    forSale: true
  },
  {
    id: 4,
    title: "Rustic Mountain Cabin",
    address: {
      street: "4517 Washington Ave",
      city: "Manchester",
      state: "Kentucky",
      zip: "39495"
    },
    price: {
      amount: 9500,
      type: 'rent'
    },
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1650,
    imageUrl: "https://framerusercontent.com/images/1SQTOoaty1Jd5bLChK5KhP9yeKU.png",
    forSale: true
  },
  {
    id: 5,
    title: "Urban Loft with Views",
    address: {
      street: "2118 Thornridge Cir",
      city: "Syracuse",
      state: "Connecticut",
      zip: "35624"
    },
    price: {
      amount: 2600000,
      type: 'sale'
    },
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2400,
    imageUrl: "https://framerusercontent.com/images/KpejEnh1tz6E687AXMzr3SLMBDw.png",
    forSale: true
  },
  {
    id: 6,
    title: "Coastal Retreat",
    address: {
      street: "8502 Preston Rd",
      city: "Inglewood",
      state: "Maine",
      zip: "98380"
    },
    price: {
      amount: 825000,
      type: 'sale'
    },
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 2800,
    imageUrl: "https://framerusercontent.com/images/0ZyUjYEdz0ZrXNULOnx7582LdlE.png",
    forSale: true
  }
];