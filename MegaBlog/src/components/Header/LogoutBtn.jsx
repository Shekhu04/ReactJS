// Importing React
import React from 'react'
// Importing useDispatch hook from react-redux for dispatching actions
import { useDispatch } from 'react-redux'
// Importing the authentication service
import authService from '../../appwrite/auth'
// Importing the logout action from the authSlice
import { logout } from '../../store/authSlice'

// LogoutBtn component
function LogoutBtn() {
  // Initializing the dispatch function
  const dispatch = useDispatch()

  // Handler function for logging out
  const logoutHandler = () => {
    // Calling the logout function from authService
    authService.logout().then(() => {
      // Dispatching the logout action to update the Redux state
      dispatch(logout())
    })
  }

  // Return a button element
  return (
    <button
      className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
      onClick={logoutHandler} // Attaching the logoutHandler function to the onClick event
    >
      Logout
    </button>
  )
}

// Exporting the LogoutBtn component so it can be used in other parts of the application
export default LogoutBtn
