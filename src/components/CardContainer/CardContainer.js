import './CardContainer.css';
import RepoCard from '../RepoCard/RepoCard.js';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const CardContainer = ({ searchValue, setError, getSearchResults, setCurrentRepo }) => {
  let allResults;
  let languageOptions;
  const [searchResults, setSearchResults] = useState('')
  const [repoLanguages, setRepoLanguages] = useState([])
  const [filterOrder, setFilterOrder] = useState('')
  const [filterLanguage, setFilterLanguage] = useState('')
  const [locked, setLocked] = useState(true)

  useEffect(async () => {
    if (!searchResults) {
      await getSearchResults(searchValue)
        .then((results) => setSearchResults(results.items))
        .catch((error) => setError(error))
    }
  })

  if (searchResults) {
    allResults = searchResults.map(result => {
      if (!repoLanguages.includes(result.language) && result.language !== null) {
        setRepoLanguages([...repoLanguages, result.language])
      }
      return <RepoCard repo={result} key={result.full_name} setCurrentRepo={setCurrentRepo} />
    })
  }

  languageOptions = repoLanguages.map(language => {
    return (
      <option key={language} value={language}>{language}</option>
    )
  })

  const filterBy = (e, lang, sort) => {
    e.preventDefault()
    if(!locked) {
    getSearchResults(searchValue, lang, sort)
      .then((results) => setSearchResults(results.items))
      .catch((error) => setError(error))
      setLocked(true);
    }
  }




  return (
    <>
      <Link to='/'>
        <h1 className="header">RepoFinder</h1>
      </Link>
      <div className="filter-row">
        <div className="filter-forms">
          <form className="dropdown" value={filterOrder} onChange={(e) =>{ 
            setFilterOrder(e.target.value)
            setLocked(false)}}>
            <label>Filter Order:</label>
            <select name="filter" id="filter">
              <option defaultValue value="">Best Match</option>
              <option value="stars">Starred Count</option>
            </select>
          </form>
          <form className="dropdown" value={filterLanguage} onChange={(e) => {
            setFilterLanguage(e.target.value) 
            setLocked(false)}}>
            <label>Language:</label>
            <select name="language" id="language">
              <option defaultValue value="">All</option>
              {languageOptions}
            </select>
          </form>
        </div>
        <button className='rf-button' onClick={(e) => filterBy(e, filterLanguage, filterOrder)}>Filter</button>
      </div>
      <div className='card-container'>
        {!allResults && <h1 className='no-result'>Loading</h1>}
        {allResults}
      </div>
    </>
  )
}

export default CardContainer;