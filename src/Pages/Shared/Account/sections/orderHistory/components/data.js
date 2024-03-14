export const orders = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1625753783470-ec2ab4efeeec?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productName: "Clairol BW2 Tub Powder Lightener Extra-Strength",
    orderNumber: "ORD-TT2354",
    dateDelivered: "Jan 12, 2024 - 3:45pm",
    status: "Delivered",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1625753783470-ec2ab4efeeec?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productName: "Clairol BW2 Tub Powder Lightener Extra-Strength",
    orderNumber: "ORD-TT2354",
    dateDelivered: null,
    status: "Ongoing",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1625753783470-ec2ab4efeeec?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productName: "Clairol BW2 Tub Powder Lightener Extra-Strength",
    orderNumber: "ORD-TT2354",
    dateDelivered: "Jan 12, 2024 - 3:45pm",
    status: "Delivered",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1625753783470-ec2ab4efeeec?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productName: "Clairol BW2 Tub Powder Lightener Extra-Strength",
    orderNumber: "ORD-TT2354",
    dateDelivered: "Jan 12, 2024 - 3:45pm",
    status: "Delivered",
  },
];

export const reportSteps = ["Issue type", "Resolve option", "Product Evidence"];

export const TrackStepTypes = {
  processed: {
    initialTextObj: null,
    activeTextObj: {
      main: `Order Procressing`,
      status: `In progress`,
    },
    completedTxtObj: {
      main: `Order Accepted`,
    },
  },
  dispatched: {
    initialTextObj: {
      main: `Order Dispatch`,
      sub: `You will be notified when your order is dispatched`,
    },
    activeTextObj: {
      main: `Order Dispatch`,
      status: `In packaging`,
    },
    completedTxtObj: {
      main: `Order Dispatched`,
      sub: `Your order is on its way to you`,
    },
  },
  delivered: {
    initialTextObj: {
      main: `Order Arrival`,
      sub: `You will be notified when your driver gets to you`,
    },
    activeTextObj: {
      main: `Order Arrival`,
      status: `In transit`,
    },
    completedTxtObj: {
      main: `Order Arrival`,
      sub: `Delivered`,
    },
  },
};

export const orderStatus = {
  delivered: `Delivered`,
  inTransit: `In transit`,
  processing: `Processing`,
};

export const issueTypeOption = [
  {
    label: "Damaged product",
    value: "damaged",
  },
  {
    label: "Not what I ordered arrived",
    value: "wrongOrder",
  },
  {
    label: "Others",
    value: "others",
  },
];

export const resolveOption = [
  {
    label: "I want a refund",
    value: "refund",
  },
  {
    label: "I want to make a return",
    value: "return",
  },
];

export const itemInfo = [
  {
    id: 1,
    name: `Nairobi Wrapp-It Shine Foaming Lotion 8oz`,
    price: `₦87,260`,
    seller: `Rosalind`,
  },

  {
    id: 2,
    name: `Clairol BW2 Tub Powder Lightener Extra-Strength`,
    price: `₦50,260`,
    seller: `Rosalind`,
  },
];
