function Reviews() {
  return (
    <div className="grid grid-cols-3 gap-x-48 border-t-2 py-5">
      <div className="col-span-2 my-5">
        <div className="font-bold text-xl mb-2">34 Reviews</div>
        <div>4.5</div>
      </div>
      <div className="border border-gray-300 rounded-sm m-4 p-4">
        <div>Leave a Review</div>
        <div className="mt-2 text-sm">*stars* 0</div>
        <form>
          <div className=" text-sm justify-center mt-3">
            <textarea className=" border w-full col-span-6 text-sm text-gray-300 pb-16 pr-16">
              Please leave a review for this house...
            </textarea>
          </div>
          <div className=" text-sm text-white mt-1">
            <button className=" border bg-rose-400 p-2 rounded-md">
              Submit Review
            </button>
          </div>
        </form>
      </div>
      <Review />
    </div>
  )
}
function Review() {
  return (
    <div className="border border-gray-300 rounded-sm col-span-2 p-5">
      <div>
        <div className="flex col-span-2justify-start gap-1">
          <div className=" rounded-full w-10 h-10 mr-3">
            <img
              src="https://randomuser.me/api/portraits/men/84.jpg"
              alt="user profile of Mike Lino"
              className="rounded-full"
            />
          </div>
          <div>
            <div className=" text-gray-400">22 Jan 2024</div>
            <div>Mike Lino</div>
          </div>
        </div>
        <div className="my-3">5</div>
        <div>
          Great place to stay! The house is very clean and comfortable, and the
          location is perfect. The host was very friendly and helpful! Highly
          recommend!
        </div>
      </div>
    </div>
  )
}
export default Reviews
