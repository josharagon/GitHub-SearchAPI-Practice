import React from 'react';
import './SearchBar.css';
import { withRouter, BrowserRouter } from 'react-router-dom';



const SearchBar = ({ searchValue, setSearchValue }) => {
  
  const searchRepositories = (e) => {
    if (searchValue) {
      e.preventDefault()
      document.location = searchValue
    }
  }

  return (
    <form>
      <div>
        <input type='search' required value={searchValue} placeholder='Find a GitHub repository'
          onChange={(e) => setSearchValue(e.target.value)}>
        </input>
        <img className='search-icon' src={`../assets/searchGlass.png`}></img>
      </div>
      <button className='search-button'
        type='submit'
        onClick={(event) => searchRepositories(event)}
      >
        Search
      </button>
    </form>
  )
}

export default SearchBar;