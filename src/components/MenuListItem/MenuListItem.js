import styles from './MenuListItem.module.scss'

export default function MenuListItem({ menuItem, handleAddToOrder, toggleComicInfo }) {
  return (
    <div className={styles.MenuListItem}>
      <div className={styles.imgContainer}>
        <a href="#" onClick={() => handleAddToOrder(menuItem._id)}>
          <h3 className={styles.Add}>
            Add to Cart for ${menuItem.price.toFixed(2)}
          </h3>
          <img className={styles.image + ' ' + 'flex-ctr-ctr'} src={menuItem.image} alt="Comic Thumbnail" />
        </a>
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.info} onClick={() => toggleComicInfo(menuItem)}>View Comic Info</button>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.name}>{menuItem.name}</div>
        <div className={styles.buy}>
          <span className={styles.price}>${menuItem.price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}
