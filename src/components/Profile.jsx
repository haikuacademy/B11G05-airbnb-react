import Nav from './Nav'
import { useState } from 'react'

function Profile() {
  // Data
  const user = {
    firstName: 'Juan',
    lastName: 'Dela Cruz',
    email: 'jdelacruz@gmail.com',
    profile_picture: 'https://randomuser.me/api/portraits/men/81.jpg'
  }
  // Create Hook for useState
  const [picture, setPicture] = useState(user.profile_picture)

  return (
    <div className="container mx-auto">
      <Nav />
      <div className="border border-gray-300 p-5 rounded-md">
        <form>
          <div className="text-lg font-bold ">Your Profile</div>
          {/* Create Profile photo & Photo route */}
          <div className="flex gap-2 mt-4">
            <img
              src={picture}
              alt="John Lopez"
              className="border rounded-full  w-16"
            />
            <div className="flex justify-center w-full self-center">
              <input
                type="text"
                placeholder={user.profile_picture}
                className="border border-gray-200 w-full p-2 rounded-md"
                onChange={(event) => {
                  setPicture(event.target.value)
                }}
              />
            </div>
          </div>
          {/* First name */}
          <div className="text-gray-400 pt-4">First Name</div>
          <input
            type="text"
            placeholder={user.firstName}
            className="border border-gray-200 w-full p-2 rounded-md placeholder-black "
          />
          {/* Last name */}
          <div className="text-gray-400 pt-2">Last Name</div>
          <input
            type="text"
            placeholder={user.lastName}
            className="border border-gray-200 w-full p-2 rounded-md placeholder-black"
          />
          {/* Email */}
          <div className="text-gray-400 pt-2">Email</div>
          <input
            type="Email"
            placeholder={user.email}
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
