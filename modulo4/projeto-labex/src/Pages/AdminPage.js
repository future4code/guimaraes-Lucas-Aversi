import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import {goBack, detailPage, createTrip} from '../Hooks/Coordinator';
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



function AdminPage() {

    const navigate = useNavigate()    




  return (
    <Container>
      <Header>

      </Header>

      <Home>

        <button onClick={()=> goBack (navigate)}>voltar</button>
        <button onClick={()=> createTrip (navigate)}>CRIAR TRIP</button>
        <button onClick={()=> detailPage (navigate)}>VER INSCRITOS</button> 

      </Home>

      <Footer>

      </Footer>

        

    </Container>

  )
}

export default AdminPage