import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Layout from './components/layout/layout'; // Header, Aside
import HomePage from './components/views/home/home.page';
import GamesPage from './components/views/games/games.page';


function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Route exact path="/" component={ HomePage } />
      <Route exact path="/games" component={ GamesPage } />
    </BrowserRouter>
  );
}

export default App;
