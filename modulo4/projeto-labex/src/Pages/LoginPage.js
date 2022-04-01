import React from 'react'
import { useNavigate } from 'react-router-dom'

function LoginPage() {

const navigate = useNavigate()    
const goBack = () => navigate(-1)
const login =() => navigate ('AdminPage')
  
    return (
        <div>
            LOGINFORM
            <button onClick={goBack}>voltar</button>
            <button onClick={login}>LOGIN</button>

        </div>
  )
}

export default LoginPage