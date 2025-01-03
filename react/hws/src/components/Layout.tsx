import { Link, Outlet } from 'react-router-dom'
import styles from './Layout.module.css'

export const Layout = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <Link to='/' className={styles.navLink}>
              Home
            </Link>
          </li>
          <li>
            <Link to='/homework1' className={styles.navLink}>
              Homework 1
            </Link>
          </li>
          <li>
            <Link to='/homework2' className={styles.navLink}>
              Homework 2
            </Link>
          </li>
          <li>
            <Link to='/homework3' className={styles.navLink}>
              Homework 3
            </Link>
          </li>
          <li>
            <Link to='/homework4' className={styles.navLink}>
              Homework 4
            </Link>
          </li>
          <li>
            <Link to='/homework5' className={styles.navLink}>
              Homework 5
            </Link>
          </li>
          <li>
            <Link to='/homework6' className={styles.navLink}>
              Homework 6
            </Link>
          </li>
          <li>
            <Link to='/homework7' className={styles.navLink}>
              Homework 7
            </Link>
          </li>
          <li>
            <Link to='/homework8' className={styles.navLink}>
              Homework 8
            </Link>
          </li>
          <li>
            <Link to='/homework9' className={styles.navLink}>
              Homework 9
            </Link>
          </li>
          <li>
            <Link to='/homework10' className={styles.navLink}>
              Homework 10
            </Link>
          </li>
          <li>
            <Link to='/' className={styles.navLink}>
              Homework 11
            </Link>
          </li>
          <li>
            <Link to='/homework12' className={styles.navLink}>
              Homework 12
            </Link>
          </li>
          <li>
            <Link to='/homework13' className={styles.navLink}>
              Homework 13
            </Link>
          </li>
          <li>
            <Link to='/homework14' className={styles.navLink}>
              Homework 14
            </Link>
          </li>
          <li>
            <Link to='/homework15' className={styles.navLink}>
              Homework 15
            </Link>
          </li>
          <li>
            <Link to='/homework16' className={styles.navLink}>
              Homework 16
            </Link>
          </li>
          <li>
            <Link to='/homework18' className={styles.navLink}>
              Homework 18
            </Link>
          </li>
          <li>
            <Link to='/homework19' className={styles.navLink}>
              Homework 19
            </Link>
          </li>
        </ul>
      </nav>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}
