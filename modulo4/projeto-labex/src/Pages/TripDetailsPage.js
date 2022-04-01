import React from 'react'
import { useNavigate } from 'react-router-dom'

function TripDetailPage() {
    const navigate = useNavigate()
    
    const goBack = () => navigate(-1)

  return (
    <div>TripDetailPage
                <button onClick={goBack}>voltar</button>

    </div>
  )
}

export default TripDetailPage