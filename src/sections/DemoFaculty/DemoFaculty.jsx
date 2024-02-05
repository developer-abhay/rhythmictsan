import FacultyCard from "../../components/FacultyCard/FacultyCard";
import { facultyObject } from "../../data/faculty";

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

import "./DemoFaculty.css";

const DemoFaculty = () => {
  const swiper = useSwiper();

  return (
    <section id="demo-faculty">
      <h5>Meet our Team</h5>
      <h2>Awesome Faculty</h2>
      <div className="container demo-faculty-container">
        <Swiper
          slidesPerView={3}
          spaceBetween={40}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
              autoplay: {
                delay: 500,
              },
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {facultyObject.map(({ id, name, title, img, socials }) => (
            <SwiperSlide key={id}>
              <FacultyCard
                name={name}
                title={title}
                img={img}
                socials={socials}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default DemoFaculty;
