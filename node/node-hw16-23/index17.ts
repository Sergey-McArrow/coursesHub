const calculateTotal = (
  price: number,
  quantity: number,
  discount: number = 0
): number => {
  return price * quantity - discount;
};

const id: string | number = '123';

const displayId = (id: string | number) => {
  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  } else if (typeof id === 'number') {
    console.log(id * 10);
  }
};

const orders = [
  { orderId: '123', amount: 100, status: 'pending' },
  { orderId: '456', amount: 200, status: 'shipped' },
  { orderId: '789', amount: 300, status: 'delivered' },
];

const filterOrdersByStatus = (orders: any[], status: string): any[] => {
  return orders.filter((order: any) => order.status === status);
};

const productInfo: [string, number, number] = ['Product A', 10, 5];

const updateStock = (
  inventory: Record<string, number>,
  productInfo: [string, number, number]
): Record<string, number> => {
  const [name, quantity] = productInfo;
  return {
    ...inventory,
    [name]: (inventory[name] || 0) + quantity,
  };
};
