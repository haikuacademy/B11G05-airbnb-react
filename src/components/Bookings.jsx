import Nav from './Nav'
import HouseCard from './HouseCard'

function Bookings() {
  return (
    <div className="container mx-auto">
      <Nav />
      <div className="grid gap-4 grid-cols-5">
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
      </div>
    </div>
  )
}
export default Bookings
