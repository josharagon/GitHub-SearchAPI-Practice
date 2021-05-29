import './CardContainer.css';
import RepoCard from '../RepoCard/RepoCard.js';


const CardContainer = ({ searchResults }) => {
  let allResults;
  if (searchResults.length) {
    allResults = searchResults.map(result => {
      return <RepoCard repo={result} key={result.full_name} />
    })
  } else {
    allResults = false;
  }
  // searchResults.sort((a,b) => b.stargazers_count-a.stargazers_count)
  return (
    <>
      <h1 onClick={() => window.location.reload()}>RepoFind</h1>
      <div className='card-container'>
        {typeof allResults === "boolean" && <h1 className='no-result'>No search results</h1>}
        {allResults}
      </div>
    </>
  )
}

export default CardContainer;