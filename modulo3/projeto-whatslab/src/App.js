import React from 'react';
import './App.css';
import Chat  from './Components/chat.js'
import styled from 'styled-components';


const Start = styled.div`
background: black;
height: 100vh;

`

function App() {
  return (
    <Start>
      <Chat />
    </Start>
  );
}

export default App;
