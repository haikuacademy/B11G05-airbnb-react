import Nav from './Nav'
import HouseCard from './HouseCard'
import Filter from './Filter'
let houses = [
  {
    location: 'Phuket, Thailand',
    rooms: 2,
    bathrooms: 2,
    price: 120,
    rating: 4.5,
    reviews: 34,
    photo:
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png'
  }
]

function Houses() {
  return (
    <>
      <div className=" container mx-auto">
        <Nav />
        <Filter />
        {/* loop through the houses array and render to HouseCard */}
        <div className="grid gap-4 grid-cols-5 ">
          {houses.map((house, index) => (
            <HouseCard house key={index} item={house} />
          ))}
          {houses.map((house, index) => (
            <HouseCard house key={index} item={house} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Houses
