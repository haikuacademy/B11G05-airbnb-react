/* eslint-disable jsx-a11y/img-redundant-alt */
import Gallery from './Gallery'
import Nav from './Nav'
import Reviews from './Reviews'
import { useState, useEffect } from 'react'
import axios from 'axios'

function House() {
  //Replace the hardcoded house with a an empty object, using the useState hook
  const [house, setHouse] = useState({})
  const [loading, setLoading] = useState(true)
  //Create an async function getHouse that uses axios to get a house object from the API url /houses/1,
  // then sets the object as the value of the house state variable
  const getHouse = async () => {
    let { data } = await axios.get('https://haiku-bnb.onrender.com/houses/1')
    console.log('data------->', data)
    setHouse(data)
    console.log('house---->', house)
    setLoading(false)
  }
  // Use the useEffect hook to trigger the getHouse function when the component loads
  useEffect(() => {
    getHouse()
  }, [loading])

  //creating variables for getting booking date
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [nights, setNights] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

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

      {/* if it's' loading, show loading */}
      {loading ? (
        <div>loading...</div>
      ) : (
        <>
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
                <span className=" text-gray-400 font-bold text-sm">
                  {' '}
                  /night
                </span>
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
                    <span className="font-bold">{`$ ${totalPrice}`}</span>
                  </div>
                  <button className=" bg-rose-400 text-white py-3 px-4 rounded-md">
                    Reserve
                  </button>
                </div>
              </form>
            </div>
          </div>
          <Reviews house={house} />
        </>
      )}
    </div>
  )
}
export default House
