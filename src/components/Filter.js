import React from 'react';

const Filter = ({ onCategoryChange }) => {
  return (
    <select
      role="combobox"
      onChange={(e) => onCategoryChange(e.target.value)}
    >
      <option value="">All Categories</option>
      <option value="Dairy">Dairy</option>
      <option value="Produce">Produce</option>
      <option value="Dessert">Dessert</option>
    </select>
  );
};

export default Filter;
