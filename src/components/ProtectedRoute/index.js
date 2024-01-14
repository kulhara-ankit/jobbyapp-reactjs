import {Redirect, Route} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = props => {
  const token = Cookies.get('jwt_token')
  // if user is not logged in and tries to access home page we have to redirect to /login page again
  if (token === undefined) {
    return <Redirect to="/login" />
  } // if token !== undefined, means token is available so we are unpacking props
  // such as exact,path,component and passing to Route component
  return <Route {...props} />
}
export default ProtectedRoute
