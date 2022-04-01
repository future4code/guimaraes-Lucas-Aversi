import React from 'react'
import { useNavigate } from 'react-router-dom'

function AdminPage() {

    const navigate = useNavigate()    
    const goBack = () => navigate(-1)
    const createTrip = () => navigate('createTrip')


  return (
    <div>AdminPage
        <button onClick={goBack}>voltar</button>
        <button onClick={createTrip}>CRIAR TRIP</button>

    </div>
  )
}

export default AdminPage