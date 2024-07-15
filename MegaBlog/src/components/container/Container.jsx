// Importing React
import React from 'react'

// Container component that takes children as a prop
//Props: The component receives children as a prop. children represents any nested elements or components passed to Container.
function Container({ children }) {
  // Return a div with predefined styles and the children inside it
  
  return <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>;
}

// Exporting the Container component so it can be used in other parts of the application
export default Container
