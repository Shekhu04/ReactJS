// Importing necessary hooks and modules
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"  // Authentication service
import { login, logout } from "./store/authSlice"  // Auth actions
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'  // Outlet for nested routes

function App() {
  // State to track loading status
  const [loading, setLoading] = useState(true)
  // Dispatch function to send actions to Redux store
  const dispatch = useDispatch()

  // useEffect to check user authentication status on component mount
  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          // If user is logged in, dispatch login action with userData
          dispatch(login({ userData }))
        } else {
          // If user is not logged in, dispatch logout action
          dispatch(logout())
        }
      })
      // Set loading to false once the check is done
      .finally(() => setLoading(false))
  }, [dispatch])
  
  // Conditional rendering based on loading state
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />  // Header component
        <main>
          TODO: <Outlet />  // Placeholder for nested routes content
        </main>
        <Footer />  // Footer component
      </div>
    </div>
  ) : null  // Render nothing if loading is true
}

export default App
