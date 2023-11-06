
import React from 'react'

const Header = ({ searchTerm, onSearchTermChange }) => {
  return (
    <div>
      <h1>Movie List</h1>
      <input 
        type='search' 
        value={searchTerm} 
        onChange={(e) => onSearchTermChange(e.target.value)} 
      />
      <button type='submit'>Submit</button>
    </div>
  )
}

export default Header;