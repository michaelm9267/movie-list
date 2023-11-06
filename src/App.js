import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header'; 
import MovieList from './Components/MovieList'; 
function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  return (
    <div className="App">
      <Header searchTerm={searchTerm} onSearchTermChange={handleSearchTermChange} />
      <MovieList searchTerm={searchTerm} />
    </div>
  );
}

export default App;
