import React from 'react';
import './SingleRepoView.css';
import { Link, useHistory } from 'react-router-dom';


const SingleRepoView = ({ repo }) => {
  let history = useHistory();

  return (
    <div className='single-repo-view'>
      <Link to='/'>
        <h1 className='header'>RepoFinder</h1>
      </Link>
      <h4 className='go-back' onClick={() => history.goBack()}>Go Back ←</h4>
      <div className='middle-section'>
        <div className='left-section'>
          <img className='avatar' src={repo.owner.avatar_url} alt={`${repo.owner.login} avatar`}></img>
          <h2><span className='title'>creator: </span>{repo.owner.login}</h2>
          <h3><span className='title'>🍴fork Count</span>: {repo.forks}</h3>
          <h3><span className='title'>👀 Watch Count:</span> {repo.watchers}</h3>
          <h3><span className='title'>⭐️ Starred Count:</span> {repo.stargazers_count}</h3>
          <div className='language-sr'>
            <h3>{repo.language}</h3>
            <img className='lang-img' src={`../assets/${repo.language}.png`} onError={(event) => event.target.style.display = 'none'} alt={repo.language}>
            </img>
          </div>
          <h3><span className='title'>Open Issues: </span>{repo.open_issues}</h3>
        </div>
        <div className='right-section'>
          <h2><span className='title'>repo:</span> <a target='_blank' rel='noopener noreferrer' href={`http://github.com/${repo.full_name}`}>{repo.full_name}</a></h2>
          <p className='description-sr'><span className='title'>Description:</span> {repo.description}</p>
        </div>
      </div>
    </div>
  )
}

export default SingleRepoView;