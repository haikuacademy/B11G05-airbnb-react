/* eslint-disable jsx-a11y/img-redundant-alt */
import Gallery from './Gallery'
import Nav from './Nav'
import Reviews from './Reviews'

function House() {
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
    }
  }

  return (
    <div className="container mx-auto">
      <Nav />
      <Gallery />
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
              <div className="w-full">
                <div className=" text-xs text-gray-400">Check-in</div>
                <input
                  type="date"
                  className="border border-gray-200 rounded-md p-2 w-full"
                />
              </div>
              <div className="w-full">
                <div className=" text-xs text-gray-400">Check-out</div>
                <input
                  type="date"
                  className="border border-gray-200 rounded-md p-2 w-full"
                />
              </div>
            </div>
            <textarea
              placeholder="Please send a message to the host..."
              className="border border-gray-200 rounded-md mt-2 w-full p-2"
              rows="7"
            ></textarea>
            <div className="flex justify-between">
              <div className="flex self-center">
                <span>3 nights = </span>
                <span className="font-bold">$360</span>
              </div>
              <button className=" bg-rose-400 text-white py-3 px-4 rounded-md">
                Reserve
              </button>
            </div>
          </form>
        </div>
      </div>
      <Reviews />
    </div>
  )
}
export default House
