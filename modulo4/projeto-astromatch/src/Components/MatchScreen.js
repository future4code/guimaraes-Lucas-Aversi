import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
export const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lucas-aversi-guimaraes`

const DivGeral = styled.div`
display: flex;
width: 20vw;
/* min-height: 100vh;
 */height: auto;
margin: auto;
gap: 10px;
flex-direction: column;
margin-top: 10px;

`

const ButtonBack = styled.button`
box-shadow: inset 0 0 3em crimson, 0 0 0.5em crimson;
border:none;
font-size: 1.0rem;
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
const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: solid 4px;
padding-top: 5px;
box-shadow: inset 0 0 1em crimson, 0 0 0.5em crimson;

`
const Img = styled.img`
width: 19vw;
height: 45vh;
`

const Name = styled.span`
font-size: 1.0rem;
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
font-size: 1.0rem;
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

const MatchScreen = (props) => {
    const [listaMatches, setListaMatches] = useState([])

    const pegaMatches = () => {
      axios
        .get(`${url}/matches`)
        .then((res) => setListaMatches(res.data.matches))
        .catch((err) => console.log(err))
    }
  
    useEffect(() => pegaMatches(), [])

    
  
  return (
    <DivGeral>
        <ButtonBack onClick={props.onChangeMainScreen}>Voltar</ButtonBack>
        {listaMatches.map((match) => {
            return (

                <Card>
                    <Img src={match.photo}/>
                    <Name> {match.name} </Name>
                    <Age> {match.age} </Age>
                </Card>
                
                    )
        })}
   </DivGeral>
  );
}
export default MatchScreen