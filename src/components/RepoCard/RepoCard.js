import './RepoCard.css'

const RepoCard = ({ repo }) => {

  let path = `../assets/${repo.language}.png`
  return (
    <div className='repo-card'>
      <h4>{repo.name}</h4>
      <div className='forks-stars'>
        <p title='star count'>⭐️ : {repo.stargazers_count}</p>
        <p title='forks'>🍴 : {repo.forks}</p>
      </div>
      <h4 className='description'>{repo.description}</h4>
      <div className='bottom-section'>
        <img src={`../assets/${repo.language}.png`}></img>
        <p title='watchers'>👀 : {repo.watchers}</p>
      </div>
    </div>
  )
}

export default RepoCard;