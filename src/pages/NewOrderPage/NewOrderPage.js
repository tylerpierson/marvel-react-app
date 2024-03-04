import { useState, useEffect, useRef } from 'react'
import * as itemsAPI from '../../utilities/items-api'
import * as ordersAPI from '../../utilities/orders-api'
import styles from './NewOrderPage.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import MenuList from '../../components/MenuList/MenuList'
import CategoryList from '../../components/CategoryList/CategoryList'
import OrderDetail from '../../components/OrderDetail/OrderDetail'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'

export default function NewOrderPage({ user, setUser }) {
  const [menuItems, setMenuItems] = useState([])
  const [activeCat, setActiveCat] = useState('')
  const [cart, setCart] = useState(null)
  const categoriesRef = useRef([])
  const navigate = useNavigate()

  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll()
      categoriesRef.current = items.reduce((cats, item) => {
        const cat = item.category.name
        return cats.includes(cat) ? cats : [...cats, cat]
      }, [])
      setMenuItems(items)
      setActiveCat(categoriesRef.current[0])
    }
    getItems()
    async function getCart() {
      const cart = await ordersAPI.getCart()
      setCart(cart)
    }
    getCart()
  }, [])

  /*-- Event Handlers --*/
  async function handleAddToOrder(itemId) {
    const updatedCart = await ordersAPI.addItemToCart(itemId)
    setCart(updatedCart)
  }

  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty)
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate('/orders');
  }

  return (
    <>
    <NavBar />
    <main className={styles.NewOrderPage}>
      <div className={styles.MenuContainer}>
        <aside>
          <CategoryList
            categories={categoriesRef.current}
            activeCat={activeCat}
            setActiveCat={setActiveCat}
            user={user}
            setUser={setUser}
          />
        </aside>
        <MenuList
          menuItems={menuItems.filter(item => item.category.name === activeCat)}
          handleAddToOrder={handleAddToOrder}
        />
      </div>
    </main>
    <footer className={styles.Footer}>
    <Footer />
    <OrderDetail
        order={cart}
        handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout}
    />
    <Link to="/orders" className={styles.Link}>PREVIOUS ORDERS</Link>
    </footer>
    </>
    )
  }
  