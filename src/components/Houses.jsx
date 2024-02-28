import Nav from './Nav'
import HouseCard from './HouseCard'
import Filter from './Filter'

function Houses() {
  return (
    <>
      <div className=" container mx-auto">
        <Nav />
        <Filter />
        <div className="grid gap-4 grid-cols-5 ">
          <HouseCard />
          <HouseCard />
          <HouseCard />
          <HouseCard />
          <HouseCard />
          <HouseCard />
          <HouseCard />
        </div>
      </div>
    </>
  )
}

export default Houses
