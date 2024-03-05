import { useState } from 'react'
import styles from './MenuList.module.scss'
import MenuListItem from '../MenuListItem/MenuListItem'

export default function MenuList({ menuItems, handleAddToOrder }) {
  const [showComicInfo, setShowComicInfo] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  
  const toggleComicInfo = (item) => {
    setShowComicInfo(!showComicInfo)
    setSelectedItem({
      ...item,
      description: item.description
    })
  }
  

  const items = menuItems.map(item =>
    <MenuListItem
      key={item._id}
      handleAddToOrder={handleAddToOrder}
      menuItem={item}
      toggleComicInfo={toggleComicInfo}
    />
  )

  return (
    <main className={styles.MenuList}>
      <div className={styles.MenuListContainer}>
        {showComicInfo && selectedItem && (
          <div className={styles.comicInfoContainer}>
            <div className={styles.comicInfo}>
              <img className={styles.itemImage} src={selectedItem.image}/>
              <div className={styles.textContainer}>
                <h3 className={styles.itemTitle}>{selectedItem.name}</h3>
                <p className={styles.itemDescription}>{selectedItem.description}</p>
              </div>
              <button className={styles.closeBtn} onClick={() => setShowComicInfo(false)}><span className={`${styles.span} ${styles.left}`}>/</span><span className={`${styles.span} ${styles.right}`}>\</span></button>
            </div>
          </div>
        )}
        {items}
      </div>
    </main>
  )
}
