import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';

import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsloadign] = useState(true);
  const [query, setQuery] = useState('');

  const queryName = (currentText) => setQuery(currentText);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      setItems(result.data);
      setIsloadign(false);
    };
    fetchItems();
  }, [query]);
  return (
    <div className='container'>
      <Header />
      <Search getQuery={queryName} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
