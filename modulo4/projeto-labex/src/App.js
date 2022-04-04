import React from 'react'
import Router from './Hooks/RouterPages';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>

      </Router>
    </div>
  );
}

export default App;
