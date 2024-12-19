import { Link, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

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
        </ul>
      </nav>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};
