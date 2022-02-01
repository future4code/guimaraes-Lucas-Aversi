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
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://picsum.photos/50/4'}
          fotoPost={'https://picsum.photos/200/140'}
        />
          <Post
          nomeUsuario={'José'}
          fotoUsuario={'https://picsum.photos/50/2'}
          fotoPost={'https://picsum.photos/200/100'}
        />
        <Post
          nomeUsuario={'Mayara'}
          fotoUsuario={'https://picsum.photos/50/1'}
          fotoPost={'https://picsum.photos/200/200'}
        />
      </MainContainer>
    );
  }
}

export default App;
