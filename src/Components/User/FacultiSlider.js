import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import 'C:/Users/eSaral/Documents/verification_login/src/Components/CSS/carsoul.css'
import '../CSS/App.css'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};


const FacultiChapterSlider = ({ faculties }) => {
  return (
    <div className="parent">
      <Carousel

        responsive={responsive}
        // autoPlay={true}
        swipeable={true}
        draggable={true}
        // showDots={true}
        infinite={true}
        partialVisible={false}
        // dotListClass="custom-dot-list-style"
      >
        {(faculties).map(
          (facultie, index) => {
            return (
              <div className="ChapterSlider" id='zoom-effect' key={index}>
                <img src={facultie.thumbnail} alt="movie" />
                <div className="card-body">
                  <p className="card-text">{facultie.name}</p>
                  <p className="card-text">{facultie.designation}</p>
                </div>
              </div>
            );
          })}
      </Carousel>
    </div>
  );
};
export default FacultiChapterSlider;
