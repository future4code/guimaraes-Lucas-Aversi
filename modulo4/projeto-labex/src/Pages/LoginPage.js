import React, {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {Container} from '../Hooks/Constants'
import Header from '../Components/Header'
import Footer  from '../Components/Footer'
import { adminPage, goBack } from '../Hooks/Coordinator'
import useForms from '../Hooks/useForms'
import { URL } from '../Hooks/Constants'


const Home = styled.div`
height: 85vh;
width: 100vw;
background-color: white;
display: flex;
justify-content: center;
`


function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  
  

/*   const handleEmail = (e) =>{
    setEmail(e.target.value)
  }

  const handlePassword = (e) =>{
    setPassword(e.target.value)
  } */

  const login = () =>{
    console.log(email, password)
    
    const { form, onChange, cleanFields } = useForms({
      email: "",
      password: ""
    });
  
    const submitLogin = (event) => {
      event.preventDefault();
      const body = {
  
        email: form.email,
        password: form.password,
  
      };
      axios.post(`${URL}/login`, body)
        .then((response) => {
          localStorage.setItem('token', response.data.token)
          navigate("/admin/trips/list")
  
        })
        .catch((error) => {
          alert("Ops! Usuário ou senha incorretos")
        })
  
      cleanFields();
  
    };
  
    return (
        
    <Container>
      <Header>

      </Header>

      <Home>

      <input placeholder="E-mail" value={email} onChange={handleEmail} />
      <input placeholder="Senha" value={password} onChange={handlePassword} />  

      <button onClick={()=> goBack (navigate)}>voltar</button>
      <button onClick={login}>Entrar!</button>

      </Home>

      <Footer>

      </Footer>

        

    </Container>

  )
}

export default LoginPage