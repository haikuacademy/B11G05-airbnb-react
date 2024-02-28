import Nav from './Nav'
import HouseCard from './HouseCard'
import Filter from './Filter'

function Houses() {
  return (
    <>
      <Nav />
      <Filter />
      <div className="grid bg-pink-200 gap-4 grid-cols-5 ">
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
      </div>
    </>
  )
}

export default Houses
