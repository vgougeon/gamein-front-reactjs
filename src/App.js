import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./components/layout/layout"; // Header, Aside
import HomePage from "./components/views/home/home.page";
import GamesPage from "./components/views/games/games.page";
import UserPage from "./components/views/user/user.page";
import GamePage from "./components/views/game/game.page";
import PartyPage from "./components/views/party/party.page";

import { Provider } from 'react-redux';
import store from './store';

import 'flag-icon-css/css/flag-icon.min.css';

const Container = () => (
    <BrowserRouter> 
      <Layout>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/games" component={GamesPage} />
        <Route exact path="/user/:username/:menu?" component={UserPage} />
        <Route exact path="/game/:id/:menu?" component={GamePage} />
        <Route exact path="/party/:game?" component={PartyPage} />
      </Layout>
    </BrowserRouter>
);

function App() {
  return (
    <Provider store={ store }>
      <Container />
    </Provider>
  );
}

export default App;
