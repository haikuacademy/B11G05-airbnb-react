import Gallery from './Gallery'
import Nav from './Nav'
import Reviews from './Reviews'

function House() {
  return (
    <>
      <Nav />
      <Gallery />
      <div className="grid grid-cols-3 gap-48 bg-pink-200">
        <div className=" col-span-2 bg-pink-600">3</div>
        <div className=" bg-pink-600">4</div>
      </div>
      <div className="grid grid-cols-3 gap-48 bg-pink-200">
        <div className="flex col-span-2 bg-blue-200 justify-start gap-1">
          <div className=" bg-blue-600">3.1</div>
          <div className=" bg-blue-600">3.2</div>
        </div>
        <div className="flex  bg-blue-200 gap-1 justify-between">
          <div className=" bg-blue-600">4.1</div>
          <div className=" bg-blue-600">4.2</div>
        </div>
      </div>
      <Reviews />
    </>
  )
}
export default House
