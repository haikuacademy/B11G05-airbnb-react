import Nav from './Nav'
import HouseCard from './HouseCard'
import Filter from './Filter'
import axios from 'axios'
import { useState } from 'react'

function Houses() {
  const [houses, setHouses] = useState([])

  const getData = async () => {
    const url = ''
    const response = await axios.get(url)
  }
  // let houses = [
  //   {
  //     location: 'Phuket, Thailand',
  //     rooms: 2,
  //     bathrooms: 2,
  //     price: 120,
  //     rating: 3.5,
  //     reviews: 34,
  //     photo:
  //       'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png'
  //   },
  //   {
  //     location: 'Koh Phangan, Thailand',
  //     rooms: 1,
  //     bathrooms: 1,
  //     price: 100,
  //     rating: 4.5,
  //     reviews: 17,
  //     photo:
  //       'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_03.png'
  //   }
  // ]
  const listOfHouseCards = houses.map((house, index) => (
    <HouseCard key={index} house={house} />
  ))
  return (
    <>
      <div className=" container mx-auto">
        <Nav />
        <Filter />
        {/* loop through the houses array and render to HouseCard */}
        <div className="grid gap-4 grid-cols-5 mb-5">{listOfHouseCards}</div>
      </div>
    </>
  )
}

export default Houses
