/* eslint-disable jsx-a11y/img-redundant-alt */
import Gallery from './Gallery'
import Nav from './Nav'
import Reviews from './Reviews'
import { useState, useEffect } from 'react'

function House() {
  //creating variables for getting booking date
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [nights, setNights] = useState(0)
  // eslint-disable-next-line
  const [totalPrice, setTotalPrice] = useState(0)

  const house = {
    location: 'Phuket, Thailand',
    rooms: 2,
    bathrooms: 2,
    description: `Nestled on a serene beachfront, this charming Airbnb house offers a
            picturesque escape. The exterior boasts a classic beach house
            aesthetic with weathered wood siding and a spacious wraparound deck,
            perfect for savoring the ocean breeze. Inside, you're greeted by an
            open-concept living area bathed in natural light, complemented by
            cozy furnishings and nautical accents. The house features three
            comfortable bedrooms, each with a unique coastal theme, and two
            modern bathrooms. The fully equipped kitchen opens to a dining area
            that's ideal for intimate meals or entertaining guests. Large glass
            doors in the living room lead to the deck, where you can enjoy
            stunning sunset views over the ocean. This idyllic retreat is a
            stone's throw away from the soft sandy beach, making it the perfect
            spot for beach lovers and those seeking a tranquil getaway.`,
    price: 120,
    rating: 4.5,
    host: {
      firstName: 'Linda',
      lastName: 'Smith',
      picture: 'https://randomuser.me/api/portraits/women/85.jpg'
    },
    images: [
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png',
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_02.png',
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_03.png',
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_04.png',
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_05.png',
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_06.png',
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_07.png',
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_08.png',
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_09.png'
    ]
  }
  // useEffect to calculate nights from checkin and checkout date
  //create a new Date object based on the provided startDate and endDate
  //getTime() method is a function of the Date object that returns the value number of milliseconds.
  //1000 milliseconds in a second (1000). 60 seconds in a minute and 60 minutes in an hour (3600).24 hours in a day (24).
  // If nights is falsy, the value assigned will be 0.
  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate)
      const end = new Date(endDate)
      const calculateTime = end.getTime() - start.getTime()
      const nights = Math.ceil(calculateTime / (1000 * 3600 * 24))
      setNights(nights || 0)
    }
  }, [startDate, endDate])

  // useEffect to update totalPrice
  useEffect(() => {
    setTotalPrice(nights * house.price)
  }, [nights, house.price])

  // Function to get check-in date from the form
  const getCheckInDate = (e) => {
    setStartDate(e.target.value)
  }

  // Function to get check-out date from the form
  const getCheckOutDate = (e) => {
    setEndDate(e.target.value)
  }
  return (
    <div className="container mx-auto">
      <Nav />
      <Gallery images={house.images} />
      <div className="grid grid-cols-3 gap-30">
        <div className=" col-span-2">
          <div className=" text-3xl font-bold mt-5">{house.location}</div>
          <div className="flex text-gray-400 mt-4 text-sm gap-2">
            <div>{house.rooms}</div>
            <div> rooms • </div>
            <div>{house.bathrooms}</div>
            <div>bathrooms</div>
          </div>
          <div className="flex col-span-2 justify-start gap-1 mt-8">
            <div>
              <img
                src={house.host.picture}
                alt={`${house.host.firstName} is hosting this house`}
                className="rounded-full h-14 w-14"
              />
            </div>
            <div>
              <div className=" text-gray-400 text-sm">Hosted by</div>
              <div className="flex gap-1">
                <div>{house.host.firstName}</div>
                <div>{house.host.lastName}</div>
              </div>
            </div>
          </div>
          <div className="my-8 text-sm">{house.description}</div>
        </div>

        {/* booking form */}
        <div className="border border-gray-200 self-start my-5 ml-5 p-4 rounded-md">
          <form>
            <span className="flex text-xl font-bold">
              <div>$</div>
              <div>{house.price}</div>
            </span>
            <span className=" text-gray-400 font-bold text-sm"> /night</span>
            <div className="flex justify-between mt-5 gap-1">
              {/* checkin date */}
              <div className="w-full">
                <div className=" text-xs text-gray-400">Check-in</div>
                <input
                  type="date"
                  className="border border-gray-200 rounded-md p-2 w-full"
                  value={startDate}
                  onChange={getCheckInDate}
                />
              </div>
              {/* checkout date */}
              <div className="w-full">
                <div className=" text-xs text-gray-400">Check-out</div>
                <input
                  type="date"
                  className="border border-gray-200 rounded-md p-2 w-full"
                  value={endDate}
                  onChange={getCheckOutDate}
                />
              </div>
            </div>
            <textarea
              placeholder="Please send a message to the host..."
              className="border border-gray-200 rounded-md mt-2 w-full p-2"
              rows="7"
            ></textarea>
            <div className="flex justify-between">
              {/* total nights */}
              <div className="flex self-center">
                <span>{nights} nights = </span>
                <span className="font-bold">$360</span>
              </div>
              <button className=" bg-rose-400 text-white py-3 px-4 rounded-md">
                Reserve
              </button>
            </div>
          </form>
        </div>
      </div>
      <Reviews house={house} />
    </div>
  )
}
export default House
