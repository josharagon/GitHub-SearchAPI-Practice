import './CardContainer.css';
import RepoCard from '../RepoCard/RepoCard.js';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const CardContainer = ({ searchValue, setError, getSearchResults, setCurrentRepo }) => {
  let allResults;
  // const defaultSearch = [... searchResults]
  // let starSort = [... searchResults];
  // let sortedStars = starSort.sort((a,b) => b.stargazers_count-a.stargazers_count);
  const [searchResults, setSearchResults] = useState('')
  const [repoLanguages, setRepoLanguages] = useState([])

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

  const filterBy = async (sort) => {
    await getSearchResults(searchValue, '', sort)
      .then((results) => setSearchResults(results.items))
      .catch((error) => setError(error))
  }

  return (
    <>
      <Link to='/'>
        <h1>RepoFind</h1>
      </Link>
      <form onChange={(e) => filterBy(e.target.value)}>
        <label for="filter">Filter By:</label>
        <select name="filter" id="filter">
          <option defaultValue value="">Best Match</option>
          <option value="stars">Starred Count</option>
        </select>
      </form>
      <div className='card-container'>
        {!allResults && <h1 className='no-result'>Loading</h1>}
        {allResults}
      </div>
    </>
  )
}

export default CardContainer;