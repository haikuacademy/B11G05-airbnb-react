import Nav from './Nav'
import { Link } from 'react-router-dom'

function HouseEdit() {
  const isLoggedIn = localStorage.getItem('isLoggedIn')
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
  return (
    <div className="container mx-auto">
      <Nav />
      <form>
        <div className="border border-gray-200 p-2 rounded-md mt-2">
          <div className="grid gap-32 grid-cols-2 ">
            {/* col 1 */}
            <div className="grid items-center">
              <div>Edit your listing</div>
              <div className=" text-gray-400 mt-2 text-sm">Location</div>
              <input
                type="text"
                placeholder={house.location}
                className="border border-gray-200 rounded-md p-2 w-full placeholder-black"
              />
              <div className=" text-gray-400 mt-2 text-sm">Bedrooms</div>
              <input
                type="number"
                placeholder={house.rooms}
                className="border border-gray-200 rounded-md p-2 w-full placeholder-black"
              />
              <div className=" text-gray-400 mt-2 text-sm">Bathrooms</div>
              <input
                type="number"
                placeholder={house.bathrooms}
                className="border border-gray-200 rounded-md p-2 w-full placeholder-black"
              />
              <div className=" text-gray-400 mt-2 text-sm">Price per Night</div>
              <input
                type="number"
                placeholder={house.price}
                className="border border-gray-200 rounded-md p-2 w-full placeholder-black"
              />
              <div className=" text-gray-400 mt-2 text-sm">Description</div>
              <textarea
                className="border border-gray-200 rounded-md p-2 w-full text-sm"
                rows="4"
              >
                {house.description}
              </textarea>
            </div>
            {/* col 2 */}
            <div>
              <div className=" text-gray-400 mt-2 text-sm">Photos</div>
              <input
                type="text"
                placeholder={house.images[0]}
                className="border border-gray-200 rounded-md p-2 w-full placeholder-black"
              />
              <input
                type="text"
                placeholder={house.images[1]}
                className="border border-gray-200 rounded-md p-2 w-full mt-2 placeholder-black"
              />
              <input
                type="text"
                placeholder={house.images[2]}
                className="border border-gray-200 rounded-md p-2 w-full mt-2 placeholder-black"
              />
              <input
                type="text"
                placeholder={house.images[3]}
                className="border border-gray-200 rounded-md p-2 w-full mt-2 placeholder-black"
              />
              <input
                type="text"
                placeholder={house.images[4]}
                className="border border-gray-200 rounded-md p-2 w-full mt-2 placeholder-black"
              />
              <input
                type="text"
                placeholder={house.images[5]}
                className="border border-gray-200 rounded-md p-2 w-full mt-2 placeholder-black"
              />
              <input
                type="text"
                placeholder={house.images[6]}
                className="border border-gray-200 rounded-md p-2 w-full mt-2 placeholder-black"
              />
              <input
                type="text"
                placeholder={house.images[7]}
                className="border border-gray-200 rounded-md p-2 w-full mt-2 placeholder-black"
              />
              <input
                type="text"
                placeholder={house.images[8]}
                className="border border-gray-200 rounded-md p-2 w-full mt-2 placeholder-black"
              />
            </div>
          </div>
          {/* buttons */}
          <div className="flex justify-start gap-2 mt-2">
            <button className=" bg-rose-400 text-white rounded-md p-3">
              Save Changes
            </button>
            <Link to="/listings" className="hover:text-rose-400">
              <button className="border border-gray-200 rounded-md py-3 px-6">
                Cancel
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}
export default HouseEdit

//  {isLoggedIn ? (
//           <>
//             <Link to="/bookings">
//               <button className="border border-gray-300 rounded-md p-2">
//                 My Bookings
//               </button>
//             </Link>
