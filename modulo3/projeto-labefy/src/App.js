import React from "react";
import CriarPlayList from "./components/CriarPlayList";
import Login from "./components/Login";
import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  min-height: 100vh;
  background: black;
  background-image: url(https://wallpaperaccess.com/full/1124156.jpg);
  background-size: fit-content;
      
`;

export default class App extends React.Component {
  state = {
    tela: "login",
  };

  switchScreen = () => {
    switch (this.state.tela) {
      case "login":
        return <Login irParaPlaylists={this.irParaPlaylists} />;
      case "playlists":
        return <CriarPlayList irParaLogin={this.irParaLogin} />;
      default:
        return <p>erro</p>;
    }
  };

  irParaPlaylists = () => {
    this.setState({ tela: "playlists" });
  };

  irParaLogin = () => {
    this.setState({ tela: "login" });
  };

  render() {
    return <Main>{this.switchScreen()}</Main>;
  }
}