import { FC } from 'react';

type TOrderStatusProps = {
  orderId: number;
  status: string;
};

export const OrderStatus: FC<TOrderStatusProps> = ({ orderId, status }) => {
  return (
    <p>
      Order #{orderId}: {status}
    </p>
  );
};
