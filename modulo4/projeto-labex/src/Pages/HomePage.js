import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import {Container} from '../Hooks/Constants'
import Header from '../Components/Header'
import Footer  from '../Components/Footer'

const Home = styled.div`
height: 85vh;
width: 100vw;
background-color: white;
display: flex;
justify-content: center;
`

const NavBtn = styled.button`
width: 30%;
height: 10%;
color: black;
border: solid 1px wheat;
opacity: 50%;
border-radius: 50px;

`
const NavBtn2 = styled.button`
width: 30%;
height: 10%;
color: black;
border: solid 1px wheat;
opacity: 50%;
border-radius: 50px;


`

const Card1 = styled.button`
width: 50%;
background-image: url(https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2012/05/esa_control_room/11256023-4-eng-GB/ESA_control_room_pillars.jpg);
background-size:cover;
color: white;
border: solid 1px wheat;
`


const Card2 = styled.button`
width: 50%;
background-image: url(https://uploads.metropoles.com/wp-content/uploads/2020/10/23144759/SpaceX-lanca-60-novos-satelites-da-constelacao-Starlink-na-sexta-feira-600x400.jpg);
background-size:cover;
color: white;
border: solid 1px wheat;
`



function HomePage() {
    
    const navigate = useNavigate()
    const goToLogin = () => navigate('Login')
    const goToTrips = () => navigate('ListTrips')


  return (
    <Container>
      <Header>

      </Header>

      <Home>
        <Card1>
          <NavBtn onClick={goToLogin}>AREA ADM</NavBtn>
        </Card1>

        <Card2>
      <NavBtn2 onClick={goToTrips}>VER VIAGENS</NavBtn2>
        </Card2>
      

      </Home>

      <Footer>

      </Footer>

        

    </Container>
  )
}

export default HomePage