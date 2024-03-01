import Nav from './Nav'
import { Link } from 'react-router-dom'

function HouseEdit() {
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
                placeholder="Bali"
                className="border border-gray-200 rounded-md p-2 w-full placeholder-black"
              />
              <div className=" text-gray-400 mt-2 text-sm">Bedrooms</div>
              <input
                type="number"
                placeholder="3"
                className="border border-gray-200 rounded-md p-2 w-full placeholder-black"
              />
              <div className=" text-gray-400 mt-2 text-sm">Bathrooms</div>
              <input
                type="number"
                placeholder="2"
                className="border border-gray-200 rounded-md p-2 w-full placeholder-black"
              />
              <div className=" text-gray-400 mt-2 text-sm">Price per Night</div>
              <input
                type="number"
                placeholder="140"
                className="border border-gray-200 rounded-md p-2 w-full placeholder-black"
              />
              <div className=" text-gray-400 mt-2 text-sm">Description</div>
              <textarea
                className="border border-gray-200 rounded-md p-2 w-full text-sm"
                rows="4"
              >
                This enchanting Airbnb villa in Bali offers an exquisite blend
                of traditional Balinese architecture and modern luxury. Tucked
                away in lush tropical greenery, the villa features a stunning
                open-air living space that allows the gentle Balinese breeze to
                flow through, creating a tranquil and refreshing ambiance.
              </textarea>
            </div>
            {/* col 2 */}
            <div>
              <div className=" text-gray-400 mt-2 text-sm">Photos</div>
              <input
                type="text"
                placeholder="https://www.haikuacademy.com/photos/01.png"
                className="border border-gray-200 rounded-md p-2 w-full placeholder-black"
              />
              <input
                type="text"
                placeholder="https://www.haikuacademy.com/photos/02.png"
                className="border border-gray-200 rounded-md p-2 w-full mt-2 placeholder-black"
              />
              <input
                type="text"
                placeholder="https://www.haikuacademy.com/photos/03.png"
                className="border border-gray-200 rounded-md p-2 w-full mt-2 placeholder-black"
              />
              <input
                type="text"
                placeholder="https://www.haikuacademy.com/photos/04.png"
                className="border border-gray-200 rounded-md p-2 w-full mt-2 placeholder-black"
              />
              <input
                type="text"
                placeholder="https://www.haikuacademy.com/photos/05.png"
                className="border border-gray-200 rounded-md p-2 w-full mt-2 placeholder-black"
              />
              <input
                type="text"
                placeholder="https://www.haikuacademy.com/photos/06.png"
                className="border border-gray-200 rounded-md p-2 w-full mt-2 placeholder-black"
              />
              <input
                type="text"
                placeholder="https://www.haikuacademy.com/photos/07.png"
                className="border border-gray-200 rounded-md p-2 w-full mt-2 placeholder-black"
              />
              <input
                type="text"
                placeholder="https://www.haikuacademy.com/photos/08.png"
                className="border border-gray-200 rounded-md p-2 w-full mt-2 placeholder-black"
              />
              <input
                type="text"
                placeholder="https://www.haikuacademy.com/photos/09.png"
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
