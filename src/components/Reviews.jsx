import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-regular-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { useState, useEffect } from 'react'

function Reviews(props) {
  const [reviews, setReviews] = useState([])

  const getReviews = async () => {
    try {
      let { data } = await axios.get(
        'https://haiku-bnb.onrender.com/reviews?house=1'
      )
      console.log(data[0])
      setReviews(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getReviews()
  }, [])

  // let reviews = [
  //   {
  //     content:
  //       'Great place to stay! The house is very clean and comfortable, and the location is perfect. The host was very friendly and helpful! Highly recommend!',
  //     rating: 5,
  //     date: '22 Jan 2024',
  //     author: {
  //       firstName: 'Mike',
  //       lastName: 'Lino',
  //       picture: 'https://randomuser.me/api/portraits/men/84.jpg'
  //     }
  //   }
  // ]
  const reviewData = reviews.map((review, index) => (
    <Review key={index} review={review} />
  ))

  return (
    <div className="grid grid-cols-3 gap-x-48 border-t-2 py-5">
      <div className="col-span-2 mt-5">
        <div className="mb-6">
          <div className="font-bold text-xl mb-2">
            <FontAwesomeIcon
              icon={faCommentDots}
              className="text-md text-gray-500 mr-2"
            />
            32 Reviews
          </div>
          <div className="flex gap-2">
            <div>
              {[...new Array(Math.floor(props.house.rating))].map(
                (i, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    style={{ color: '#FFD43B' }}
                  />
                )
              )}
            </div>
            <div>{props.house.rating}</div>
          </div>
        </div>
        {reviewData}
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
function Review(props) {
  return (
    <div className="border border-gray-300 rounded-md col-span-2 p-5 my-4">
      <div>
        <div className="flex col-span-2 justify-start gap-1">
          {/* user picture */}
          <div className=" rounded-full w-10 h-10 mr-3">
            <img
              src={props.review.author.picture}
              alt={`user profile of ${props.review.author.firstName}`}
              className="rounded-full"
            />
          </div>
          <div>
            <div className=" text-gray-400">{props.review.date}</div>
            <div className="flex gap-2">
              {/* first name */}
              <div>{props.review.author.firstName}</div>
              {/* last name */}
              <div>{props.review.author.lastName}</div>
            </div>
          </div>
        </div>
        <div className=" flex my-3">
          {/* stars icon to the rating */}
          <div>
            {[...new Array(props.review.rating)].map((i, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                style={{ color: '#FFD43B' }}
              />
            ))}
          </div>
          <div className="ml-2">{props.review.rating}</div>
        </div>
        <div>{props.review.comment}</div>
      </div>
    </div>
  )
}

export default Reviews
