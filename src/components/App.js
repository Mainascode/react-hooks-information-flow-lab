import React, { useState } from 'react';
import Header from './Header';
import Filter from './Filter';
import Item from './Item';

const testData = [
  { id: 1, name: "Yogurt", category: "Dairy" },
  { id: 2, name: "Pomegranate", category: "Produce" },
  { id: 3, name: "Lettuce", category: "Produce" },
  { id: 4, name: "String Cheese", category: "Dairy" },
  { id: 5, name: "Cookies", category: "Dessert" },
];

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  // Toggle dark/light mode
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Handle category change from Filter component
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Filter items based on selected category
  const filteredItems = selectedCategory
    ? testData.filter(item => item.category === selectedCategory)
    : testData;

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <Header onDarkModeClick={toggleMode} />
      <Filter onCategoryChange={handleCategoryChange} />
      
      <ul className="Items">
        {filteredItems.map(item => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
};

export default App;

