import './CardContainer.css';
import RepoCard from '../RepoCard/RepoCard.js';
import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

const CardContainer = ({ searchValue, setError, getSearchResults, setCurrentRepo }) => {
  let allResults;
  let languageOptions;
  const [searchResults, setSearchResults] = useState('')
  const [repoLanguages, setRepoLanguages] = useState([])
  const [filterOrder, setFilterOrder] = useState('')
  const [filterLanguage, setFilterLanguage] = useState('')
  const [locked, setLocked] = useState(true)
  const [noResults, setNoResults] = useState(false);

  const handleResultFetch = useCallback(async() => {
      await getSearchResults(searchValue, filterLanguage, filterOrder)
      .then((results) => {
        if(results.items.length > 0){
        setSearchResults(results.items)
      } else {
        setNoResults((true))
      }
      })
      .catch((error) => setError(error))
      // setNoResults((searchResults.length > 0) ? false : true)
      console.log(searchResults)
  }, [filterLanguage, filterOrder, searchResults, getSearchResults, searchValue, setError])

  const filterBy = (e) => {
    e.preventDefault()
    if (!locked) {
      handleResultFetch();
      setLocked(true);
    }
  }

  const handelNoResults = () => {
    if (noResults === true) {
      return (
        <h1>No Results Found </h1>
      )
    } else {
      return
    }
  }

  useEffect(() => {
    if (!searchResults) {
      handleResultFetch();
    }
  }, [handleResultFetch, searchResults])

  //returns all repoCards & all returned languages in an array
  if (searchResults) {
    allResults = searchResults.map(result => {
      if (!repoLanguages.includes(result.language) && result.language !== null) {
        setRepoLanguages([...repoLanguages, result.language])
      }
      return <RepoCard repo={result} key={result.full_name} setCurrentRepo={setCurrentRepo} />
    })
  }

//return language options
  languageOptions = repoLanguages.map(language => {
    return (
      <option key={language} value={language}>{language}</option>
    )
  })

  return (
    <>
      <Link to='/'>
        <h1 className="header">RepoFinder</h1>
      </Link>
      <div className="filter-row">
        <div className="filter-forms">
          <form className="dropdown" value={filterOrder} onChange={(e) => {
            setFilterOrder(e.target.value)
            setLocked(false)
          }}>
            <label>Filter Order:</label>
            <select name="filter" id="filter">
              <option defaultValue value="">Best Match</option>
              <option value="stars">Starred Count</option>
              <option value="forks">Fork Count</option>
            </select>
          </form>
          <form className="dropdown" value={filterLanguage} onChange={(e) => {
            setFilterLanguage(e.target.value)
            setLocked(false)
          }}>
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
        {!allResults && !noResults &&<h1 className='no-result'>Loading</h1>}
        {allResults}
        {handelNoResults()}
      </div>
    </>
  )
}

export default CardContainer;