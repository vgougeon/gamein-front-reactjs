import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./components/layout/layout"; // Header, Aside
import HomePage from "./components/views/home/home.page";
import GamesPage from "./components/views/games/games.page";
import UserProvider from "./services/auth/userProvider";

const Container = () => (
  <BrowserRouter>
    <Layout>
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/games" component={GamesPage}></Route>
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
