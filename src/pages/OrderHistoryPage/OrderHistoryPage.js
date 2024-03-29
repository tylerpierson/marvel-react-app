import styles from './OrderHistoryPage.module.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as ordersAPI from '../../utilities/orders-api';
import UserInfo from '../../components/UserInfo/UserInfo';
import OrderList from '../../components/OrderList/OrderList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

export default function OrderHistoryPage({ user, setUser }) {
  /*--- State --- */
  const [orders, setOrders] = useState([]);
  const [activeOrder, setActiveOrder] = useState(null);

  /*--- Side Effects --- */
  useEffect(function () {
    // Load previous orders (paid)
    async function fetchOrderHistory() {
      const orders = await ordersAPI.getOrderHistory();
      setOrders(orders);
      // If no orders, activeOrder will be set to null below
      setActiveOrder(orders[0] || null);
    }
    fetchOrderHistory();
  }, []);

  /*--- Event Handlers --- */
  function handleSelectOrder(order) {
    setActiveOrder(order);
  }

  /*--- Rendered UI --- */
  return (
    <>
    <NavBar />
    <main className={styles.OrderHistoryPage}>
      <OrderList
        orders={orders}
        activeOrder={activeOrder}
        handleSelectOrder={handleSelectOrder}
      />
      <div className={styles.bottomContainer}>
        <div className={styles.buttonsContainer}>
          <Link to="/orders/new" className={styles.button}>BUY MORE!</Link>
        </div> 
        <h2 className={styles.gratitude}>Thank You for Shopping!</h2>
      </div>
    </main> 
    <footer className={styles.Footer}>
      <UserInfo user={user} setUser={setUser} />
      <Footer />
    </footer>
    </>
  );
}