import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js';
import { getSearchResults } from '../../api.js';
import CardContainer from '../CardContainer/CardContainer';
import SingleRepoView from '../SingleRepoView/SingleRepoView.js'
import { Route, Switch } from 'react-router-dom'




const App = () => {
  const [searchValue, setSearchValue] = useState('')

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

        <Route exact path='/:query' render={( { match }) => {
          return (
            <>
              <CardContainer searchValue={match.params.query} getSearchResults={getSearchResults}/>
            </>
          )
        }} />

        {/* <h1>Loading...</h1>


    <CardContainer searchResults={searchResults} setSearchResults={setSearchResults} /> */}

        <Route exact path='/:id' render={({ match }) =>
          <SingleRepoView id={match.params.id} repo={match.params} />
        } />
      </Switch>
    </>
  )
}

export default App;