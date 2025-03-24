import React from 'react'

const SignUp = () => {
  return (
    <>
    <div className="bg-gray-100 dark:bg-gray-900 flex items-center justify-center min-h-screen transition-colors duration-300">
    <div className="w-full max-w-md bg-white dark:bg-gray-800 dark:text-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form action="#" method="POST">
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium">Full Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name"
                    className="mt-1 w-full p-2 rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email"
                    className="mt-1 w-full p-2 rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>

            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password"
                    className="mt-1 w-full p-2 rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>

            <div className="mb-4">
                <label htmlFor="confirm-password" className="block text-sm font-medium">Confirm Password</label>
                <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password"
                    className="mt-1 w-full p-2 rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>

            <button type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300">
                Sign Up
            </button>
        </form>

        <p className="mt-4 text-center text-sm">
            Already have an account? 
            <a href="#" className="text-blue-500 hover:underline">Login</a>
        </p>
    </div>
    </div>
    </>
  )
}

export default SignUp;