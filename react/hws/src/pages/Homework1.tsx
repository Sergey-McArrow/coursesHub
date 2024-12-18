import { ImageComponent } from '../hw1/ImageComponent';
import { ListsComponent } from '../hw1/ListsComponent';
import { ParagraphsComponent } from '../hw1/ParagraphsComponent';
import { VideoComponent } from '../hw1/VideoComponent';
import styles from './pages.module.css';

export const Homework1 = () => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2 className={styles.title}>Homework 1</h2>
        <ImageComponent />
        <VideoComponent />
        <ParagraphsComponent />
        <ListsComponent />
      </section>
    </div>
  );
};
