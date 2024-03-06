import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faCommentDots } from '@fortawesome/free-regular-svg-icons'

function HouseCard(props) {
  const booking = props.house
  const isBooking = props.isBooking
  const isListing = props.isListing

  console.log(props)
  return (
    <Link to="/houses/1">
      <div className="border border-gray-300 rounded-md pb-5 hover:shadow">
        {/* photo */}
        <div className="w-70">
          <img
            src={`${props.house.photo}`}
            alt={`house in ${props.house.location}`}
            className="w-full rounded-tr-md rounded-tl-md"
          />
        </div>
        {/* location, room, and price */}
        <div className=" pl-5 pr-5">
          <div className=" text-lg font-bold">{props.house.location}</div>
          <div className=" text-gray-500">{`${props.house.rooms} rooms • ${props.house.bathrooms} bathrooms`}</div>
          <div className=" text-xl font-bold">{`$ ${props.house.price}`}</div>
          <div className="flex justify-between mt-3">
            {/* ratings and stars */}
            <span className="flex gap-x-1">
              <div>
                {[...new Array(Math.floor(props.house.rating))].map(
                  (i, index) => (
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: '#FFD43B' }}
                      key={index}
                    />
                  )
                )}
              </div>
              <div>{props.house.rating}</div>
            </span>
            {/* total reviews */}
            <span className="flex gap-x-1">
              <div>{props.house.reviews}</div>
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
              {booking.startDate} - {booking.endDate}
            </p>
            <p className="text-black font-bold">
              {booking.totalNights} nights = ${booking.totalPrice}
            </p>
          </div>
        )}
        {/* for buttons in Listing Card */}
        {isListing && (
          <div className="flex justify-start px-2 gap-1 mt-3 ml-1">
            <Link to="/houses/:id">
              <button className=" border border-gray-200 px-2 rounded-md">
                View
              </button>
            </Link>
            <Link to="/houses/:id/edit">
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
