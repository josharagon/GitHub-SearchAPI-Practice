import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js';
import { getSearchResults } from '../../api.js';
import CardContainer from '../CardContainer/CardContainer';



const App = () => {
  const [searchValue, setSearchValue] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [searched, setSearched] = useState(false)
  if (!searched) {
    return (
      <>
        <h1>RepoFinder</h1>
        <SearchBar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          getSearchResults={getSearchResults}
          setSearchResults={setSearchResults}
          setSearched={setSearched}
        />
      </>
    )
  } else {
    return (
      <CardContainer searchResults={searchResults}/>
    )
  }
}

export default App;