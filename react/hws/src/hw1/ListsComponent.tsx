import React from 'react';

export const ListsComponent: React.FC = () => {
  return (
    <div>
      <h1>Ordered List</h1>
      <ol>
        <li>Item 1</li>
        <li>Item 2</li>
      </ol>
      <h1>Unordered List</h1>
      <ul>
        <li>Item A</li>
        <li>Item B</li>
      </ul>
    </div>
  );
};
