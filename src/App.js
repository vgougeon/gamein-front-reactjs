import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./components/layout/layout"; // Header, Aside
import HomePage from "./components/views/home/home.page";
import GamesPage from "./components/views/games/games.page";
import UserPage from "./components/views/user/user.page";
import GamePage from "./components/views/game/game.page";
import UserProvider from "./services/auth/userProvider";
import './i18n';

const Container = () => (
    <BrowserRouter>
      <Layout>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/games" component={GamesPage} />
        <Route exact path="/user/:username/:menu?" component={UserPage} />
        <Route exact path="/game/:id/:menu?" component={GamePage} />
      </Layout>
    </BrowserRouter>
);

function App() {
  return (
    <UserProvider>
      <Container />
    </UserProvider>
  );
}

export default App;
