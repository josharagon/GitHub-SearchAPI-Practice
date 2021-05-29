import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js';
import { getSearchResults } from '../../api.js'



const App = () => {
  const [searchValue, setSearchValue] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [searched, setSearched] = useState(false)
  if (!searched) {
    return (
      <>
        <h1>RepoFinder</h1>
        <SearchBar
          getSearchResults={getSearchResults}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          getSearchResults={getSearchResults}
          setSearchResults={setSearchResults}
          setSearched={setSearched}
        />
      </>
    )
  } else {
    let allResults = searchResults.map(result => {
      console.log(result)
    })
    return (
      <>
        <h1>Working</h1>
        {allResults}
      </>
    )
  }
}

export default App;