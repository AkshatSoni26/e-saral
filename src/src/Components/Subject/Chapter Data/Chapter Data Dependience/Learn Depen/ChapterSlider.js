import React, { useContext } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../../../../CSS/carsoul.css'

import { ChapterData_1 } from "../../ChapterData";

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

const ChapterSlider = () => {

  const data = useContext(ChapterData_1)
  // console.log('slider',data.content.learn)


  const chapter_data = data.content.learn


   return (
  //  <h1>slider</h1>
    <div className="parent">

      <Carousel
        responsive={responsive}
        // autoPlay={true}
        swipeable={true}
        draggable={true}
        // showDots={true}
        // infinite={true}
        partialVisible={true}
        // dotListClass="custom-dot-list-style"
      >
        {(chapter_data).map(
            (chapter, index) => {
            return (
              <div className="ChapterSlider zoom-effect"  key={index}>
                <img src={chapter.content_data.content_info.thumbnail} alt="movie" />
                {/* <div className="card-body">
                  <p className="card-text">{facultie.name}</p>
                  <p className="card-text">{facultie.designation}</p>
                </div> */}
              </div>
            );
          })}
      </Carousel>
    </div>
  );
};
export default ChapterSlider;

