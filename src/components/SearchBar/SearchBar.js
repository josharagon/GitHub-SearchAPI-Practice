import React from 'react';
import './SearchBar.css'
import searchGlass from '../../searchGlass.png'


const SearchBar = () => {

  return (
    <form>
      <input type='search' placeholder='Find a GitHub repository'></input>
      <button type='submit' onClick={(e) => {
        e.preventDefault()
        console.log('BRUH')}}><img src={searchGlass}></img></button>
    </form>
  )
}

export default SearchBar;