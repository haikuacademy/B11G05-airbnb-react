/* eslint-disable jsx-a11y/img-redundant-alt */
import Gallery from './Gallery'
import Nav from './Nav'
import Reviews from './Reviews'

function House() {
  return (
    <div className="container mx-auto">
      <Nav />
      <Gallery />
      <div className="grid grid-cols-3 gap-48">
        <div className=" col-span-2">
          <div className=" text-3xl font-bold mt-5">Phuket, Thailand</div>
          <div className=" text-gray-400 mt-4 text-sm">
            2 rooms • 2 bathrooms
          </div>
          <div className="flex col-span-2 justify-start gap-1 mt-8">
            <div>
              <img
                src="https://randomuser.me/api/portraits/women/85.jpg"
                alt="User profile photo"
              />
            </div>
            <div>
              <div className=" text-gray-400 text-sm">Hosted by</div>
              <div>Linda Smith</div>
            </div>
          </div>
          <div className="my-8 text-sm">
            Nestled on a serene beachfront, this charming Airbnb house offers a
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
            spot for beach lovers and those seeking a tranquil getaway.
          </div>
        </div>
        <div className="border border-gray-300 self-start m-5 p-5 rounded-md">
          <span className=" text-lg font-bold">$120</span>
          <span className=" text-gray-500 font-bold text-sm"> /night</span>
          <div className="flex gap-1 justify-between">
            <div>
              <span>3 nights = </span>
              <span className="font-bold">$360</span>
            </div>
            <div className=" bg-blue-600">4.2</div>
          </div>
        </div>
      </div>
      <Reviews />
    </div>
  )
}
export default House
