import React from "react";
import axios from "axios";
import styled from "styled-components";

const Principal = styled.div`
  display: flex;
  margin: auto;
  padding: auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  flex-direction: column;
  box-shadow: inset 0 0 1em #00b4d8, 0 0 0.5em cyan;
  width: 25vw;
  height: auto;
`;

const Title = styled.h2`
  padding: 1rem;
  background: black;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-size: 5.0vh;
  margin: 0 auto;
  display: table;
  background: -webkit-linear-gradient(#00b4d8, #90e0ef, #ade8f4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: linear;  color: #90e0ef;  
`;

const SubTitle = styled.h2`
  padding: 1rem;
  background: black;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-size: 4.0vh;
  margin: 0 auto;
  display: table;
  background: -webkit-linear-gradient(#ade8f4, #00b4d8, #90e0ef);
  -webkit-background-clip: text;
  -webkit-text-fill-color: linear;  color: #90e0ef;  
`;

const InputAdd = styled.input`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  overflow: hidden;
  transition: 2s;

    :hover{
      background:#00b4d8;
      box-shadow: 0 0 10px #00b4d8, 0 0 15px #ade8f4, 0 0 30px #00b4d8;
      transition-delay: 0.2s;
    }
    :focus{
      background: cyan;
      outline: 0;
    }
`;

const ButtonAdd = styled.button`
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

const Audio = styled.audio`
  margin: 0 0;
  text-align: center;
  cursor: pointer;
  height: 4vh;
`;

const ButtonVoltar = styled.button`
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
  margin: auto;;
`;

const InputDiv = styled.div`
  border: solid cyan thin;
  border-image: linear-gradient(75deg, #00b4d8, #ade8f4, #00b4d8) 0.5;
  display: flex;
  place-content: center;
  padding: 2vh 0;
  font-size: 3vh;
  background: -webkit-linear-gradient(#00b4d8, #90e0ef, #ade8f4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: gradient;  color: #90e0ef;
  width: 23vw;
  overflow: auto;
  transition: 2s;

    :hover{
      background:#00b4d8;
      box-shadow: 0 0 10px #00b4d8, 0 0 15px #ade8f4, 0 0 30px #00b4d8;
      transition-delay: 0.2s;
    };

    &::-webkit-scrollbar { 
    display: none
    };

    span{
      color: turquoise;
    };
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
  margin: auto;
`;

export const URL =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

export const headers = {
  headers: {
    Authorization: "lucas-aversi-guimaraes",
  },
};

export default class Playlists extends React.Component {
  state = {
    exibir: [],
    name: "",
    artist: "",
    url: "",
  };

  nomeMusica = (event) => {
    this.setState({ name: event.target.value });
  };
  artistaMusica = (event) => {
    this.setState({ artist: event.target.value });
  };
  urlMusica = (event) => {
    this.setState({ url: event.target.value });
  };

  getTracks = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.selectPlaylist.id}/tracks`,
        headers
      )
      .then((res) => {
        this.setState({ exibir: res.data.result.tracks });
      })
      .catch((err) => {});
  };

  addTrackToPlaylist = () => {
    const body = {
      name: this.state.name,
      artist: this.state.artist,
      url: this.state.url,
    };

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.selectPlaylist.id}/tracks`,
        body,
        headers
      )
      .then((res) => {
        this.setState({ name: "", artist: "", url: "" });
      })
      .catch((err) => {
        console.log(err);
      });
  };
 
  removeTrackFromPlaylist = (trackID) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.selectPlaylist.id}/tracks/${trackID}`,
        headers
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err.response));
  };


  componentDidMount() {
    this.getTracks();
  }
  componentDidUpdate() {
    this.getTracks();
  }

  render() {
    const trackRender = this.state.exibir.map((track) => {
      return (
        <InputDiv>
          <div key={track.id}>
            <div><span>{track.artist}</span> - {track.name}</div>
            <Audio controls>
            <source src={track.url} type={'audio/mp3'}/>
            </Audio>
            <ButtonDelet onClick={() => {this.removeTrackFromPlaylist(track.id)}}>
            Excluir Track
          </ButtonDelet>
          </div>
        </InputDiv>
      );
    });
    return (
      <Principal>
        <Title>Deep Ocean</Title>
        <SubTitle>{this.props.selectPlaylist.name}</SubTitle>
        <InputAdd
          type="text"
          placeholder="música"
          value={this.state.name}
          onChange={this.nomeMusica}
        />
        <br />
        <InputAdd
          type="text"
          placeholder="artista/banda"
          value={this.state.artist}
          onChange={this.artistaMusica}
        />
        <br />

        <InputAdd
          type="text"
          placeholder="link"
          value={this.state.url}
          onChange={this.urlMusica}
        />
        <br />

        <ButtonAdd onClick={this.addTrackToPlaylist}>Adicionar</ButtonAdd>
        <br />
        <br />

        {trackRender}
        <br />
        <br />

        <ButtonVoltar onClick={this.props.renderPagina}>Voltar</ButtonVoltar>
        <br />
        <br />

      </Principal>
    );
  }
}