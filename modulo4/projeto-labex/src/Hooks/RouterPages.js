import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from '../Pages/HomePage'
import ListTripPage from '../Pages/ListTripPage'
import AdminPage from '../Pages/AdminPage'
import LoginPage from '../Pages/LoginPage'
import ApplicationFormPage from '../Pages/ApplicationForm'
import CreateTripPage from '../Pages/CreateTripPage'
import TripDetailPage from '../Pages/TripDetailsPage'

const Router = () => {
    return (
        <BrowserRouter>
            
            <Routes>

                <Route index element={<HomePage/>}/>
                <Route path='login' element={<LoginPage/>} />
                <Route path='listTrips' element={<ListTripPage/>} />
                <Route path='listTrips/applicationToTrip' element={<ApplicationFormPage/>} />
                <Route path='login/adminPage' element={<AdminPage/>} />
                <Route path='login/adminPage/createTrip' element={<CreateTripPage/>} />
                <Route path='login/adminPage/detailPage' element={<TripDetailPage/>} />

            </Routes>

        </BrowserRouter>
    )
}

export default Router; 