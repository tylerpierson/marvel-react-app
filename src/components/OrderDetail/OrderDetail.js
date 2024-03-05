import styles from './OrderDetail.module.scss';
import LineItem from '../LineItem/LineItem';

// Used to display the details of any order, including the cart (unpaid order)
export default function OrderDetail({ order, handleChangeQty, handleCheckout }) {
    if (!order) return null;

    const lineItems = order.lineItems.map(item =>
      <LineItem
        lineItem={item}
        isPaid={order.isPaid}
        handleChangeQty={handleChangeQty}
        key={item._id}
      />
    );

    return (
      <div className={styles.OrderDetail}>
        <div className={styles.sectionHeading}>
          {order.isPaid ?
            <span>ORDER <span className="smaller">{order.orderId}</span></span>
            :
            <div className={styles.checkOutBtnContainer}>
              <span className={styles.totalQty}>{order.totalQty}</span>
              <button className={styles.cart}>View Cart</button>
            </div>
          }
        </div>
        <div className={`${styles.lineItemContainer} flex-ctr-ctr flex-col scroll-y`}>
          {lineItems.length ?
            <>
              <div className={styles.LineItemscontainer}>
                {lineItems}
              </div>
              <section className={styles.total}>
                <span className={styles.totalPrice}>${order.orderTotal.toFixed(2)}</span>
                {order.isPaid ?
                  <span className={styles.totalPrice}>TOTAL&nbsp;&nbsp;</span>
                  :
                  <div className={styles.buttonsContainer}>
                      <button
                        className={styles.button}
                        onClick={handleCheckout}
                        disabled={!lineItems.length}
                      >CHECKOUT</button>
                    </div>
                }
              </section>
            </>
            :
            ''
          }
        </div>
      </div>
    );
  }