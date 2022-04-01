import React from 'react'
import { useNavigate } from 'react-router-dom'

function ListTripPage() {
    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    const join = () => navigate('ApplicationToTrip')

  return (
    <div>ListTripPage
                <button onClick={join}>Join</button>
                <button onClick={goBack}>back</button>


    </div>
  )
}

export default ListTripPage