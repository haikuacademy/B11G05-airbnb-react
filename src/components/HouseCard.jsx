import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import { faCommentDots } from '@fortawesome/free-regular-svg-icons'

function HouseCard(props) {
  const house = props.house
  const booking = props.booking
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
        {/* for buttons in Listing Card */}
        {isListing && (
          <div>
            <button>edit</button>
            <button>view</button>
          </div>
        )}
      </div>
    </Link>
  )
}

export default HouseCard
