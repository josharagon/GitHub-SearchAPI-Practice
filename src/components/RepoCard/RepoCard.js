import './RepoCard.css'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


const RepoCard = ({ repo, setCurrentRepo }) => {

  return (
    <Link to={`/repository/${repo.id}`} onClick={
      useEffect(() => {
        setCurrentRepo(repo)
      })}>
      <div className='repo-card'>
        <h4>{repo.name}</h4>
        <div className='forks-stars'>
          <p title='star count'>⭐️ : {repo.stargazers_count}</p>
          <p title='forks'>🍴 : {repo.forks}</p>
        </div>
        <h4 className='description'>{repo.description}</h4>
        <div className='bottom-section'>
          {repo.language && <img src={`../assets/${repo.language}.png`}></img>}
          <p title='watchers'>👀 : {repo.watchers}</p>
        </div>
      </div>
    </Link>
  )
}

export default RepoCard;