import React, {useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import MainScreen from './Components/MainScreen'
import MatchScreen from './Components/MatchScreen'
import { url } from './Components/MainScreen'

const Container = styled.div`
background-color: black;
background-image: url(https://media.istockphoto.com/photos/neon-duotone-female-abstract-reaching-for-each-other-hands-on-black-picture-id1218027543?b=1&k=20&m=1218027543&s=170667a&w=0&h=2gbb2dCpqVqkl5OiKMHiWAckOXQUDdanVUZbEOlot9U=);
background-attachment: fixed;
  background-position: center; 
background-size: cover;

`


const DivGeral = styled.div`
width: 35vw;
height: auto;
margin: auto;
flex-direction: column;
padding-bottom: 5px;
display: flex;


`

const ButtonClear = styled.button`
border: solid 2px wheat;
width: 33vw;
height: 4vh;
display: flex;
justify-content: center;
align-items: center;
margin:auto;
margin-top: 5px;
box-shadow: inset 0 0 3em crimson, 0 0 0.5em crimson;
font-size: 1.0rem;
color: white;
text-shadow:
    0 0 7px crimson,
    0 0 21px crimson,
    0 0 42px black,
    0 0 82px black,
    0 0 92px black,
    0 0 102px black,
    0 0 121px red;

    :hover{
box-shadow: inset 0 0 5em wheat, 0 0 10em purple;
color: crimson;
text-shadow:
    0 0 7px red,
    0 0 21px red,
    0 0 42px red,
    0 0 82px red,
    0 0 92px red,
    0 0 102px red,
    0 0 121px red;

}

`


const App = () => {
  const [showScreen, setShowScreen] = useState("principal");

  const escolheTela = () => {
    switch (showScreen) {
      case "principal":
        return <MainScreen onChangeMatchScreen={onChangeMatchScreen} />;
      case "match":
        return <MatchScreen onChangeMainScreen={onChangeMainScreen} />;
      default:
        <p> Oppps! </p>;
    }
  };

  const onChangeMainScreen = () => setShowScreen("principal");
  const onChangeMatchScreen = () => setShowScreen("match");

  const deleteMatch = () => {
    axios
      .put(`${url}/clear`)
      .then((res) => setShowScreen("principal"))
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <DivGeral>
        {escolheTela()}
        <ButtonClear onClick={deleteMatch}> Limpar Matches</ButtonClear>
        <br/>
      </DivGeral>
    </Container>

  );
};

export default App;