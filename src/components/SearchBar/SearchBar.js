import React from 'react';
import './SearchBar.css'
import searchGlass from '../../img/searchGlass.png'


const SearchBar = ({ searchValue, setSearchValue, setSearchResults, getSearchResults, setSearched, setError }) => {

  return (
    <form>
      <input type='search' value={searchValue} placeholder='Find a GitHub repository'
        onChange={(e) => setSearchValue(e.target.value)}>
      </input>
      <button type='submit'
        onClick={async(e) => {
          e.preventDefault()
          setSearched(true);
          await getSearchResults(searchValue)
            .then((results) => setSearchResults(results.items))
            .catch((error) => setError(error))
        }}>
        <img src={searchGlass}></img>
      </button>
    </form>
  )
}

export default SearchBar;