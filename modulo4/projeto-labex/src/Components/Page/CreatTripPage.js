import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import useForm from '../Hooks/UseForm';
import { planets } from '../Constants/Planets';
import axios from 'axios';
import { url } from '../../App';
import styled from 'styled-components'

const Background = styled.div`
background-image: url(https://images.alphacoders.com/590/thumb-1920-590486.jpg);
background-size:cover;
background-repeat: no-repeat;
`

const StyledForm = styled.form`
  display: grid;  
  margin: 0  auto;
  display: flex;
  justify-content: center;
  position: relative;
  bottom:10vh;
`

const Btns = styled.button`
  width: 15vh;
  margin: 0 auto;
  height: 3.5vh;

`

const BtnDiv = styled.div`
  margin-top: 22vh;
  margin-left: auto;
  margin-right: auto;
  width: 23vw;
  height: 5vh;
  display: flex;
  justify-content: space-between;
  
    
`
const FieldSet = styled.fieldset`
display: flex;
flex-direction: column;
/* border:none ;
 */
`

const Title = styled.h1`
  font-size: 4rem;
  margin: 0.8em auto;
  color: black;
`
const MainDiv = styled.div`
  display: grid;
  justify-self: center;
  align-self: center;
  height: 85vh;
`

const CreatTripPage = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1)

  const { form, onChange, cleanFields } = useForm({
    name: '',
    planet: '',
    date: '',
    description: '',
    durationInDays: ''
  });

  const creatTrip = (e) => {

    e.preventDefault();

    const headers = {
      headers: {
        auth: localStorage.getItem('token')
      },
    };

    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      durationInDays: form.durationInDays
    };

      axios
        .post(`${url}/trips`, body, headers)
        .then((res) => alert('Viagem criada com sucesso!'))
        .catch((err) => err)

      cleanFields();
  };


  return (
    <Background>
      <Header />
      <MainDiv>
        <Title> Criar Viagem</Title>
        <div>
          <StyledForm onSubmit={creatTrip}>
            <FieldSet>
            <input
              name='name'
              value={form.name}
              onChange={onChange}
              placeholder={'Nome'}
              required
            />
            <select
              name='planet'
              value={form.planet}
              onChange={onChange}
              placeholder={'Escolha um Planeta'}
              required
            >
              <option value={''}>Escolha um Planeta</option>
              {planets.map((planets) => {
                return (
                  <option value={planets} key={planets}>
                    {planets}
                  </option>
                );
              })}
            </select>
            <input
              name='date'
              value={form.date}
              onChange={onChange}
              placeholder={'Data'}
              required
              type={'date'}
            />
            <input
              name='description'
              value={form.description}
              onChange={onChange}
              placeholder={'Descrição'}
              required
              pattern={'^.{5,}'}
              title={'Sua texto deve ter no mínimo 5 caracteres'}
            />
            <input
              name='durationInDays'
              value={form.durationInDays}
              onChange={onChange}
              placeholder={'Duração em dias'}
              required
              type={'number'}
              min={1}
            />
            <BtnDiv>
          <Btns>Criar</Btns>
          <Btns onClick={goBack}>Voltar</Btns>
          </BtnDiv>
          </FieldSet>
        </StyledForm>
        </div>
      </MainDiv>
      <Footer />
    </Background>
  );
};

export default CreatTripPage; 