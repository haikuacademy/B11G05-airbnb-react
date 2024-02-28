import Nav from './Nav'

function Listings() {
  return (
    <>
      <Nav />
      <div className="grid grid-cols-2 gap-28 bg-pink-200">
        <div className="bg-pink-600">1</div>
        <div className="bg-pink-600">2</div>
      </div>
      <div className="grid gap-4 grid-cols-5 bg-pink-200">
        <div className="bg-pink-600">1</div>
        <div className="bg-pink-600">2</div>
        <div className="bg-pink-600">3</div>
        <div className="bg-pink-600">4</div>
        <div className="bg-pink-600">5</div>
        <div className="bg-pink-600">6</div>
        <div className="bg-pink-600">7</div>
      </div>
    </>
  )
}
export default Listings
