import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js';
import { getSearchResults } from '../../api.js'



const App = () => {
  const [searchValue, setSearchValue] = useState('')
  const [searchResults, setsearchResults] = useState([])
  return (
    <>
      <h1>RepoFinder</h1>
      <SearchBar
        getSearchResults={getSearchResults}
        searchValue={searchValue} 
        setSearchValue={setSearchValue}
        getSearchResults={getSearchResults}
        setsearchResults={setsearchResults}
      />
    </>
  )
}

export default App;