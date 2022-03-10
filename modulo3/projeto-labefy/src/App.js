import React from 'react'
import axios from 'axios'
import { ThemeProvider } from 'styled-components'

export class App extends React.Component {

  state = {
    playlists: [],
    inputCriarPlaylist: '',
    tracks:[]
  }

  componentDidMount(){
    this.getPlaylists()
    this.getTracks()
  }
  
  //funções API

  getPlaylists = () =>{
    axios
    .get(
      'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
      {
        headers: {
          Authorization: 'lucas-aversi-guimaraes'
        }
      }
    )
    .then((res) => {
      this.setState({playlists: res.data.result.list})
      
/*       console.log(res.data.result.list)
 */    })
    .catch((err)=> console.log(err))
  }

  getTracks = (tracks) =>{
    axios
    .get(
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/playlistId/${tracks}`,
      {
        headers: {
          Authorization: 'lucas-aversi-guimaraes'
        }
      }
    )
    .then((res) => {
      this.setState({tracks: res.data.result.tracks})
      console.log('tracks', res.data.result.tracks)
    })
    .catch((err)=> console.log(err))
  }

  criaPlaylist = () => {
    const body = {
      name:this.state.inputCriarPlaylist      
    }
    
    axios
    .post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",body,{
      headers:{
        Authorization: 'lucas-aversi-guimaraes'
      }
    }
    )
    .then(res =>{
      alert("Playlist criada com sucesso")
      this.getPlaylists()
      this.setState({inputCriarPlaylist: ''})})
    
      .catch((err) =>console.log(err.response))
  }

  alteraInputCriarPlaylist = (e) => {
    this.setState({inputCriarPlaylist: e.target.value})
  }
 
  deletarPlaylist = (playlistId) =>{
    axios
      .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`,{
        headers:{
          Authorization: 'lucas-aversi-guimaraes'
        }
      }
      )
      .then((res) =>{
        alert("Playlist excluída com sucesso")
        this.getPlaylists()})
      
        .catch((err) =>console.log(err.response))
    }

  
  render() {

    const playlistsRenderizadas = this.state.playlists.map(playlists =>{
      return <div><p key={playlists.id}>{playlists.name}</p>
                  <button onClick={()=>this.deletarPlaylist(playlists.id)}>Excluir Playlist</button>
              </div>
    })
    console.log('aaaa',this.state)              


    const tracksRenderizadas = this.state.tracks.map(tracks =>{
      return <div><p key={tracks.id}>{tracks.name}</p>
{                   <button onClick={()=>this.deletarPlaylist(tracks.id)}>Excluir Playlist</button>
 }              </div>              
    })
        
    return (
      <div>
        <button onClick={this.getPlaylists}>Pegar Playlists</button>
        <button onClick={this.getTracks}>Pegar Tracks</button>

        <br/>
        <h3>{playlistsRenderizadas}</h3>
        <h4>{tracksRenderizadas}</h4>
        
        <input placeholder='Digite o nome da sua playlist' value={this.state.inputCriarPlaylist} onChange={this.alteraInputCriarPlaylist}/>
        <button onClick={this.criaPlaylist}>Criar Playlist</button>


      </div>
    )
  }
}

export default App