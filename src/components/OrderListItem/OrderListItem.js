import styles from './OrderListItem.module.scss';

export default function OrderListItem({ order, isSelected, handleSelectOrder }) {
return (
  <div className={`${styles.OrderListItem} ${isSelected ? styles.selected : ''}`} onClick={() => handleSelectOrder(order)}>
    <div>
      <div className={styles.textDate}>{new Date(order.updatedAt).toLocaleDateString()}</div>
      <div className={styles.text}>Order Id: <span className={styles.text}>{order.orderId}</span></div>
    </div>
    <div className="align-rt">
      <div className={styles.text}>{order.totalQty} Item{order.totalQty > 1 ? 's' : ''}</div>
      <div className={styles.textPrice}>${order.orderTotal.toFixed(2)}</div>
    </div>
  </div>
);
}