import styles from './pages.module.css'
import { ImageComponent } from '../hw1/ImageComponent'
import { ListsComponent } from '../hw1/ListsComponent'
import { ParagraphsComponent } from '../hw1/ParagraphsComponent'
import { VideoComponent } from '../hw1/VideoComponent'
import { CitySelector } from '../hw4/CitySelector'
import { MathQuiz } from '../hw4/MathQuiz'
import { HW14 } from '../hw14'
import { HW15 } from '../hw15'
import { HW16 } from '../hw16'
import { HW18 } from '../hw18'
import { Greeting } from '../hw2/Greeting'
import { ShoppingList } from '../hw2/ShoppingList'
import { ordersWithStatuses, shoppingListItems } from '../const'
import { OrderStatus } from '../hw2/OrderStatus'
import { Rating } from '../hw3/Rating'
import { List } from '../hw3/List'
import { Login } from '../hw5/Login'
import { UserProfile } from '../hw6/UserProfile'
import { LanguageSwitcher } from '../hw7/LanguageSwitcher'
import { LanguageProvider } from '../hw7/HOC'
import { ListItems } from '../hw8/ListItems'
import { DynamicForm } from '../hw9/DynamicForm'
import { CatImage } from '../hw10/CatImage'
import { DisplayValue } from '../hw12/DisplayValue'
import { Filter } from '../hw13/Filter'
import { HW19 } from '../hw19'
import { HW20 } from '../hw20'
import { HW21 } from '../hw21'
import { HW22 } from '../hw22'
import { HW23 } from '../hw23'

export const Homework1 = () => (
  <div className={styles.container}>
    <section className={styles.section}>
      <h2 className={styles.title}>Homework 1</h2>
      <ImageComponent />
      <VideoComponent />
      <ParagraphsComponent />
      <ListsComponent />
    </section>
  </div>
)
export const Homework2 = () => (
  <div className={styles.container}>
    <section className={styles.section}>
      <h2 className={styles.title}>Homework 2</h2>
      <Greeting name='John' />
      <ShoppingList items={shoppingListItems} />
      {ordersWithStatuses.map((order) => (
        <OrderStatus
          key={order.orderId}
          orderId={order.orderId}
          status={order.status}
        />
      ))}
    </section>
  </div>
)
export const Homework3 = () => (
  <div className={styles.container}>
    <section className={styles.section}>
      <h2 className={styles.title}>Homework 3</h2>
      <div className={styles.content}>
        <Rating />
        <List />
      </div>
    </section>
  </div>
)
export const Homework4 = () => (
  <div className={styles.container}>
    <section className={styles.section}>
      <h2 className={styles.title}>Homework 4</h2>
      <div className={styles.content}>
        <CitySelector />
      </div>
      <div className={styles.content}>
        <MathQuiz />
      </div>
    </section>
  </div>
)
export const Homework5 = () => (
  <div className={styles.container}>
    <section className={styles.section}>
      <h2 className={styles.title}>Homework 5</h2>
      <div className={styles.content}>
        <Login />
      </div>
    </section>
  </div>
)
export const Homework6 = () => (
  <section className={styles.section}>
    <h2 className={styles.title}>Homework 6</h2>
    <div className={styles.content}>
      <UserProfile />
    </div>
  </section>
)
export const Homework7 = () => (
  <section className={styles.section}>
    <h2 className={styles.title}>Homework 7</h2>
    <div className={styles.content}>
      <LanguageProvider>
        <LanguageSwitcher />
      </LanguageProvider>
    </div>
  </section>
)
export const Homework8 = () => (
  <div className={styles.homework}>
    <section className={styles.section}>
      <h2 className={styles.title}>Homework 8</h2>
      <div className={styles.content}>
        <ListItems />
      </div>
    </section>
  </div>
)
export const Homework9 = () => (
  <div className={styles.homework}>
    <section className={styles.section}>
      <h2 className={styles.title}>Homework 9</h2>
      <div className={styles.content}>
        <DynamicForm />
      </div>
    </section>
  </div>
)
export const Homework10 = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Homework 10 - Cat Image Generator</h1>
    <CatImage />
  </div>
)
export const Homework12 = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Homework 12 - Value Display</h1>
    <div style={{ maxWidth: '400px', marginBlock: 'auto' }}>
      <DisplayValue />
    </div>
  </div>
)
export const Homework13 = () => (
  <div className={styles.container}>
    <section className={styles.section}>
      <h2 className={styles.title}>Homework 13 - User Filter</h2>
      <div className={styles.content}>
        <Filter />
      </div>
    </section>
  </div>
)
export const Homework14 = () => <HW14 />
export const Homework15 = () => <HW15 />
export const Homework16 = () => <HW16 />
export const Homework18 = () => <HW18 />
export const Homework19 = () => <HW19 />
export const Homework20 = () => <HW20 />
export const Homework21 = () => <HW21 />
export const Homework22 = () => <HW22 />
export const Homework23 = () => <HW23 />
