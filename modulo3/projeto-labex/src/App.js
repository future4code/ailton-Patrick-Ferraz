import React, {useState} from 'react'
import HomePage from './pages/HomePage/HomePage'
import ListTripsPage from './pages/ListTripsPage/ListTripsPage'
import ApplicationFormPage from './pages/ApplicationFormPage/ApplicationFormPage'

export default function App() {

  const [currentScree, setCurrentScreen] = useState("home")

  const changeScreen = () =>{
    switch(currentScree){
      case "home":
      return <HomePage goToListTripsPage={goToListTripsPage}/>;
      case "listTrips":
        return <ListTripsPage goToHomePage={goToHomePage} goToApplicationFormPage={goToApplicationFormPage}/>
        case "applicationFormPage":
          return <ApplicationFormPage goToHomePage={goToHomePage} goToListTripsPage={goToListTripsPage}/>
          default:
            return <HomePage/>
    }
  }

  const goToListTripsPage = () =>{
    setCurrentScreen("listTrips")
  }

  const goToHomePage = () =>{
    setCurrentScreen("home")
  }

  const goToApplicationFormPage = () =>{
    setCurrentScreen("applicationFormPage")
  }

  return (
    <div>
      {changeScreen()}
    </div>
  )
}
