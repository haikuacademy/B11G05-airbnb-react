import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const reviews = [
  {
    content:
      'Great place to stay! The house is very clean and comfortable, and the location is perfect. The host was very friendly and helpful! Highly recommend!'
  },
  { rating: 5 },
  { date: '22 Jan 2024' },
  {
    author: {
      firstName: 'Mike',
      lastName: 'Lino',
      picture: 'https://randomuser.me/api/portraits/men/84.jpg'
    }
  }
]

function Reviews() {
  return (
    <div className="grid grid-cols-3 gap-x-48 border-t-2 py-5">
      <div className="col-span-2 mt-5">
        <div className="mb-6">
          <div className="font-bold text-xl mb-2">34 Reviews</div>
          <div>4.5</div>
        </div>
        <Review />
        <Review />
      </div>
      <div className="border border-gray-200 self-start my-5 p-4 rounded-md">
        <div>Leave a Review</div>
        <div className="mt-2 text-sm">
          <FontAwesomeIcon icon={faStar} style={{ color: '#FFD43B' }} /> 0
        </div>
        <form>
          <div className=" text-sm justify-center mt-3">
            <textarea
              className=" border w-full col-span-8 text-sm text-gray-300 pb-16 pr-16"
              placeholder="Please leave a review for this house..."
            ></textarea>
          </div>
          <div className=" text-sm text-white mt-1">
            <button className=" border bg-rose-400 p-2 rounded-md">
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
function Review() {
  return (
    <div className="border border-gray-300 rounded-md col-span-2 p-5 my-4">
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
            <div className=" text-gray-400">
              {reviews.map((review) => (
                <div>{review.date}</div>
              ))}
            </div>
            <div className="flex gap-2">
              <div>
                {reviews.map((review) => (
                  <div>{review.firstName}</div>
                ))}
              </div>
              <div>
                {reviews.map((review) => (
                  <div>{review.lastName}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className=" flex my-3">
          {/* adding stars icon to the rating */}
          <div>
            {[...new Array(5)].map((i, index) => (
              <FontAwesomeIcon icon={faStar} style={{ color: '#FFD43B' }} />
            ))}
          </div>
          <div className="ml-2">
            {reviews.map((review) => (
              <div>{review.rating}</div>
            ))}
          </div>
        </div>
        <div>
          {reviews.map((review) => (
            <div>{review.content}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Reviews
