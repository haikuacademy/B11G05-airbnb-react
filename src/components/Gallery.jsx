import { useState } from 'react'

function Gallery(props) {
  //Create selectedImage and set the initial value to props.images[0]
  const [selectedImage, setSelectedImage] = useState(props.images[0])
  return (
    <>
      {/* Left Picture */}
      <div className="grid grid-cols-2 gap-10">
        <div className=" bg-white">
          <img src={selectedImage} alt="Sample" className=" rounded-md" />
        </div>

        {/* Right Pictures */}
        {/* add onclick event to change the value of selectedImage  */}
        <div className="grid grid-cols-3 gap-2">
          {props.images.map((image, index) => (
            <div key={index} className=" bg-white">
              <img
                src={image}
                alt="Sample"
                className=" rounded-md"
                onClick={(event) => {
                  setSelectedImage(image)
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default Gallery
