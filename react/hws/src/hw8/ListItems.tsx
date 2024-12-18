import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './ListItems.module.css';

interface ListItem {
  id: number;
  text: string;
  completed: boolean;
}

export const ListItems = () => {
  const [items, setItems] = useState<ListItem[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editValue, setEditValue] = useState('');
  const [filter, setFilter] = useState<'all' | 'completed' | 'active'>('all');

  useEffect(() => {
    console.log('Компонент ListItems обновлен');
    const savedItems = localStorage.getItem('listItems');
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('listItems', JSON.stringify(items));
  }, [items]);

  const addItem = () => {
    if (inputValue.trim()) {
      setItems([
        ...items,
        {
          id: Date.now(),
          text: inputValue.trim(),
          completed: false,
        },
      ]);
      setInputValue('');
    }
  };

  const deleteItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const toggleComplete = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const startEdit = (id: number, text: string) => {
    setEditingId(id);
    setEditValue(text);
  };

  const saveEdit = () => {
    if (editingId !== null && editValue.trim()) {
      setItems(
        items.map((item) =>
          item.id === editingId ? { ...item, text: editValue.trim() } : item
        )
      );
      setEditingId(null);
      setEditValue('');
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (editingId !== null) {
        saveEdit();
      } else {
        addItem();
      }
    } else if (e.key === 'Escape' && editingId !== null) {
      cancelEdit();
    }
  };

  const filteredItems = items.filter((item) => {
    if (filter === 'completed') return item.completed;
    if (filter === 'active') return !item.completed;
    return true;
  });

  return (
    <div className={styles.container}>
      <div className={styles.inputGroup}>
        <input
          type='text'
          className={styles.input}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder='Введите элемент списка'
        />
        <button type='button' className={styles.button} onClick={addItem}>
          Добавить
        </button>
      </div>

      <div className={styles.filterGroup}>
        <button
          type='button'
          className={`${styles.button} ${
            filter === 'all' ? '' : styles.buttonOutline
          }`}
          onClick={() => setFilter('all')}
        >
          Все
        </button>
        <button
          type='button'
          className={`${styles.button} ${
            filter === 'active' ? '' : styles.buttonOutline
          }`}
          onClick={() => setFilter('active')}
        >
          Активные
        </button>
        <button
          type='button'
          className={`${styles.button} ${
            filter === 'completed' ? '' : styles.buttonOutline
          }`}
          onClick={() => setFilter('completed')}
        >
          Завершенные
        </button>
      </div>

      <ul className={styles.list}>
        {filteredItems.map((item) => (
          <li key={item.id} className={styles.listItem}>
            {editingId === item.id ? (
              <div className={styles.editGroup}>
                <input
                  type='text'
                  className={styles.input}
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  autoFocus
                />
                <button
                  type='button'
                  className={`${styles.button} ${styles.buttonIcon}`}
                  onClick={saveEdit}
                >
                  ✓
                </button>
                <button
                  type='button'
                  className={`${styles.button} ${styles.buttonOutline} ${styles.buttonIcon}`}
                  onClick={cancelEdit}
                >
                  ✕
                </button>
              </div>
            ) : (
              <>
                <span
                  className={`${styles.itemText} ${
                    item.completed ? styles.completed : ''
                  }`}
                  onClick={() => toggleComplete(item.id)}
                >
                  {item.text}
                </span>
                <div className={styles.actionGroup}>
                  <button
                    type='button'
                    className={`${styles.button} ${styles.buttonOutline} ${styles.buttonIcon}`}
                    onClick={() => startEdit(item.id, item.text)}
                  >
                    ✎
                  </button>
                  <button
                    type='button'
                    className={`${styles.button} ${styles.buttonDestructive} ${styles.buttonIcon}`}
                    onClick={() => deleteItem(item.id)}
                  >
                    🗑
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>

      {items.length > 0 && (
        <div className={styles.stats}>
          {items.filter((item) => !item.completed).length} осталось,{' '}
          {items.filter((item) => item.completed).length} завершено
        </div>
      )}
    </div>
  );
};
