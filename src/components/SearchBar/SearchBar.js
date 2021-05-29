import React from 'react';
import './SearchBar.css'


const SearchBar = ({ searchValue, setSearchValue, setSearchResults, getSearchResults, setSearched, setError }) => {

  return (
    <form>
      <input type='search' value={searchValue} placeholder='Find a GitHub repository'
        onChange={(e) => setSearchValue(e.target.value)}>
      </input>
      <button className='search-icon' type='submit'
        onClick={async(e) => {
          e.preventDefault()
          setSearched(true);
          await getSearchResults(searchValue)
            .then((results) => setSearchResults(results.items))
            .catch((error) => setError(error))
        }}>
        <img src={`../assets/searchGlass.png`}></img>
      </button>
    </form>
  )
}

export default SearchBar;