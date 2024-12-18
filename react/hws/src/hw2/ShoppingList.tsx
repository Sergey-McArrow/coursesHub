type TShoppingListProps = {
  items: string[];
};

export const ShoppingList: React.FC<TShoppingListProps> = ({ items }) => {
  return (
    <ul>
      {items.length > 0 ? (
        items.map((item, index) => <li key={index}>{item}</li>)
      ) : (
        <li>Список покупок пуст</li>
      )}
    </ul>
  );
};
