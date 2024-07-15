// Importing necessary modules and components
import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'  // Custom components
import { Link } from 'react-router-dom'  // Component for navigation links
import { useSelector } from 'react-redux'  // Hook to access Redux state
import { useNavigate } from 'react-router-dom'  // Hook to navigate programmatically

// Header component definition
function Header() {
  // useSelector hook to access the auth status from the Redux store
  const authStatus = useSelector((state) => state.auth.status)
  
  // useNavigate hook to programmatically navigate to different routes
  const navigate = useNavigate()

  // Array of navigation items with their properties
  const navItems = [
    {
      name: 'Home',  // Display name of the navigation item
      slug: "/",  // URL path to navigate to
      active: true  // Always active, hence always shown
    }, 
    {
      name: "Login",  // Display name of the navigation item
      slug: "/login",  // URL path to navigate to
      active: !authStatus  // Shown only when the user is not authenticated
    },
    {
      name: "Signup",  // Display name of the navigation item
      slug: "/signup",  // URL path to navigate to
      active: !authStatus  // Shown only when the user is not authenticated
    },
    {
      name: "All Posts",  // Display name of the navigation item
      slug: "/all-posts",  // URL path to navigate to
      active: authStatus  // Shown only when the user is authenticated
    },
    {
      name: "Add Post",  // Display name of the navigation item
      slug: "/add-post",  // URL path to navigate to
      active: authStatus  // Shown only when the user is authenticated
    }
  ]

  // Rendering the header
  return (
    <header className='py-3 shadow bg-gray-500'>  {/* Header with padding, shadow, and background color */}
      <Container>  {/* Container component to center and constrain the content */}
        <nav className='flex'>  {/* Flex container for the navigation */}
          <div className='mr-4'>  {/* Margin-right for spacing */}
            <Link to='/'>  {/* Link component to navigate to the home page */}
              {/* Logo component with a fixed width of 70px */}
              <Logo width='70px' />
            </Link>
          </div>
          <ul className='flex ml-auto'>  {/* Flex container for navigation items, pushed to the right */}
            {/* Iterate over navItems to create navigation buttons */}
            {navItems.map((item) => 
              item.active ? (  // Render only active items
                <li key={item.name}>  {/* Unique key for each item */}
                  <button
                    onClick={() => navigate(item.slug)}  
                    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' 
                  >
                    {item.name}  {/* Display name of the navigation item */}
                  </button>
                </li>
              ) : null
            )}
            {/* Conditionally render the Logout button if the user is authenticated */}
            {authStatus && (
              <li>
                <LogoutBtn />  {/* Logout button component */}
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

// Exporting the Header component so it can be used in other parts of the application
export default Header
