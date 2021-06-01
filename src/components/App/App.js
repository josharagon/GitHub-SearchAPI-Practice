import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js';
import { getSearchResults } from '../../api.js';
import CardContainer from '../CardContainer/CardContainer';
import SingleRepoView from '../SingleRepoView/SingleRepoView.js';
import { Route, Switch } from 'react-router-dom';




const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [currentRepo, setCurrentRepo] = useState({});
  const [error, setError] = useState('');

  return (
    <>
      <Switch>
        <Route exact path='/' render={() => {
          return (
            <>
              <h1>RepoFinder</h1>
              <SearchBar
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />
            </>
          )
        }} />
        <Route exact path='/:query' render={({ match }) => {
          return (
            <>
              <CardContainer searchValue={match.params.query}
                getSearchResults={getSearchResults}
                setCurrentRepo={setCurrentRepo}
                error={error}
                setError={setError}
              />
            </>
          )
        }} />
        <Route exact path='/repository/:id' render={({ match }) =>
          <SingleRepoView id={match.params.id} repo={currentRepo} />
        } />
      </Switch>
    </>
  )
}

export default App;