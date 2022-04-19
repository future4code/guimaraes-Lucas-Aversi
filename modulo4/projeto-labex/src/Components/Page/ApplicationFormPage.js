import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Header from '../Header'
import Footer from '../Footer'
import { useNavigate } from 'react-router-dom';
import {countries} from '../Constants/Countries'
import { url } from '../../App'
import useForm from '../Hooks/UseForm';
import useRequest from '../Hooks/UseRequest';


const Background = styled.div`
  background-image: url(https://images8.alphacoders.com/502/thumb-1920-502964.png);
  background-size:cover;
  background-repeat: no-repeat;
  height: 100vh;

`

const StyledForm = styled.form`
  display: grid;  
  margin: 0  auto;
  justify-content: center;
  position: absolute;
  top:37vh;
  right:40%;
`

const Btns = styled.button`
  width: 15vh;
  margin: 0 auto;
  height: 3.5vh;

`

const Title = styled.h1`
  font-size: 3.4rem;
  color: black;
  margin-left: 25%;
  margin-right: -50%;

`
const MainDiv = styled.div`
  height: 85vh;
  display: block;
  justify-content: center;
  align-items: center;
  overflow: hidden;

`

const ApplicationFormPage = () => {

  const navigate = useNavigate();
  const goBack = () => navigate(-1)

  const [listTrips] = useRequest(`${url}/trips`)

  const { form, onChange, cleanFields } = useForm({
    tripId: '',
    name: '',
    age: '',
    applicationText: '',
    profession: '',
    country: ''
  });

  const applyToTrip = (event) => {
    event.preventDefault();

    const body = {
      name: form.name,
      age: Number(form.age),
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country,
    };
    axios
    .post(`${url}/trips/${form.tripId}/apply`, body)
    .then((res) => {
    alert('Inscrição bem sucedida!')

      })
    .catch((err) => err.response)

    cleanFields();
  };



  return (
    <Background>
      <Header/>
      <MainDiv>
      <Title>Inscreva-se para uma Viagem</Title>

        <StyledForm onSubmit={applyToTrip}>
          <select
            value={form.tripId}
            required
            name={'tripId'}
            onChange={onChange}
          >
            <option value={''}>Selecione a viagem:</option>
            {listTrips?.trips.map((trip) => {
              return (
                <option value={trip.id} key={trip.id}>
                  {trip.name} {trip.planet}
                </option>
              );
            })}
          </select>
          <input
            name='name'
            value={form.name}
            onChange={onChange}
            placeholder={'Nome'}
            required
          />
          <input
            name='age'
            value={form.age}
            onChange={onChange}
            placeholder={'Idade'}
            required
            type={'number'}
            min={18}
          />
          <input
            name='applicationText'
            value={form.applicationText}
            onChange={onChange}
            placeholder={'Texto de Candidatura'}
            required
            pattern={'^.{10,}'}
            title={'Sua texto de candidatura deve ter ao menos 10 caracteres'}
          />
          <input
            name='profession'
            value={form.profession}
            onChange={onChange}
            placeholder={'Profissão'}
            required
            pattern={'^.{2,}'}
            title={'Sua profissão deve ter no mínimo 4 caracteres'}
          />
          <select
            value={form.country}
            required
            name={'country'}
            onChange={onChange}
          >
            <option value={''}>País de origem:</option>
            {countries.map((country) => {
              return (
                <option value={country} key={country}>
                  {country}
                </option>
              );
            })}
          </select>
          <br/>
          <Btns>Enviar</Btns>
          <Btns onClick={goBack} >Voltar</Btns>


        </StyledForm>
      </MainDiv>
      <Footer/>


      </Background>
      
  );
};

export default ApplicationFormPage; 