import { Navigate, Outlet } from "react-router-dom"
import { useAuthStatus } from "../hooks/useAuthStatus"
import Spinner from "./Spinner"

const PrivateRoute = () => {
    const {loggedIn, checkingStatus} = useAuthStatus()
  
  // when checking status show loading 
    if (checkingStatus) {
    return <Spinner />
  }
  //redirect if not logged in and Outlet if so 
return loggedIn ? <Outlet /> : <Navigate to = '/sign-in' />
}
export default PrivateRoute