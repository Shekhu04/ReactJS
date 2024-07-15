import React, { useState } from 'react'; // Import React and useState hook
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate from react-router-dom for navigation
import { login as authLogin } from '../store/authSlice'; // Import login action from authSlice
import { Button, Input, Logo } from "./index"; // Import Button, Input, and Logo components
import { useDispatch } from "react-redux"; // Import useDispatch hook from react-redux
import authService from "../appwrite/auth"; // Import authService for authentication operations
import { useForm } from "react-hook-form"; // Import useForm hook from react-hook-form for form handling

function Login() {
    const navigate = useNavigate(); // Initialize useNavigate hook for navigation
    const dispatch = useDispatch(); // Initialize useDispatch hook for dispatching actions
    const { register, handleSubmit } = useForm(); // Initialize useForm hook and extract register and handleSubmit
    const [error, setError] = useState(""); // Initialize state for error message

    // Asynchronous function to handle login
    const login = async (data) => {
        setError(""); // Reset error message
        try {
            // Call authService.login with form data
            const session = await authService.login(data);
            if (session) {
                // Get current user data if session is created
                const userData = await authService.getCurrentUser();
                if (userData) {
                    // Dispatch login action with user data
                    dispatch(authLogin(userData));
                }
                // Navigate to home page
                navigate("/");
            }
        } catch (error) {
            // Set error message if login fails
            setError(error.message);
        }
    };

    return (
        // Main container for the login form
        <div className='flex items-center justify-center w-full'>
            {/* Inner container for the form, styled with Tailwind CSS classes */}
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                {/* Logo container */}
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" /> {/* Render Logo component */}
                    </span>
                </div>
                {/* Title for the login form */}
                <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
                {/* Link to sign up page */}
                <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
                {/* Display error message if there is any */}
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                {/* Form element with handleSubmit to handle form submission */}
                <form onSubmit={handleSubmit(login)} className='mt-8'>
                    <div className='space-y-5'>
                        {/* Input for email */}
                        <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) =>
                                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                },
                            })}
                        />
                        {/* Input for password */}
                        <Input
                            label="Password: "
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: true,
                            })}
                        />
                        {/* Submit button */}
                        <Button type="submit" className="w-full">Sign in</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login; // Export Login component as the default export
