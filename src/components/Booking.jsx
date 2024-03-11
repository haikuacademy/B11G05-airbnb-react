import { useState, useEffect } from 'react'

function Booking({ house }) {
  //creating variables for getting booking date
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [nights, setNights] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  console.log(house)
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
    if (house) {
      setTotalPrice(nights * house.price)
    }
  }, [nights])

  // Function to get check-in date from the form
  const getCheckInDate = (e) => {
    setStartDate(e.target.value)
  }

  // Function to get check-out date from the form
  const getCheckOutDate = (e) => {
    setEndDate(e.target.value)
  }

  return (
    <>
      {/* booking form */}
      {house ? (
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
                <span className="font-bold">{`$ ${totalPrice}`}</span>
              </div>
              <button className=" bg-rose-400 text-white py-3 px-4 rounded-md">
                Reserve
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </>
  )
}
export default Booking
