import Nav from './Nav'

function Profile() {
  return (
    <div className="container mx-auto">
      <Nav />
      <div className="border border-gray-300 p-5">
        <form>
          <div className="text-lg font-bold ">Your Profile</div>
          {/* Create Profile photo & Photo route */}
          <div className="flex gap-2 ">
            <img
              src="https://randomuser.me/api/portraits/men/81.jpg"
              alt="John Lopez"
              className="border rounded-full  w-16"
            />
            <input
              type="text"
              placeholder="https://randomuser.me/api/portraits/men/81.jpg"
              className="border border-gray-200 w-full "
            />
          </div>
          {/* First name */}
          <div>First</div>
          {/* Last name */}
          <div>Last Name</div>
          {/* Email */}
          <div>Email</div>
          {/* Buttons */}
          <div>
            <button>Save Change</button>
            <button>Log Out</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Profile
