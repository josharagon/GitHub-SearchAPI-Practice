import React from 'react';
import './SingleRepoView.css';
import { Link } from 'react-router-dom';


const SingleRepoView = ({ repo }) => {

  return (

    <div className='single-repo-view'>
      <Link to='/'>
        <h1>RepoFind</h1>
      </Link>
      <div className='top-section'>
        <div className='user-info'>
          <img className='avatar' src={repo.owner.avatar_url}></img>
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