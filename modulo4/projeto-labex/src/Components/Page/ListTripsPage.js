import React from 'react';
import { useNavigate } from 'react-router-dom';
import { url } from '../../App';
import Header from '../Header'
import Footer from '../Footer'
import useRequest from '../Hooks/UseRequest';
import styled from 'styled-components'


const Body = styled.div`
    text-align: center;
    color: wheat;
    height: 99h;
    background:url(http://trumpwallpapers.com/wp-content/uploads/Spaceship-Wallpaper-01-1600x1200-1.jpg);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    
`

 const MainDiv = styled.div`
    margin: auto;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 30vw;
    color: #b381ff;
    height: 85vh;
    background:url();
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(66, 108, 205, 1);
    overflow:scroll;
    &::-webkit-scrollbar { 
    display: none}
`

const Btns = styled.button`
    border-radius: 15px;
    border:none;
    outline: none;

`

const BtnBack = styled.button`
    width:100%;
    outline: none;
    background-color: deepskyblue;
    opacity: 50%;
    font-weight: 500;
    color: white;
    position: sticky;
    top: 0;

:hover{
    opacity: 100%;
    transition: ease 2s;
    color:black;
    font-weight: 700;
}
`

const Title = styled.div`
    font-size: 1.8rem;
    display: block;
    position: sticky;
    top:0;
    color: deepskyblue;

`
 const AllTripsDiv = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: center;

`

 const TripDiv = styled.div`
    width: 30vh;
    border: 1px  solid #b399ff;
    border-image: linear-gradient(90deg, #b311ff, #b399ff 100%) 1;
    padding: 1vh 1vw;
    font-size: .8rem;
    justify-content: center;
    margin: 1vh 0;
    color: grey;
    background: rgba(0, 0, 0, 0.43);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.4px);
    -webkit-backdrop-filter: blur(5.4px);
    border: 1px solid rgba(66, 108, 205, 0.42);
    overflow: scroll;
&::-webkit-scrollbar { 
    display: none}
`

 const TitleItem = styled.p`
    color: wheat;
    display: inline-flex;
    margin: 0 0;
    font-weight: 500;
`

const Description = styled.p`
    color: white;
`


const ListTripsPage = () => {

  const [listTrips] = useRequest(`${url}/trips`)

  const navigate = useNavigate()

  const goBack = () => navigate(-1)

  const goToApplicationFormPage = () => navigate('/trips/application')


  return (

    <Body>
    <Header/>
    <MainDiv>
    <BtnBack onClick={goBack}>Voltar</BtnBack>

        <Title>Lista De Viagens</Title>
        {listTrips?.trips.map((trip) => {
          return (
            <AllTripsDiv>
              <TripDiv>
                <Description key={trip.id}> <TitleItem> Nome: </TitleItem> {trip.name}</Description>
                <Description> <TitleItem> Descrição: </TitleItem> {trip.description} </Description>
                <Description> <TitleItem> Planeta: </TitleItem> {trip.planet} </Description>
                <Description> <TitleItem> Dias de Viagem:</TitleItem> {trip.durationInDays}</Description>
                <Description> <TitleItem> Data:</TitleItem> {trip.date}</Description>
                <Description/>
                <Btns onClick={goToApplicationFormPage}>Increva-se</Btns>

              </TripDiv>
            </AllTripsDiv>
          )
        })}
    </MainDiv>
    <Footer />
    </Body>
    
  )

}

export default ListTripsPage 