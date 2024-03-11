import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-regular-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Reviews(props) {
  //params
  const params = useParams()
  console.log('params', params)

  //state
  const [reviews, setReviews] = useState([])
  const [hasBeenReviewed, setHasBeenReviewed] = useState(false)

  const getReviews = async () => {
    let result = await axios.get(
      `https://haiku-bnb.onrender.com/reviews?house_id=${params.id}`
    )
    setReviews(result.data)
  }
  console.log('reviews', reviews)
  useEffect(() => {
    getReviews()
  }, [])

  const reviewData = reviews.map((review, index) => (
    <Review key={index} review={review} />
  ))

  //form
  const createReview = async (e) => {
    //1. prevent browser from reload
    e.preventDefault()
    //2 get data from form from e.target
    console.log(e.target)
    const form = new FormData(e.target)
    let formObject = Object.fromEntries(form.entries())
    console.log(formObject)
    //get house id from the props
    formObject.house_id = props.house.house_id
    console.log(formObject)
  }
  return (
    <div className="grid grid-cols-3 gap-x-48 border-t-2 py-5">
      <div className="col-span-2 mt-5">
        <div className="mb-6">
          <div className="font-bold text-xl mb-2">
            <FontAwesomeIcon
              icon={faCommentDots}
              className="text-md text-gray-500 mr-2"
            />
            {`${reviews.length} Reviews`}
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
        <form onSubmit={{ createReview }}>
          <div className=" py-2 text-sm flex justify-start">
            <input type="radio" name="rating" value="1" className="mr-1" />
            <input type="radio" name="rating" value="2" className="mr-1" />
            <input type="radio" name="rating" value="3" className="mr-1" />
            <input type="radio" name="rating" value="4" className="mr-1" />
            <input type="radio" name="rating" value="5" className="mr-1" />
          </div>
          <div className=" text-sm justify-start mt-3">
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
