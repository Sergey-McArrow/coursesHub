import { Link, Outlet } from 'react-router-dom'
import styles from './Layout.module.css'

export const Layout = () => {
  const linksArr = new Array(20).fill(null)
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <Link to='/' className={styles.navLink}>
              Home
            </Link>
          </li>
          {linksArr.map((_, index) => (
            <li key={index}>
              <Link to={`/homework${index + 1}`} className={styles.navLink}>
                Homework {index + 1}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}
