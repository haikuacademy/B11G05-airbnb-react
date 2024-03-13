import Nav from './Nav'
import HouseCard from './HouseCard'
import { useState } from 'react'
import axios from 'axios'

function Listings() {
  const [listings, setListings] = useState([
    {
      location: 'Phuket, Thailand',
      rooms: 2,
      bathrooms: 2,
      price: 120,
      rating: 4.5,
      reviews: 34,
      photo:
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_02.png'
    },
    {
      location: 'Bali, Indonesia',
      rooms: 3,
      bathrooms: 2,
      price: 190,
      rating: 5,
      reviews: 12,
      photo:
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_08.png'
    }
  ])

  const createHouse = async (event) => {
    event.preventDefault() // Prevent page reload
    const formData = new FormData(event.target)
    const formObject = Object.fromEntries(formData.entries())

    formObject.photos = formData.getAll('photos')
    console.log('formObject: ', formObject)

    // Extract data from the form
    const houseData = {
      location: formData.get('location'),
      rooms: parseInt(formData.get('bedrooms')),
      bathrooms: parseInt(formData.get('bathrooms')),
      price: parseInt(formData.get('price')),
      description: formData.get('description'),
      photos: [...formData.getAll('photos')]
    }

    try {
      // Send houseData to the API
      const response = await axios.post(
        'https://haiku-bnb.onrender.com/houses',
        formObject
      )
      console.log('response.data: ', response.data)
      // Update state with the newly created house object
      setListings((prevListings) => [...prevListings, response.data])
    } catch (error) {
      console.error('Error creating house:', error)
      // Display error message near the Submit button
    }
  }

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
                defaultValue="Bali"
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
                type="text"
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
          </div>
        </div>
      </form>
      <div className="grid gap-4 grid-cols-5 mt-4 mb-20">{listOfListings}</div>
    </div>
  )
}
export default Listings
