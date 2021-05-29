import './CardContainer.css';
import RepoCard from '../RepoCard/RepoCard.js'


const CardContainer = ({ searchResults }) => {
  let allResults = searchResults.map(result => {
    return <RepoCard repo={result} key={result.full_name} />
  })
  return (
    <div className='card-container'>
      {!allResults.length && <h1>Loading</h1>}
      {allResults}
    </div>
  )
}

export default CardContainer;