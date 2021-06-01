import './RepoCard.css';
import { Link } from 'react-router-dom';


const RepoCard = ({ repo, setCurrentRepo }) => {

  const changeRepo = () => {
    setCurrentRepo(repo)
  }

  return (
    <Link to={`/repository/${repo.id}`} onClick={() => changeRepo()}>
      <div className='repo-card'>
        <h4>{repo.name}</h4>
        <h4>owner: {repo.owner.login}</h4>
        <div className='forks-stars'>
          <p title={`starred count: ${repo.stargazers_count}`}>⭐️ : {repo.stargazers_count}</p>
          <p title={`forks: ${repo.forks}`}>🍴 : {repo.forks}</p>
        </div>
        <h4 className='description'>{repo.description}</h4>
        <div className='bottom-section'>
          {repo.language &&
            <div className='card-language'>
              <img src={`../assets/${repo.language}.png`} onError={(event) => event.target.style.display = 'none'} alt={repo.language}>
              </img>
              {repo.language}
            </div>
          }
          <p title='watchers'>👀 : {repo.watchers}</p>
        </div>
      </div>
    </Link>
  )
}

export default RepoCard;