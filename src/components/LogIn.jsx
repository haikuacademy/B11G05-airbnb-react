import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

function LogIn() {
  //State
  const [emailisValid, setEmailisValid] = useState(true)
  const [error, setError] = useState('')

  // Functions
  const validateEmail = (email) => {
    if ((email.includes('@') && email.includes('.')) || !email) {
      console.log(email)
      setEmailisValid(true)
    } else {
      console.log('not valid')
      setEmailisValid(false)
    }
  }
  const submitForm = async (e) => {
    e.preventDefault()
    console.log(e.target.email.value)
    console.log(e.target.password.value)
    const response = await axios.post('https://haiku-bnb.onrender.com/login', {
      email: e.target.email.value,
      password: e.target.password.value
    })
  }
  if (response.data.error) {
    setError(response.data.error)
  } else {
    setError(response.data.message)
  }
}
// Effect Hookss

// JSX

return (
  <div className="flex mx-auto justify-center mt-12">
    <div className="border rounded p-6 shadow-md w-72">
      <div className=" flex justify-center">
        <img
          src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1642399114/portal/web%20development%20beginners/05%20Project%20Airbnb/assets/logo-airbnb.png"
          alt="Airbnb logo"
          className="w-20 mb-4"
        />
      </div>

      <form className="space-y-2">
        <div className="space-y-1">
          <div className="text-gray-400 text-xs">Email</div>
          {!emailisValid && <span>Invalid Email</span>}
          <input
            type="email"
            className="border w-full p-1 rounded"
            onChange={(e) => validateEmail(e.target.value)}
            autoFocus
          />
        </div>
        <div className="space-y-1">
          <div className="text-gray-400 text-xs">Password</div>
          <input type="password" className="border w-full p-1 rounded" />
        </div>
        <div className="flex justify-center">
          <button className="border rounded bg-rose-400 hover:bg-rose-500 text-white p-12 py-2 mt-2 w-full">
            Login
          </button>
          <span>{error}</span>
        </div>
      </form>

      <div className="flex text-xs mt-3 gap-2">
        <div>New to Airbnb?</div>
        <Link to="/signup" className="text-rose-400 hover:text-rose-500">
          Create an Account
        </Link>
      </div>
    </div>
  </div>
)

export default LogIn
