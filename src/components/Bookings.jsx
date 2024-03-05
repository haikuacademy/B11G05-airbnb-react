import Nav from './Nav'
import HouseCard from './HouseCard'

function Bookings() {
  let bookings = [
    {
      location: 'Bangkok, Thailand',
      rooms: 3,
      bathrooms: 2,
      price: 56,
      rating: 4.5,
      reviews: 17,
      photo:
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_06.png',
      startDate: '2 Jan 2024',
      endDate: '5 Jan 2024',
      totalNights: 3,
      totalPrice: '$168'
    },
    {
      location: 'Koh Samui, Thailand',
      rooms: 1,
      bathrooms: 1,
      price: 100,
      rating: 4.5,
      reviews: 17,
      photo:
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_04.png',
      startDate: '7 Aug 2024',
      endDate: '14 Aug 2024',
      totalNights: 7,
      totalPrice: '$1,330'
    }
  ]
  const listOfBookings = bookings.map((booking, index) => (
    <HouseCard key={index} house={booking} booking={true} />
  ))
  return (
    <div className="container mx-auto">
      <Nav />
      <div className="grid gap-4 grid-cols-5">{listOfBookings}</div>
    </div>
  )
}
export default Bookings
