import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminHomePage from '../Page/AdminHomePage'
import ApplicationFormPage from '../Page/ApplicationFormPage'
import CreateTripPage from '../Page/CreatTripPage'
import HomePage from '../Page/HomePage';
import ListTripsPage from '../Page/ListTripsPage'
import LoginPage from '../Page/LoginPage'
import TripDetailsPage from '../Page/TripDetaislPage'
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>

            <Route exact path={'/'} element={<HomePage/>}/>

            <Route exact path={'/admin/trips/list'} element={<AdminHomePage/>} />

            <Route exact path={'/trips/application'} element={<ApplicationFormPage/>}/>

            <Route exact path={'/admin/trips/list/create'} element={<CreateTripPage/>} />

            <Route exact path={'/trips/list'} element={<ListTripsPage/>} />

            <Route exact path={'/login'} element={<LoginPage/>} />

            <Route exact path={'/admin/trips/:tripId'} element={<TripDetailsPage/>} />

            </Routes>
        </BrowserRouter>
    )
}

export default Router; 