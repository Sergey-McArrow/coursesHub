import { ordersWithStatuses, shoppingListItems } from '../const';
import { Greeting } from '../hw2/Greeting';
import { OrderStatus } from '../hw2/OrderStatus';
import { ShoppingList } from '../hw2/ShoppingList';
import styles from './pages.module.css';

export const Homework2 = () => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2 className={styles.title}>Homework 2</h2>
        <Greeting name='John' />
        <ShoppingList items={shoppingListItems} />
        {ordersWithStatuses.map((order) => (
          <OrderStatus
            key={order.orderId}
            orderId={order.orderId}
            status={order.status}
          />
        ))}
      </section>
    </div>
  );
};
