import { IoIosArrowForward } from "react-icons/io";

const Banner = () => {
  return (
    <div className="banner flex h-64 bg-purple-300 items-end px-24 py-12">
      <div className="flex items-center">
        <p>Home</p>
        <span>
          <IoIosArrowForward />{" "}
        </span>
        <p>Courses</p>
      </div>
    </div>
  );
};

export default Banner;
