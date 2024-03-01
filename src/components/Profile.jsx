import Nav from './Nav'

function Profile() {
  return (
    <div className="container mx-auto">
      <Nav />
      <div className="border border-gray-300 p-5 rounded-md">
        <form>
          <div className="text-lg font-bold ">Your Profile</div>
          {/* Create Profile photo & Photo route */}
          <div className="flex gap-2 mt-4">
            <img
              src="https://randomuser.me/api/portraits/men/81.jpg"
              alt="John Lopez"
              className="border rounded-full  w-16"
            />
            <div className="flex justify-center w-full self-center">
              <input
                type="text"
                placeholder="https://randomuser.me/api/portraits/men/81.jpg"
                className="border border-gray-200 w-full p-2 rounded-md"
              />
            </div>
          </div>
          {/* First name */}
          <div className="text-gray-400 pt-4">First Name</div>
          <input
            type="text"
            placeholder="John"
            className="border border-gray-200 w-full p-2 rounded-md placeholder-black "
          />
          {/* Last name */}
          <div className="text-gray-400 pt-2">Last Name</div>
          <input
            type="text"
            placeholder="Lopez"
            className="border border-gray-200 w-full p-2 rounded-md placeholder-black"
          />
          {/* Email */}
          <div className="text-gray-400 pt-2">Email</div>
          <input
            type="Email"
            placeholder="john.lopez@gmail.com"
            className="border border-gray-200 w-full p-2 rounded-md placeholder-black"
          />
          {/* Buttons */}
          <div className="flex justify-between mt-4">
            <button className="border rounded bg-rose-400 hover:bg-rose-500 text-white p-2">
              Save Changes
            </button>
            <button className="border rounded bg-white hover:bg-gray-100 text-black py-2 px-4">
              Logout
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Profile
