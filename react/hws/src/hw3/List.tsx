import { useState } from 'react';
import { persons } from '../const';
import styles from './List.module.css';

type TPerson = {
  id: number;
  name: string;
  age: number;
};

export const List = () => {
  const [people, setPeople] = useState<TPerson[]>(persons);
  const [sortKey, setSortKey] = useState<'name' | 'age'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const sortedPeople = [...people].sort((a, b) => {
    const compareValue = sortOrder === 'asc' ? 1 : -1;
    return a[sortKey] > b[sortKey] ? compareValue : -compareValue;
  });

  const toggleSortKey = (key: 'name' | 'age') => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const handleDelete = (id: number) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <button
          className={`${styles.button} ${sortKey === 'name' ? styles.activeButton : ''}`}
          onClick={() => toggleSortKey('name')}
        >
          Sort by Name {sortKey === 'name' && (sortOrder === 'asc' ? '↑' : '↓')}
        </button>
        <button
          className={`${styles.button} ${sortKey === 'age' ? styles.activeButton : ''}`}
          onClick={() => toggleSortKey('age')}
        >
          Sort by Age {sortKey === 'age' && (sortOrder === 'asc' ? '↑' : '↓')}
        </button>
      </div>

      <ul className={styles.list}>
        {sortedPeople.map((person) => (
          <li key={person.id} className={styles.listItem}>
            <div className={styles.personInfo}>
              <span className={styles.name}>{person.name}</span>
              <span className={styles.age}>({person.age} years)</span>
              <button
                onClick={() => handleDelete(person.id)}
                className={styles.deleteButton}
              >
                Удалить
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
