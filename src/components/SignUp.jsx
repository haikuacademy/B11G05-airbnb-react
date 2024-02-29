function SignUp() {
  return (
    <div className=" flex mx-auto justify-center m-5">
      <form className=" border rounded p-4">
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
          <input type="text" className="border m-2 w-full" />
        </div>
        <div>
          <div>Last Name</div>
          <input type="text" className="border m-2 w-full" />
        </div>
        <div>
          <div>Email</div> <input type="email" className="border m-2 w-full" />
        </div>
        <div>
          <div>Password</div>{' '}
          <input type="password" className="border m-2 w-full" />
        </div>
        <div>
          <div>Profile Picture</div>
          <input
            type="text"
            placeholder=" https://..."
            className="border m-2 w-full"
          />
        </div>
        <div className=" flex justify-center">
          <button className=" border m-2 bg-rose-400 text-white p-4 py-2 mt-2 w-full">
            Register
          </button>
        </div>

        <div className=" text-sm mt-4">
          {' '}
          Already have an account? Login here
        </div>
      </form>
    </div>
  )
}

export default SignUp
