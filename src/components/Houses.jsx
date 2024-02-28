import Nav from './Nav'
import HouseCard from './HouseCard'

function Houses() {
  return (
    <>
      <Nav />
      <div className="flex justify-between bg-blue-200">
        <div className="bg-blue-600">1</div>
        <div className="bg-blue-600">2</div>
        <div className="bg-blue-600">3</div>
        <div className="bg-blue-600">4</div>
        <div className="bg-blue-600">5</div>
        <div className="bg-blue-600">6</div>
      </div>
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
