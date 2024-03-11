import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
axios.defaults.withCredentials = true
function LogIn() {
  //state
  // const [emailisValid, setEmailIsValid] = useState(true)
  const [error, setError] = useState('')

  // declare useNavigate
  const navigate = useNavigate()

  //function to validate email
  // const validateEmail = (email) => {
  //   if (email.includes('@') && email.includes('.')) {
  //     setEmailIsValid(true)
  //     console.log('valid email', email)
  //   } else {
  //     console.log('not valid')
  //     setEmailIsValid(false)
  //   }
  // }
  //function to prevent default then post data to api
  const submitForm = async (e) => {
    e.preventDefault()
    let form = new FormData(e.target)
    // console.log('email', e.target.email.value)
    // console.log('password', e.target.password.value)
    let formObject = Object.fromEntries(form.entries())
    console.log('formobj', formObject)
    const response = await axios.post(
      'https://haiku-bnb.onrender.com/login',
      //or instead of passing formObject, passing the body like this
      // email: e.target.email.value,
      // password: e.target.password.value
      formObject
    )
    console.log(response)
    // show error message
    if (response.data.error) {
      setError(response.data.error)
      console.log('response', response.data.error)
      console.log(response.data.error)
      // console.log(error)
    } else if (response.data.message) {
      setError(response.data.message)
      navigate('/')
    }
  }

  return (
    <div className="flex mx-auto justify-center mt-12">
      <div className="border rounded p-6 shadow-md w-72">
        <div className=" flex justify-center">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1642399114/portal/web%20development%20beginners/05%20Project%20Airbnb/assets/logo-airbnb.png"
              alt="Airbnb logo"
              className="w-20 mb-4"
            />
          </Link>
        </div>

        <form className="space-y-2" onSubmit={submitForm}>
          <div className="space-y-1">
            <div className="text-gray-400 text-xs">Email</div>
            <input
              // onChange={(e) => validateEmail(e.target.value)}
              name="email"
              type="email"
              className="border w-full p-1 rounded"
              autoFocus
            />
          </div>
          <div className="space-y-1">
            <div className="text-gray-400 text-xs">Password</div>
            <input
              name="password"
              type="password"
              className="border w-full p-1 rounded"
            />
          </div>
          <div className="flex justify-center">
            <button className="border rounded bg-rose-400 hover:bg-rose-500 text-white p-12 py-2 mt-2 w-full">
              Login
            </button>
          </div>
        </form>
        {/* add error message */}
        {/* {emailisValid ? null : (
          <span className="flex justify-center text-red-500 text-xs">
            Invalid Email
          </span>
        )} */}
        {error ? (
          <span className="flex justify-center text-red-500 text-xs">
            {error}
          </span>
        ) : null}

        <div className="flex text-xs mt-3 gap-2">
          <div>New to Airbnb?</div>
          <Link to="/signup" className="text-rose-400 hover:text-rose-500">
            Create an Account
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LogIn
