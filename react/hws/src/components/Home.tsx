import styles from './Home.module.css';

export const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Welcome to Serhii Makarov`s
        <br />
        React Homework Hub
      </h1>
      <p className={styles.description}>
        Select a homework assignment from the navigation menu above to explore
        different React components and features.
      </p>
      <p>
        <a href='https://github.com/Sergey-McArrow/coursesHub/tree/main/react/hws'>
          Repo
        </a>
      </p>
    </div>
  );
};
