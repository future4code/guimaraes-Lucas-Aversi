import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`



class App extends React.Component {
  state = { 
    pessoas: [
      {
        nomeUsuario: "Lucas",
        fotoUsuario: "https://picsum.photos/50/4",
        fotoPost: "https://picsum.photos/200/140"
      },
      {
        nomeUsuario: "Brunna",
        fotoUsuario: "https://picsum.photos/200/100",
        fotoPost: "https://picsum.photos/50/2"
      },
      {
        nomeUsuario: "Renata",
        fotoUsuario: "https://picsum.photos/50/1",
        fotoPost: "https://picsum.photos/200/200",
      },
    ],
  }
  render() {
        const postComponent = this.state.pessoas.map((pessoas, index) =>{
          return <Post nomeUsuario ={pessoas.nomeUsuario} fotoUsuario={pessoas.fotoUsuario} fotoPost={pessoas.fotoPost}/>
        })
    return (  
      <MainContainer>          
          {postComponent}          
      </MainContainer>
    );
  }
}

export default App;
