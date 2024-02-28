function Reviews() {
  return (
    <>
      <div className="grid grid-cols-3 gap-x-48 bg-pink-200">
        <Review />
        <div className=" bg-pink-600">6</div>
      </div>
    </>
  )
}

function Review() {
  return (
    <>
      <div className="flex col-span-2 bg-blue-200 justify-start gap-1">
        <div className=" bg-blue-600">5.1</div>
        <div className=" bg-blue-600">5.2</div>
      </div>{' '}
    </>
  )
}

export default Reviews
