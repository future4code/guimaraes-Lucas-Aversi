import React from 'react'
import { useNavigate } from 'react-router-dom'

function ApplicationFormPage() {

  const navigate = useNavigate()    
  const goBack = () => navigate(-1)

  return (
    <div>applicationForm
     <button onClick={goBack}>voltar</button>
     
    </div>
  )
}

export default ApplicationFormPage