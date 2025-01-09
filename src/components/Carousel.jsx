import React from "react";

const Carousel = (props) => {
  const images = props.images;
  console.log(images);
  return (
    <div>
      <div className="carousel w-full h-60">
        {images?.map((image, index) => (
          <div
            id={`slide${index + 1}`}
            className="carousel-item relative w-full"
            key={index}
          >
            <img
              src={image}
              className="w-full object-cover"
              alt={`Slide ${index + 1}`}
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href={`#slide${index === 0 ? images.length : index}`}
                className="btn btn-circle"
              >
                ❮
              </a>
              <a
                href={`#slide${((index + 1) % images.length) + 1}`}
                className="btn btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
