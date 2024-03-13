import Nav from './Nav'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

function HouseEdit() {
  //params
  const params = useParams()
  console.log(params)

  const [house, setHouse] = useState({
    images: []
  })
  //Create an async function getHouse that uses axios to get a house object from the API url /houses/1
  // then sets the object as the value of the house state variable
  const getHouse = async () => {
    let { data } = await axios.get(
      `https://haiku-bnb.onrender.com/houses/${params.id}`
    )
    console.log('data------->', data)
    setHouse(data)
  }
  // Use the useEffect hook to trigger the getHouse function when the component loads
  useEffect(() => {
    getHouse()
  }, [])

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
