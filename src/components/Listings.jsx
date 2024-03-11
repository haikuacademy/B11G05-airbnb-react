import Nav from './Nav'
import HouseCard from './HouseCard'
import axios from 'axios'
import { useState } from 'react'
axios.defaults.withCredentials = true

function Listings() {
  const [listings, setListings] = useState([])
  const [error, setError] = useState(false)
  //post request for form
  const createHouse = async (e) => {
    //1. prevent browser from reload
    e.preventDefault()
    //2 get data from form from e.target
    const form = new FormData(e.target)
    let formObject = Object.fromEntries(form.entries())
    console.log('formObject', formObject)
    //retrieves all 'photos' field in an array of strings
    formObject.photos = form.getAll('photos')
    console.log('formObject with photos', formObject)
    let response = await axios.post(
      'https://haiku-bnb.onrender.com/houses',
      formObject
    )
    console.log('response', response.data)
    // Update the state variable with the new house object
    if (response.data.error) {
      setError(response.data.error)
    } else {
      setListings([response.data, ...listings])
    }
  }

  // let listings = [
  //   {
  //     location: 'Phuket, Thailand',
  //     rooms: 2,
  //     bathrooms: 2,
  //     price: 120,
  //     rating: 4.5,
  //     reviews: 34,
  //     photo:
  //       'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_02.png'
  //   },
  //   {
  //     location: 'Bali, Indonesia',
  //     rooms: 3,
  //     bathrooms: 2,
  //     price: 190,
  //     rating: 5,
  //     reviews: 12,
  //     photo:
  //       'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_08.png'
  //   }
  // ]
  const listOfListings = listings.map((house, index) => (
    <HouseCard key={index} house={house} isListing={true} />
  ))
  return (
    <div className="container mx-auto">
      <Nav />
      <form onSubmit={createHouse}>
        <div className="border border-gray-200 p-2 rounded-md mt-2">
          <div className="grid gap-32 grid-cols-2 ">
            {/* col 1 */}
            <div className="grid items-center">
              <div>List a house</div>
              <div className=" text-gray-400 mt-2 text-sm">Location</div>
              <input
                name="location"
                type="text"
                placeholder="Bali"
                className="border border-gray-200 rounded-md p-2 w-full placeholder-black"
              />
              <div className=" text-gray-400 mt-2 text-sm">Bedrooms</div>
              <input
                name="rooms"
                type="number"
                className="border border-gray-200 rounded-md p-2 w-full placeholder-black"
              />
              <div className=" text-gray-400 mt-2 text-sm">Bathrooms</div>
              <input
                name="bathrooms"
                type="number"
                className="border border-gray-200 rounded-md p-2 w-full placeholder-black"
              />
              <div className=" text-gray-400 mt-2 text-sm">Price per Night</div>
              <input
                name="price"
                type="number"
                className="border border-gray-200 rounded-md p-2 w-full placeholder-black"
              />
              <div className=" text-gray-400 mt-2 text-sm">Description</div>
              <textarea
                name="description"
                className="border border-gray-200 rounded-md p-2 w-full text-sm"
                rows="4"
              ></textarea>
            </div>
            {/* col 2 */}
            <div>
              <div className=" text-gray-400 mt-2 text-sm">Photos</div>
              <input
                name="photos"
                type="text"
                className="border border-gray-200 rounded-md p-2 w-full placeholder-black"
              />
              <input
                name="photos"
                type="text"
                className="border border-gray-200 rounded-md p-2 w-full mt-2 placeholder-black"
              />
              <input
                name="photos"
                type="text"
                className="border border-gray-200 rounded-md p-2 w-full mt-2 placeholder-black"
              />
              <input
                name="photos"
                type="text"
                className="border border-gray-200 rounded-md p-2 w-full mt-2 placeholder-black"
              />
              <input
                name="photos"
                type="text"
                className="border border-gray-200 rounded-md p-2 w-full mt-2 placeholder-black"
              />
              <input
                name="photos"
                type="text"
                className="border border-gray-200 rounded-md p-2 w-full mt-2 placeholder-black"
              />
              <input
                name="photos"
                type="text"
                className="border border-gray-200 rounded-md p-2 w-full mt-2 placeholder-black"
              />
              <input
                name="photos"
                type="text"
                className="border border-gray-200 rounded-md p-2 w-full mt-2 placeholder-black"
              />
              <input
                name="photos"
                type="text"
                className="border border-gray-200 rounded-md p-2 w-full mt-2 placeholder-black"
              />
            </div>
          </div>
          {/* buttons */}
          <div className="flex justify-start gap-2 mt-2">
            <button className=" bg-rose-400 text-white rounded-md p-3">
              List House
            </button>
            {/* error message */}
            {error ? (
              <div className="self-center text-red-500 text-xs">{error}</div>
            ) : null}
          </div>
        </div>
      </form>
      <div className="grid gap-4 grid-cols-5 mt-4 mb-20">{listOfListings}</div>
    </div>
  )
}
export default Listings
