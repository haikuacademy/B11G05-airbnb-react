import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faCommentDots } from '@fortawesome/free-regular-svg-icons'

function HouseCard(props) {
  const booking = props.house
  console.log(props)
  const isBooking = props.isBooking
  const isListing = props.isListing

  console.log(props)
  return (
    //  used a template literal (${props.house.house_id}) to dynamically generate the URL based on the house_id value from props
    <Link to={`/houses/${booking.house_id}`}>
      <div className="border border-gray-300 rounded-md pb-5 hover:shadow">
        {/* photo */}
        <div className="w-70">
          <img
            src={`${booking.photo}`}
            alt={`house in ${booking.location}`}
            className="w-full rounded-tr-md rounded-tl-md"
          />
        </div>
        {/* location, room, and price */}
        <div className=" pl-5 pr-5">
          <div className=" text-lg font-bold">{booking.location}</div>
          <div className=" text-gray-500">{`${booking.rooms} rooms • ${booking.bathrooms} bathrooms`}</div>
          <div className=" text-xl font-bold">{`$ ${booking.price}`}</div>
          <div className="flex justify-between mt-3">
            {/* ratings and stars */}
            <span className="flex gap-x-1">
              <div>
                {[...new Array(Math.floor(booking.rating))].map((i, index) => (
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: '#FFD43B' }}
                    key={index}
                  />
                ))}
              </div>
              <div>{booking.rating}</div>
            </span>
            {/* total reviews */}
            <span className="flex gap-x-1">
              <div>{booking.reviews}</div>
              <div>
                <FontAwesomeIcon
                  icon={faCommentDots}
                  className="text-xs text-gray-500 ml-1"
                />
              </div>
            </span>
          </div>
        </div>
        {isBooking && (
          <div className="bg-green-50 p-2 mt-2 flex flex-col items-center">
            <p className="text-black">
              {booking.from_date} - {booking.to_date}
            </p>
            <p className="text-black font-bold">
              {booking.nights} nights = {booking.price_total}
            </p>
          </div>
        )}
        {/* for buttons in Listing Card */}
        {isListing && (
          <div className="flex justify-start px-2 gap-1 mt-3 ml-1">
            <Link to={`/houses/${booking.house_id}`}>
              <button className=" border border-gray-200 px-2 rounded-md">
                View
              </button>
            </Link>
            <Link to={`/houses/${booking.house_id}/edit`}>
              {/* <Link to="/houses//edit"> */}
              <button className=" border border-gray-200 px-2 rounded-md">
                Edit
              </button>
            </Link>
          </div>
        )}
      </div>
    </Link>
  )
}
export default HouseCard
