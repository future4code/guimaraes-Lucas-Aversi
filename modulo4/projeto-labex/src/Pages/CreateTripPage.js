import React from 'react'
import { useNavigate } from 'react-router-dom'

function CreateTripPage() {

    const navigate = useNavigate()    
    const goBack = () => navigate(-1)

  return (
    <div>CreateTripPage
                <button onClick={goBack}>voltar</button>

    </div>
    
  )
}

export default CreateTripPage