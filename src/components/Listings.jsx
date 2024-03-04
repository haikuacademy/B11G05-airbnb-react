import Nav from './Nav'
import HouseCard from './HouseCard'

function Listings() {
  let listings = [
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
  ]
  const listOfListings = listings.map((house, index) => (
    <HouseCard key={index} house={house} isListing={true} />
  ))
  return (
    <div className="container mx-auto">
      <Nav />
      <form>
        <div className="border border-gray-200 p-2 rounded-md mt-2">
          <div className="grid gap-32 grid-cols-2 ">
            {/* col 1 */}
            <div className="grid items-center">
              <div>List a house</div>
              <div className=" text-gray-400 mt-2 text-sm">Location</div>
              <input
                type="text"
                placeholder="Bali"
                className="border border-gray-200 rounded-md p-2 w-full placeholder-black"
              />
              <div className=" text-gray-400 mt-2 text-sm">Bedrooms</div>
              <input
                type="number"
                className="border border-gray-200 rounded-md p-2 w-full placeholder-black"
              />
              <div className=" text-gray-400 mt-2 text-sm">Bathrooms</div>
              <input
                type="number"
                className="border border-gray-200 rounded-md p-2 w-full placeholder-black"
              />
              <div className=" text-gray-400 mt-2 text-sm">Price per Night</div>
              <input
                type="number"
                className="border border-gray-200 rounded-md p-2 w-full placeholder-black"
              />
              <div className=" text-gray-400 mt-2 text-sm">Description</div>
              <textarea
                className="border border-gray-200 rounded-md p-2 w-full text-sm"
                rows="4"
              ></textarea>
            </div>
            {/* col 2 */}
            <div>
              <div className=" text-gray-400 mt-2 text-sm">Photos</div>
              <input
                type="text"
                className="border border-gray-200 rounded-md p-2 w-full placeholder-black"
              />
              <input
                type="text"
                className="border border-gray-200 rounded-md p-2 w-full mt-2 placeholder-black"
              />
              <input
                type="text"
                className="border border-gray-200 rounded-md p-2 w-full mt-2 placeholder-black"
              />
              <input
                type="text"
                className="border border-gray-200 rounded-md p-2 w-full mt-2 placeholder-black"
              />
              <input
                type="text"
                className="border border-gray-200 rounded-md p-2 w-full mt-2 placeholder-black"
              />
              <input
                type="text"
                className="border border-gray-200 rounded-md p-2 w-full mt-2 placeholder-black"
              />
              <input
                type="text"
                className="border border-gray-200 rounded-md p-2 w-full mt-2 placeholder-black"
              />
              <input
                type="text"
                className="border border-gray-200 rounded-md p-2 w-full mt-2 placeholder-black"
              />
              <input
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
