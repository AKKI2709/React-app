import React, { useState } from 'react';

const ShoppingCart = () => {
  const [items, setItems] = useState([]);
  const [itemInput, setItemInput] = useState('');

  const addItem = () => {
    if (itemInput.trim() !== '') {
      setItems([...items, itemInput]);
      setItemInput('');
    }
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <div>
        <input
          type="text"
          value={itemInput}
          onChange={(e) => setItemInput(e.target.value)}
        />
        <button onClick={addItem}>Add Item</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
