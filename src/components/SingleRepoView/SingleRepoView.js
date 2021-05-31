import React from 'react';
import './SingleRepoView.css';
import { Link, useHistory } from 'react-router-dom';


const SingleRepoView = ({ repo }) => {
  let history = useHistory();

  return (
    <div className='single-repo-view'>
      <Link to='/'>
        <h1 className="header">RepoFinder</h1>
      </Link>
      <h4 className="go-back" onClick={() => history.goBack()}>Go Back ←</h4>
      <div className='top-section'>
        <div className='user-info'>
          <img className='avatar' src={repo.owner.avatar_url} alt={`${repo.owner.login} avatar`}></img>
          <h2><span className='title'>creator: </span>{repo.owner.login}</h2>
        </div>
        <h2><span className='title'>repo:</span> {repo.full_name}</h2>
      </div>
      <div className='middle-section'>
        <div className='repo-stats'>
          <h3><span className='title'>🍴fork count</span>: {repo.forks}</h3>
          <h3><span className='title'>👀 Watch Count:</span> {repo.watchers}</h3>
          <h3><span className='title'>⭐️ Starred Count:</span> {repo.stargazers_count}</h3>
        </div>
        <div className='language-issues'>
          <h3>{repo.language}</h3>
          <h3><span className='title'>Open Issues: </span>{repo.open_issues}</h3>
        </div>
      </div>
      <p>Description: {repo.description}</p>
    </div>
  )
}

export default SingleRepoView;