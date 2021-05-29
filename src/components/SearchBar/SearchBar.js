import React from 'react';
import './SearchBar.css'
import searchGlass from '../../img/searchGlass.png'


const SearchBar = ({ searchValue, setSearchValue, setSearchResults, getSearchResults, setSearched }) => {

  return (
    <form>
      <input type='search' value={searchValue} placeholder='Find a GitHub repository'
        onChange={(e) => setSearchValue(e.target.value)}>
      </input>
      <button type='submit'
        onClick={(e) => {
          e.preventDefault()
          getSearchResults(searchValue)
            .then((results) => setSearchResults(results.items))
          setSearched(true);
        }}>
        <img src={searchGlass}></img>
      </button>
    </form>
  )
}

export default SearchBar;