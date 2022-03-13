import React from "react";
import styled from "styled-components";

export const Divplay = styled.div`
  width: 100vw;
  display: flex;
  justify-self: center;
  align-self: center;
  flex-direction: column; 
`;

export const Divplay2 = styled.div`
  display: flex;
  margin: 0 auto;
  justify-items: center;
  text-align: center;
  flex-direction: column;
`;

export const Logo = styled.img`
  width: 80px;
  height: 80px;
  justify-content: center;
  margin: 0 auto;
`;

export const Nome = styled.h1`
  padding: 1rem;
  background: black;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-size: 7vh;
  margin: 0 auto;
  background: -webkit-linear-gradient(#00b4d8, #90e0ef, #ade8f4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Slogan = styled.h2`
  padding: 1rem;
  background: black;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-size: 5vh;
  margin: 0 auto;
  background: -webkit-linear-gradient(#00b4d8, #90e0ef, #ade8f4);
    -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Button = styled.button`
  width: 15%;
  border-radius: 4px;
  background-color: #00b4d8;
  color: white;
  font-size: large;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export default class Login extends React.Component {
  render() {
    return (
      <Divplay>
        <Divplay2>
          <Nome>Deep Ocean</Nome>
          <br></br>
          <Slogan>"Mergulhe de cabeça na música"</Slogan>
          <br></br>
          <br></br>
          <br></br>
        </Divplay2>
        <Button onClick={this.props.irParaPlaylists}>Criar Playlist</Button>
      </Divplay>
    );
  }
}