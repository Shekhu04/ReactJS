import React, { useId } from 'react'; // Import React and the useId hook from 'react'

/**
 * Select component definition.
 * It takes props such as options (array of options), label (optional label for the select), 
 * className (additional class names), and any other props.
 * The ref is forwarded to the underlying select element.
 */
function Select({ options, label, className, ...props }, ref) {
    const id = useId(); // Generate a unique ID for the select element

    return (
        <div className='w-full'> {/* A div wrapper with full width */}
            {label && <label htmlFor={id} className=''>{label}</label>} {/* Conditionally render a label if provided */}
            <select
                {...props} // Spread other props onto the select element
                id={id} // Assign the unique ID to the select element for accessibility
                ref={ref} // Forward the ref to the select element
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`} // Apply various class names for styling
            >
                {options?.map((option) => ( // Map through the options array to render option elements
                    <option key={option} value={option}> {/* Each option gets a key and value */}
                        {option} {/* Display the option text */}
                    </option>
                ))}
            </select>
        </div>
    );
}

// Export the Select component, using React.forwardRef to forward refs to the Select component
export default React.forwardRef(Select);
