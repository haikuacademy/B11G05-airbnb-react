import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className="flex justify-between my-2 items-center">
      <div className="w-20">
        <img
          src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1642399114/portal/web%20development%20beginners/05%20Project%20Airbnb/assets/logo-airbnb.png
"
          alt="airbnb logo"
        />
      </div>
      {/* my bookings button */}
      <div className="flex justify-center gap-1">
        <Link to="/bookings">
          <button className="border border-gray-300 rounded-md p-2">
            My Bookings
          </button>
        </Link>
        {/* my listings button */}
        <Link to="/listings">
          <button className="border border-gray-300 rounded-md p-2">
            My Listings
          </button>
        </Link>
        {/* my profile button */}
        <Link to="/profile">
          <button className="border border-gray-300 rounded-md p-2">
            <div className="flex gap-2">
              <img
                className=" rounded-full w-5"
                src="https://randomuser.me/api/portraits/men/81.jpg
"
                alt="John Lopez"
              />
              <div>Profile</div>
            </div>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Nav
