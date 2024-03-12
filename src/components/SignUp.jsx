import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
axios.defaults.withCredentials = true

function SignUp() {
  //create a "state" variable validEmail validPassword and error message
  const [validEmail, setValidEmail] = useState(true)
  const [validPassword, setValidPassword] = useState(true)
  const [error, setError] = useState('')
  // declare useNavigate
  const navigate = useNavigate()

  //functions
  //checks if email has @ and . validEmail is true
  const validateEmail = (email) => {
    if (email.includes('@') && email.includes('.')) {
      setValidEmail(true)
      console.log('valid email', email)
    } else {
      console.log('not valid', email)
      setValidEmail(false)
    }
  }
  //checks if password has more than 6 characters
  const validatePassword = (password) => {
    if (password.length > 6) {
      setValidPassword(true)
      console.log('valid password', password)
    } else {
      console.log('not valid', password)
      setValidPassword(false)
    }
  }
  //function to prevent default then post data to api
  const submitForm = async (e) => {
    e.preventDefault()
    console.log('email', e.target.email.value)
    console.log('password', e.target.password.value)

    const response = await axios.post('https://haiku-bnb.onrender.com/signup', {
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      picture: e.target.picture.value
    })
    console.log('response', response)
    // if you log in, navigate to the home page, if not, show error message
    if (response.data.error) {
      console.log(response.data.error)
      setError(response.data.error)
    } else {
      localStorage.setItem('isLoggedIn', true)
      navigate('/')
    }
  }
  return (
    <div className=" flex mx-auto justify-center m-5">
      <div className=" border rounded p-4">
        <form onSubmit={submitForm}>
          <div className=" flex justify-center">
            <img
              src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1642399114/portal/web%20development%20beginners/05%20Project%20Airbnb/assets/logo-airbnb.png
"
              alt="Sample"
              className=" w-20 mb-5"
            />
          </div>
          <div>
            <div>First Name</div>
            <input
              name="first_name"
              type="text"
              className="border m-2 w-full"
            />
          </div>
          <div>
            <div>Last Name</div>
            <input name="last_name" type="text" className="border m-2 w-full" />
          </div>
          <div>
            <span>Email</span>
            {/* add error message when validEmail is false*/}
            {validEmail ? null : (
              <span className=" text-red-500 text-xs pl-1">Invalid Email</span>
            )}
            <input
              onChange={(e) => validateEmail(e.target.value)}
              name="email"
              type="email"
              className="border m-2 w-full"
            />
          </div>
          <div>
            <span>Password</span>
            {/* add error message when validPassword is false*/}
            {validPassword ? null : (
              <span className=" text-red-500 text-xs pl-1">
                Password too short
              </span>
            )}
            <input
              onChange={(e) => validatePassword(e.target.value)}
              name="password"
              type="password"
              className="border m-2 w-full"
            />
          </div>
          <div>
            <div>Profile Picture</div>
            <input
              name="picture"
              type="text"
              placeholder=" https://..."
              className="border m-2 w-full"
            />
          </div>
          <button className=" border m-2 bg-rose-400 text-white p-4 py-2 mt-2 w-full">
            Register
          </button>
        </form>
        {error ? (
          <span className="flex justify-center text-red-500 text-xs">
            {error}
          </span>
        ) : null}
        <div className=" text-sm mt-4">Already have an account? Login here</div>
      </div>
    </div>
  )
}

export default SignUp
