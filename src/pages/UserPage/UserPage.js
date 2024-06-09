import { useState, useEffect, useRef } from 'react'
import * as itemsAPI from '../../utilities/items-api'
import * as ordersAPI from '../../utilities/orders-api'
import styles from './UserPage.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'

export default function UserPage({ user, setUser }) {
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

  return (
    <>
    <NavBar />
    <main className={styles.UserPage}>
        <h1>User Page</h1>
    </main>
    <footer className={styles.Footer}>
    <Footer />
    <div className={styles.orderContainer}>
      <Link to="/team" className={styles.Link}>TEAM PAGE</Link>
    </div>
    </footer>
    </>
    )
  }
  