import Nav from './Nav'
import HouseCard from './HouseCard'

const bookings = [
  {
    price: 99,
    days: 11,
    house: {
      location: 'Phuket, Thailand',
      rooms: 2,
      bathrooms: 2,
      price: 120,
      rating: 3.5,
      reviews: 34,
      photo:
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png'
    }
  }
]

function Bookings() {
  return (
    <div className="container mx-auto">
      <Nav />
      <div className="grid gap-4 grid-cols-5">
        {bookings.map((booking, index) => (
          <HouseCard house={booking.house} booking={booking} />
        ))}
      </div>
    </div>
  )
}
export default Bookings
