import './CardContainer.css';
import RepoCard from '../RepoCard/RepoCard.js';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const CardContainer = ( { searchValue, setError, getSearchResults }) => {
  let allResults;
  // const defaultSearch = [... searchResults]
  // let starSort = [... searchResults];
  // let sortedStars = starSort.sort((a,b) => b.stargazers_count-a.stargazers_count);
  const [searchResults, setSearchResults] = useState('')
  useEffect(async() => { 
    if(!searchResults){
      await getSearchResults(searchValue)
        .then((results) => setSearchResults(results.items))
        .catch((error) => setError(error))}
  })

  if (searchResults) {
    allResults = searchResults.map(result => {
      return <RepoCard repo={result} key={result.full_name} />
    })
  }
  return (
    <>
      <Link to='/'>
        <h1>RepoFind</h1>
      </Link>
      <div className='card-container'>
        {!allResults && <h1 className='no-result'>No search results</h1>}
        {allResults}
      </div>
    </>
  )
}

export default CardContainer;