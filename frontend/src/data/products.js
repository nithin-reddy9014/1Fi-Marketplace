const products = [
  {
    id: 1,
    name: "iPhone 16",
    brand: "Apple",
    price: 79999,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600",

    variants: ["128 GB", "256 GB", "512 GB"],

    emiPlans: [
      {
        months: 6,
        monthly: 13333,
        interest: "0%",
      },
      {
        months: 12,
        monthly: 6667,
        interest: "0%",
      },
      {
        months: 18,
        monthly: 4444,
        interest: "0%",
      },
    ],

    description:
      "Experience powerful performance, an advanced camera system and a beautiful display.",
  },

  {
    id: 2,
    name: "Samsung Galaxy S25",
    brand: "Samsung",
    price: 74999,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600",

    variants: ["128 GB", "256 GB", "512 GB"],

    emiPlans: [
      {
        months: 6,
        monthly: 12500,
        interest: "0%",
      },
      {
        months: 12,
        monthly: 6250,
        interest: "0%",
      },
      {
        months: 18,
        monthly: 4167,
        interest: "0%",
      },
    ],

    description:
      "Premium smartphone with powerful performance and an advanced camera system.",
  },

  {
    id: 3,
    name: "MacBook Air",
    brand: "Apple",
    price: 99999,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600",

    variants: ["8 GB / 256 GB", "16 GB / 256 GB"],

    emiPlans: [
      {
        months: 6,
        monthly: 16667,
        interest: "0%",
      },
      {
        months: 12,
        monthly: 8333,
        interest: "0%",
      },
      {
        months: 24,
        monthly: 4167,
        interest: "0%",
      },
    ],

    description:
      "A lightweight laptop with excellent performance and long battery life.",
  },

  {
    id: 4,
    name: "Sony WH-1000XM5",
    brand: "Sony",
    price: 29999,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600",

    variants: ["Standard"],

    emiPlans: [
      {
        months: 6,
        monthly: 5000,
        interest: "0%",
      },
      {
        months: 12,
        monthly: 2500,
        interest: "0%",
      },
    ],

    description:
      "Premium wireless headphones with advanced noise cancellation.",
  },
];

export default products;
