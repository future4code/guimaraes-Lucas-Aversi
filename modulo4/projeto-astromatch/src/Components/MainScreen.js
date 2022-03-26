import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
export const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lucas-aversi-guimaraes`

const Img = styled.img`
width: 31vw;
height: 50vh;
margin-top: 2vh;
`
const DivGeral = styled.div`
display: flex;
border: solid 2px;
width: 33vw;
height: 90vh;
margin: auto;
margin-top: 10px;
box-shadow: inset 0 0 1em crimson, 0 0 0.5em crimson;
background-color: black;


`
const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const ButtonDiv = styled.div`
display: flex;
align-items: center;
padding-top:vh;
height: 15vh;
`
const LikeButton = styled.button`
width: 10vw;
height: 5vh;
margin-right: 50px;
box-shadow: inset 0 0 1em crimson, 0 0 0.5em wheat;
color: red;
text-shadow:
    0 0 7px crimson,
    0 0 21px crimson,
    0 0 42px black,
    0 0 82px black,
    0 0 92px black,
    0 0 102px black,
    0 0 121px red;

`
const DislikeButton = styled.button`
width: 10vw;
height: 5vh;
box-shadow: inset 0 0 4em black, 0 0 0.5em wheat;
color: pink;
text-shadow:
    0 0 7px crimson,
    0 0 21px crimson,
    0 0 42px black,
    0 0 82px black,
    0 0 92px black,
    0 0 102px black,
    0 0 121px red;

`
const Name = styled.span`
font-size: 1.7rem;
height: 8vh;
color: pink;
text-shadow:
    0 0 7px crimson,
    0 0 21px crimson,
    0 0 42px black,
    0 0 82px black,
    0 0 92px black,
    0 0 102px black,
    0 0 121px red;
`
const Age = styled.span`
font-size: 1.415rem;
height: 8vh;
color: white;
text-shadow:
    0 0 7px crimson,
    0 0 21px crimson,
    0 0 42px black,
    0 0 82px black,
    0 0 92px black,
    0 0 102px black,
    0 0 121px red;

`
const Bio = styled.span`
font-size: 1.115rem;
height: auto;
text-align: center;
color: wheat;
text-shadow:
    0 0 7px crimson,
    0 0 21px crimson,
    0 0 42px black,
    0 0 82px black,
    0 0 92px black,
    0 0 102px black,
    0 0 121px red;

`
const ButtonSeeMatches = styled.button`
width: 10vw;
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
`

const MainScreen = (props) => {
  const [perfil, setPerfil] = useState([])
  
  const getPerfil = () => {
    axios
      .get(`${url}/person`)
      .then((res) => setPerfil(res.data.profile))
      .catch((err) => console.log(err))
  }

  useEffect(() => getPerfil(), [])

  const likePerfil = () => {
    const body = {
      id: perfil.id,
      choice: true,
    }

    axios
      .post(`${url}/choose-person`, body)
      .then((res) => getPerfil())
      .catch((err) => console.log(err))
  }

  const dislikePerfil = () => {
    const body = {
      id: perfil.id,
      choice: false,
    }

    axios
      .post(`${url}/choose-person`, body)
      .then((res) => getPerfil())
      .catch((err) => console.log(err))
  }
  return (
    <DivGeral>
      <Card>
        <Img src={perfil.photo}/>
        <Name> {perfil.name} </Name>
        <Age> {perfil.age} </Age>
        <Bio> "{perfil.bio}" </Bio>
        <ButtonDiv>
          <LikeButton onClick={likePerfil}>♥
          </LikeButton>
          <DislikeButton onClick={dislikePerfil}>X
          </DislikeButton>
        </ButtonDiv>
        <ButtonSeeMatches onClick={props.onChangeMatchScreen}>Matches!!!</ButtonSeeMatches>

      </Card>
   </DivGeral>
  );
}
export default MainScreen