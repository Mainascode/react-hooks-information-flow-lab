import React, { useState } from 'react';

const Item = ({ name, category }) => {
  // State to track if the item is in the cart
  const [isInCart, setIsInCart] = useState(false);

  // Handle the click event to toggle the 'in-cart' class
  const handleAddToCart = () => {
    setIsInCart((prevState) => !prevState); // Toggle the in-cart state
  };

  return (
    <li className={isInCart ? 'in-cart' : ''}>
      <span>{name} - {category}</span>
      <button onClick={handleAddToCart}>
        {isInCart ? 'Remove from Cart' : 'Add to Cart'}
      </button>
    </li>
  );
};

export default Item;
