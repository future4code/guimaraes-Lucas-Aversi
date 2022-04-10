import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { url } from '../../App'
import Header from '../Header'
import Footer from '../Footer'

const MainDiv = styled.div`
height: 85vh;
width: 50vw;
display: flex;
flex-direction: column;
margin: 0 auto;
justify-content: center;
`

const BtnDiv = styled.div`
display: flex;
margin: auto;
justify-content: center;
margin: auto;
background-color: gray;
width: 50vw;
height: 50vh;
`

const BtnLogin = styled.button`
margin: auto;
`
const Label = styled.label`
width: 30vw;
margin: auto;


`
const LoginInput = styled.input`
width: 30vw;
margin: auto;


`

const PasswordInput = styled.input`
width: 30vw;
margin: auto;

`


export default function LoginPage() {

const navigate = useNavigate()
const goToHomePage = () => navigate('/')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')


const handleEmail = (e) => setEmail(e.target.value) 
const handlePassword = (e) => setPassword(e.target.value) 

const login = () => {
  const body = {
    email: email,
    password: password
  }
  axios
    .post(`${url}/login`, body)
    .then(res => {
      localStorage.setItem('token', res.data.token)
      navigate('/admin/trips/list')
    })
    .catch((err) => err.response)
}

  return (
    <div>
        <Header />
        <MainDiv>
            <Label> Digite o Login</Label>            
            <LoginInput type={'email'} placeholder={'Nome de Usuário'} value={email} onChange={handleEmail} required/>
            <Label> Digite a Senha</Label>
            <PasswordInput type={'password'} placeholder={'Senha'} value={password} onChange={handlePassword} required/>
            <br/>
            <br/>
            <BtnDiv>
            <BtnLogin onClick={goToHomePage}>Voltar</BtnLogin>
            <BtnLogin onClick={login}>Login</BtnLogin>
            </BtnDiv>
        </MainDiv>
        <Footer />



    </div>
  )
}