import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import Header from '../Header'
import Footer from '../Footer'

const StyledBody = styled.body`
height: 95vh;
background-image: url(https://images2.alphacoders.com/817/thumb-1920-81790.jpg);
background-size: 100%;
text-align: center;
margin: 0 auto;
`

const MainDiv = styled.div`
display: grid;
justify-self: center;
align-self: center;
`
const Title = styled.h1`
font-size: 9rem;
margin: 20vh auto;
color: black;

:hover{
    transition: all ease-in-out 10.4s;
    color: wheat;
}
`

const Btns = styled.button`
width: fit-content;
height: auto;
color: black;
background: black;
cursor: pointer;
position: absolute;
top: 70%;
right: 50%;
background-color: black;
color: white;
background: rgba(255, 255, 255, 0.2);
border-radius: 50px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(5, 5, 5, 0.3);
transition: all 0.3s ease;
background-color: black;
color: white;

:hover{
color: wheat;
transition: all ease-in-out 0.5s;
}
`
const BtnAdm = styled.button`
width: fit-content;
border: 1px solid #b399ff;
display: flex;
margin: 3vh auto 0;
color: white;
background: black;
cursor: pointer;
position: absolute;
top: 0;
right: 0;


:hover{
transition: all 0.5s ease;
background: black;
color: wheat;

}
`

const HomePage = () => {
  const navigate = useNavigate();

  const goToListTripsPage = () => {
    navigate('/trips/list');
  };

  const goToLoginPage = () => {
    navigate('/login');
    const token = localStorage.getItem('token');
    if (token === null) {
      navigate('/login');
    }
    else {
      navigate('/admin/trips/list');
    };
  };


  return (
    <>
        <StyledBody>
        <Header />
        <MainDiv>
            <Title>LabeX</Title>
            <Btns onClick={goToListTripsPage}>Ver Viagens</Btns>
            <BtnAdm onClick={goToLoginPage}>Área de Administrador</BtnAdm>
        </MainDiv>
    </StyledBody>
        <Footer />
     </>

  );
};

export default HomePage;
