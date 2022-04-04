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


function LoginPage() {

const navigate = useNavigate()    
const goBack = () => navigate(-1)
const login =() => navigate ('AdminPage')
  
    return (
        
    <Container>
      <Header>

      </Header>

      <Home>

      <button onClick={goBack}>voltar</button>
      <button onClick={login}>LOGIN</button>

      </Home>

      <Footer>

      </Footer>

        

    </Container>

  )
}

export default LoginPage