import React from 'react'
import HomePage from '../pages/HomePage/HomePage'
import ListTripsPage from '../pages/ListTripsPage/ListTripsPage'
import ApplicationFormPage from '../pages/ApplicationFormPage/ApplicationFormPage'
import AdminHome from '../pages/AdminHome/AdminHome'
import CreateTripPage from '../pages/CreateTripPage/CreateTripPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import TripDetailsPage from '../pages/TripDetailsPage/TripDetailsPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import {BrowserRouter,Routes, Route} from "react-router-dom"

export default function Router() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<HomePage/>}/>
     <Route path="trips/list" element={<ListTripsPage/>}/>
     <Route path="trips/application" element={<ApplicationFormPage/>}/>
     <Route path="admin/trips/list" element={<AdminHome/>}/>
     <Route path="admin/trips/create" element={<CreateTripPage/>}/>
     <Route path="login" element={<LoginPage/>}/>
     <Route path="admin/trips/:id" element={<TripDetailsPage/>}/>
     <Route path="*" element={<ErrorPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}
