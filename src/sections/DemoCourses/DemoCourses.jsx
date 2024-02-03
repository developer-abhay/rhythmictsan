import CourseCard from "../../components/CourseCard/CourseCard";
import { courseObject } from "../../courses";

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

import "./DemoCourses.css";

const DemoCourses = () => {
  const swiper = useSwiper();

  return (
    <section className="demo-course">
      <h5>Our Courses</h5>
      <h2>Instruments</h2>
      <div className="container course-card-container">
        <Swiper
          slidesPerView={3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {courseObject.map(({ id, name, info, img }) => (
            <SwiperSlide key={id}>
              <CourseCard name={name} info={info} img={img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default DemoCourses;
