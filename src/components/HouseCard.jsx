import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import { faCommentDots } from '@fortawesome/free-regular-svg-icons'
function HouseCard() {
  return (
    <Link to="/houses/1">
      <div className="border border-gray-300 rounded-md pb-5 hover:shadow">
        <div className="w-70">
          <img
            src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png
            "
            alt="Phuket house"
            className="w-full rounded-tr-md rounded-tl-md"
          />
        </div>
        <div className=" pl-5 pr-5">
          <div className=" text-lg font-bold">Phuket, Thailand</div>
          <div className=" text-gray-500">2 rooms • 2 bathrooms</div>
          <div className=" text-xl font-bold">$120</div>
          <div className="flex justify-between mt-3">
            <span>
              <FontAwesomeIcon
                icon={faStar}
                className="text-xs text-yellow-400 "
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-xs text-yellow-400"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-xs text-yellow-400"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-xs text-yellow-400"
              />
              <FontAwesomeIcon
                icon={faStarHalf}
                className="text-xs text-yellow-400"
              />
              4.5
            </span>
            <span>
              34{' '}
              <FontAwesomeIcon
                icon={faCommentDots}
                className="text-xs text-gray-500"
              />
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default HouseCard
