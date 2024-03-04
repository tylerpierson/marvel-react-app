import styles from './CategoryList.module.scss'

export default function CategoryList({ categories, activeCat, setActiveCat, user, setUser }) {
  const cats = categories.map(cat => (
    <li
      key={cat}
      className={cat === activeCat ? styles.active : ''}
      onClick={() => setActiveCat(cat)}
    >
      {cat}
    </li>
  ))

  return (
    <>
    <div className={styles.CategoryListContainer}>
      <h2 className={styles.greeting}>Welcome {user.name}</h2>
      <h4 className={styles.greeting}>CHOOSE YOUR HERO</h4>
      <ul className={styles.CategoryList}>
        {cats}
      </ul>
    </div>
    </>
  )
}
