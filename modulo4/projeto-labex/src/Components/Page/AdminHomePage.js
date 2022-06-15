import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import useRequest from '../Hooks/UseRequest'
import axios from 'axios'
import {url} from '../../App'
import styled from 'styled-components'

const Background = styled.div`
background-image: url(https://images.alphacoders.com/590/thumb-1920-590486.jpg);
background-size:cover;
background-repeat: no-repeat;

`

const MainDiv = styled.div`
    height: 85vh;
    text-align: center;
    margin: 0 auto;
    color: white;  
    
`
const BtnDiv = styled.div`
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  width: 23vw;
  height: 2vh;
  display: flex;
  justify-content: space-between; 
    
`

const TripDiv = styled.div`
  margin: auto;
  width: 20vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: solid 1px;
  cursor: pointer;
  margin-top: 15px;
  padding-top: 15px;
  color:white;
`

const BtnDelTrip = styled.div`
margin: auto;
width: 2vw;
border: solid 1px;
display: flex;
justify-content: center;
align-items: center;
background: white;
color: red;
position: fixed;
right: 11vw;

`

const Btns = styled.div`
  color: white;
  width: 10vw;
  border: 1px thin white;
  border-radius: 5%;
  margin: 0 2px;
  cursor: pointer;
  margin: auto;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  height: 75vh;
  display: flex;
  border: 1px  solid #b399ff;
  border-image: linear-gradient(90deg, #b311ff, #b399ff 100%) 1;
  padding: 1vh 1vw;
  font-size: .8rem;
  justify-content: center;
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
    margin: auto; 
    
`

export default function AdminHomePage() {

  const [listTrips, setListTrips] = useRequest(`${url}/trips`)

  const navigate = useNavigate()


  const logout = () => {
    localStorage.removeItem('token')
    navigate('/')
  } 

 
  const goToHomePage = () => navigate('/')
  const goToTripDetails = (tripId) => {
  const tripIdentif = tripId
      navigate(`/admin/trips/${tripIdentif}`)
  } 

  const createTrip = () => navigate('create')
  const deleteTrip = (trip) => {

    const headers = {
      headers: {
        auth: localStorage.getItem('token')
      }
    }

    if(window.confirm('Deseja deletar a viagem?')) {
      axios
      .delete(`${url}/trips/${trip.id}`, headers)
      
      .then((res) => navigate('/admin/trips/list'), setListTrips() )
      .catch((err) =>  err.response)
    }
    else{
      navigate('/admin/trips/list')

    }
  }

  return (
    <Background>
    <Header />
      <MainDiv>
        <Wrapper>
        {listTrips?.trips.map((trip) => {
          return (
            <>
                <TripDiv > 
                  <p onClick={() => goToTripDetails(trip.id)} key={trip.id}>  {trip.name} </p>
                  <BtnDelTrip onClick={(e) => {
                    deleteTrip(trip)
                    navigate('/admin/trips/list')
                  }}>X
                </BtnDelTrip> 
              </TripDiv>
              <br/>
            </>
          )
        })}

        </Wrapper>
        <BtnDiv>
        <Btns onClick={goToHomePage}>Voltar</Btns>
        <Btns onClick={createTrip}>Criar Viagem</Btns>
        <Btns onClick={logout}>Logout</Btns>
        </BtnDiv>
        
     </MainDiv>
    <Footer/>
    </Background>
);
}