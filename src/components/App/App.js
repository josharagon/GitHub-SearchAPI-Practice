import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js';
import { getSearchResults } from '../../api.js';
import CardContainer from '../CardContainer/CardContainer';



const App = () => {
  const [searchValue, setSearchValue] = useState('')
  const [searchResults, setSearchResults] = useState(null)
  const [searched, setSearched] = useState(false)
  const [error, setError] = useState('')
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
  } else if (searchResults === null) {
    return (
    <h1>Loading...</h1>
    )
  } else if(searchResults){
    return (
      <CardContainer searchResults={searchResults}/>
    )
  }
}

export default App;