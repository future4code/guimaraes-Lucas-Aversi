import React from 'react'
import { useNavigate } from 'react-router-dom'


function HomePage() {
    
    const navigate = useNavigate()
    const goToLogin = () => navigate('Login')
    const goToTrips = () => navigate('ListTrips')


  return (
    <div>
        <button onClick={goToLogin}>login</button>
        <button onClick={goToTrips}>VER VIAGENS</button>

    </div>
  )
}

export default HomePage