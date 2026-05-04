export const orders = [
  {
    id: "ORD001",
    customer: {
      name: "Rahul Sharma",
      email: "rahul@example.com",
      phone: "+91 98765 43210"
    },
    items: [
      { id: 1, name: "Premium Laddu Gopal Dress", price: 599, quantity: 1 }
    ],
    total: 599,
    status: "Delivered",
    date: "2024-05-01T10:30:00Z",
    paymentMethod: "UPI"
  },
  {
    id: "ORD002",
    customer: {
      name: "Priya Singh",
      email: "priya@example.com",
      phone: "+91 87654 32109"
    },
    items: [
      { id: 3, name: "Golden Bansuri", price: 299, quantity: 2 },
      { id: 5, name: "Peacock Feather Crown", price: 449, quantity: 1 }
    ],
    total: 1047,
    status: "Processing",
    date: "2024-05-03T14:45:00Z",
    paymentMethod: "Credit Card"
  },
  {
    id: "ORD003",
    customer: {
      name: "Amit Patel",
      email: "amit@example.com",
      phone: "+91 76543 21098"
    },
    items: [
      { id: 2, name: "Silk Pitambar Set", price: 899, quantity: 1 }
    ],
    total: 899,
    status: "Shipped",
    date: "2024-05-02T09:15:00Z",
    paymentMethod: "COD"
  }
];
