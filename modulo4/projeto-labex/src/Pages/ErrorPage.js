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


function ErrorPage() {
  
  
  const navigate = useNavigate()    



  return (
    <Container>
      <Header>

      </Header>

      <Home>

      A PÁGINA NAO EXISTE 


      </Home>

      <Footer>

      </Footer>

        

    </Container>

      


    
  )
}

export default ErrorPage