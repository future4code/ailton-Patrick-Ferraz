
 export const goToListTripsPage = (navigate) =>{
    navigate("/trips/list")
  }

  export const goToApplicationFormPage = (navigate)=>{
    navigate("/trips/application")
  }

export const goToLoginPage = (navigate) =>{
    navigate("/login")
}

  export const backOnePage = (navigate) =>{
    navigate(-1)
  }

  export const gotToAdminHome = (navigate) =>{
    navigate("/admin/trips/list")
  }

  export const goToCreateTripPage = (navigate) =>{
    navigate("/admin/trips/create")
  }

  export const goToTripDetails = (navigate,id) =>{
    navigate(`/admin/trips/${id}`)
  }