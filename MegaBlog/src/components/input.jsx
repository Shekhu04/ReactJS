// Importing necessary modules from React
import React, { useId } from 'react'

// Creating a functional component Input and forwarding its ref
const Input = React.forwardRef(function Input({
    label,  // Label for the input field
    type = "text",  // Type of the input field, default is "text"
    className = "",  // Additional CSS classes for the input field, default is an empty string
    ...props  // Spread operator to capture any other props
}, ref) {
    // Generating a unique ID for the input element
    const id = useId()
    
    // Returning the JSX for the component
    return (
        <div className='w-full'>  {/* Full width container for the input field */}
            {/* Conditionally rendering the label if it is provided */}
            {label && (
                <label 
                    className='inline-block mb-1 pl-1' /* Styling for the label */
                    htmlFor={id}  /* Linking the label to the input field using the unique ID */
                >
                    {label}  {/* Displaying the label text */}
                </label>
            )}
            {/* Input element */}
            <input
                type={type}  /* Setting the type of the input field */
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}  /* Adding CSS classes for styling */
                ref={ref}  /* Forwarding the ref to the input element */
                {...props}  /* Spreading any additional props onto the input element */
                id={id}  /* Setting the ID for the input element */
            />
        </div>
    )
})

// Exporting the Input component so it can be used in other parts of the application
export default Input
