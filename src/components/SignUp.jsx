import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function SignUp() {
  // State
  const [firstName, setFirstName] = useState(true)
  const [lastName, setLastName] = useState(true)
  const [emailisValid, setEmailIsValid] = useState(true)
  const [passwordIsValid, setPasswordIsValid] = useState(true)
  const [Picture, setPicture] = useState(true)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  // Functions
  const validateEmail = (email) => {
    if (email.includes('@') && email.includes('.')) {
      console.log(email)
      setEmailIsValid(true)
    } else {
      console.log('not valid')
      setEmailIsValid(false)
    }
  }
  const validatePassword = (password) => {
    if (password.length > 6) {
      console.log(password)
      setPasswordIsValid(true)
    } else {
      console.log('not valid')
      setPasswordIsValid(false)
    }
  }
  const validateFirstName = (first_name) => {
    if (first_name.includes('')) {
      console.log(first_name)
      setFirstName(true)
    } else {
      console.log('not valid')
      setFirstName(false)
    }
  }
  const validateLastName = (last_name) => {
    if (last_name.includes('')) {
      console.log(last_name)
      setLastName(true)
    } else {
      console.log('not valid')
      setLastName(false)
    }
  }
  const validateProfilePicture = (profile_picture) => {
    if (profile_picture.includes('')) {
      console.log(profile_picture)
      setPicture(true)
    } else {
      console.log('not valid')
      setPicture(false)
    }
  }

  const submitForm = async (e) => {
    e.preventDefault()
    const formData = {
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      picture: e.target.picture.value
    }
    console.log(formData)
    try {
      const response = await axios.post(
        'https://haiku-bnb.onrender.com/signup',
        formData
      )
      console.log(response)
      if (response.data.error) {
        setError(response.data.error)
      } else {
        // setError(response.data.message)
        navigate('/')
      }
    } catch (error) {
      console.error(error)
      setError()
    }
  }

  return (
    <div className="flex mx-auto justify-center mt-12">
      <div className="border rounded p-6 shadow-md w-72">
        <Link to="/" className=" flex justify-center">
          <img
            src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1642399114/portal/web%20development%20beginners/05%20Project%20Airbnb/assets/logo-airbnb.png"
            alt="Airbnb logo"
            className="w-20 mb-4"
          />
        </Link>

        <form className="space-y-2" onSubmit={submitForm}>
          <div className="space-y-1">
            <div className="text-gray-400 text-xs">First Name</div>
            <input
              name="first_name"
              type="text"
              className="border w-full p-1 rounded"
              autoFocus
              onChange={(e) => validateFirstName(e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <div className="text-gray-400 text-xs">Last Name</div>
            <input
              name="last_name"
              type="text"
              className="border w-full p-1 rounded"
              onChange={(e) => validateLastName(e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <div className="text-gray-400 text-xs">Email</div>
            <input
              name="email"
              type="email"
              className="border w-full p-1 rounded"
              onChange={(e) => validateEmail(e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <div className="text-gray-400 text-xs">Password</div>
            <input
              name="password"
              type="password"
              className="border w-full p-1 rounded"
              onChange={(e) => validatePassword(e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <div className="text-gray-400 text-xs">Profile Picture</div>

            <input
              name="picture"
              type="text"
              placeholder="https://..."
              className="border w-full p-1 rounded"
              onChange={(e) => validateProfilePicture(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <button className="border rounded bg-rose-400 hover:bg-rose-500 text-white p-12 py-2 mt-2 w-full">
              Register
            </button>
          </div>
          {!firstName && (
            <span
              className="flex justify-center text-red-400 p-8 py-2
              w-full text-xs"
            >
              first name is required
            </span>
          )}
          {!lastName && (
            <span
              className="flex justify-center text-red-400 p-8 py-2
              w-full text-xs"
            >
              last name is required
            </span>
          )}
          {!emailisValid && (
            <span
              className="flex justify-center text-red-400 p-8 py-2
              w-full text-xs"
            >
              invalid email
            </span>
          )}
          {!passwordIsValid && (
            <span
              className="flex justify-center text-red-400 p-8 py-2
              w-full text-xs"
            >
              password too short
            </span>
          )}
          {!Picture && (
            <span
              className="flex justify-center text-red-400 p-8 py-2
              w-full text-xs"
            >
              profile picture required
            </span>
          )}
        </form>

        <div className="flex text-xs mt-3 gap-2">
          <div>Already have an account?</div>
          <Link to="/login" className="text-rose-400 hover:text-rose-500">
            Login here
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp
