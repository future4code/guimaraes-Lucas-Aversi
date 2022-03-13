import React from "react";
import axios from "axios";
import Playlists from "./Playlists";
import styled from "styled-components";
import { Divplay } from "./Login";

const Title = styled.h1`
  background: -webkit-linear-gradient(#00b4d8, #90e0ef, #ade8f4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: linear;  color: #90e0ef;
`

const DivGeral = styled.div`
  display: flex;
  margin: auto;
  justify-items: center;
  text-align: center;
  font-weight: bold;
  flex-direction: column;
  box-shadow: inset 0 0 1em #00b4d8, 0 0 0.5em cyan;
  width: 30vw;
  height: auto;
  
  
`;

const DivPlaylist = styled.div`
  border: solid cyan thin;
  border-image: linear-gradient(75deg, #00b4d8, #ade8f4, #00b4d8) 0.5;
  width: 26vw;
  margin: auto;
  overflow: hidden;
  transition: 2s;

    :hover{
      background:#00b4d8;
      box-shadow: 0 0 10px #00b4d8, 0 0 15px #ade8f4, 0 0 30px #00b4d8;
      transition-delay: 0.2s;
    };

    
    
`;


const InputCriar = styled.input`
  display: flex;
  flex-direction: column;
  margin: auto;
  overflow: hidden;
  transition: 2s;

    :hover{
      background:#00b4d8;
      box-shadow: 0 0 10px #00b4d8, 0 0 15px #ade8f4, 0 0 30px #00b4d8;
      transition-delay: 0.2s;
    };

  :focus{
    background: cyan;
    outline: 0;
  };
`;

const H2 = styled.h2`
  padding: 1rem;
  background: black;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-size: 5.2vh;
  margin: 0 auto;
  background: -webkit-linear-gradient(#00b4d8, #90e0ef, #ade8f4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  `;

const ButtonDelet = styled.button`
  width: 10vh;
  border-radius: 1px;
  background: -webkit-linear-gradient(#00b4d8, #90e0ef, #ade8f4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: gradient;  color: #90e0ef;
  box-shadow: inset 0 0 0.10em #00b4d8, 0 0 0.5em cyan;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto ;
`;

const ButtonCreate = styled.button`
  width: 10vh;
  border-radius: 1px;
  background: -webkit-linear-gradient(#00b4d8, #90e0ef, #ade8f4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: gradient;  color: #90e0ef;
  box-shadow: inset 0 0 0.10em #00b4d8, 0 0 0.5em cyan;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const ButtonDeslog = styled.button`
  width: 29vw;
  background: -webkit-linear-gradient(#00b4d8, #90e0ef, #ade8f4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: gradient;  color: #90e0ef;
  box-shadow: inset 0 0 0.10em #00b4d8, 0 0 0.5em cyan;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  border: none;
    
    :hover{
      background: cyan;
      color: black;    
  };
`;
const DivCreate = styled.div`
  padding: 1rem;
  background: black;
  display: flex;
  flex-direction: column;
  background: -webkit-linear-gradient(#00b4d8, #90e0ef, #ade8f4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: gradient;  color: #90e0ef;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0 auto;
  
`;

export const URL =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

export const headers = {
  headers: {
    Authorization: "lucas-aversi-guimaraes",
  },
};

export default class CriarPlayList extends React.Component {
  state = {
    nome: "",
    playlists: [],
    tracks: false,
    selectPlaylist: "",
  };

  rendertracks = (mostraPlaylist) => {
    this.setState({ tracks: true, selectPlaylist: mostraPlaylist });
  };

  renderPagina = () => {
    this.setState({ tracks: false });
  };

  componentDidMount() {
    this.getPlaylist();
  }

  componentDidUpdate() {
    this.getPlaylist();
  }

  createPlaylist = () => {
    const body = {
      name: this.state.nome,
    };
    axios
      .post(URL, body, headers)
      .then((res) => {
        alert("Sua playlist foi criada!");
        this.setState({ nome: "" });
      })
      .catch((err) => {
        alert("Houve um erro, tente outro nome");
      });
  };

  getNomePlaylist = (e) => {
    this.setState({ nome: e.target.value });
  };

  getPlaylist = () => {
    axios
      .get(URL, headers)
      .then((res) => {
        this.setState({ playlists: res.data.result.list });
      })
      .catch((err) => {
        console.log("erro!");
      });
  };

  deletarPlaylist = (idPlaylist) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}`,
        headers
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err.response));
  };

  render() {
    if (this.state.tracks) {
      return (
        <Playlists
          renderPagina={this.renderPagina}
          selectPlaylist={this.state.selectPlaylist}
        />
      );
    }  

    const playlistsRenderizadas = this.state.playlists.map((playlist) => {
      return (
        <Divplay>
          <DivPlaylist>
          <DivCreate
            key={playlist.id}
            onClick={() => this.rendertracks(playlist)}>
          {playlist.name}
          <br />
          </DivCreate>
          <ButtonDelet onClick={() => this.deletarPlaylist(playlist.id)}>deletar
          </ButtonDelet>
          <br />
          </DivPlaylist>      
        </Divplay>
      );
    });

    return (
      <DivGeral>
        <ButtonDeslog onClick={this.props.irParaLogin}>Retornar</ButtonDeslog>
        <H2>Deep Ocean</H2>
        <InputCriar
          type="text"
          placeholder="Nome da Playlist"
          value={this.state.nome}
          onChange={this.getNomePlaylist}
        />
        <br />
        <ButtonCreate onClick={this.createPlaylist}>criar</ButtonCreate>
        <br />
        <br />
        <Title>Minhas Playlists</Title>
        {playlistsRenderizadas}
        <br />
      </DivGeral>
    );
  }
}