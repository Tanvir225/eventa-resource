import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import PopularCard from "../../../Components/PopularCard/PopularCard";

const PopularVendor = () => {
  //state
  const [popularVendor, setPopularVendor] = useState([]);
  //fetch data
  useEffect(() => {
    fetch("./popularVendor.json")
      .then((res) => res.json())
      .then((data) => setPopularVendor(data));
  }, []);

  const isSmallScreen = window.innerWidth <= 768;

  return (
    <div>
      <Swiper
        slidesPerView={`${isSmallScreen ? 1 : 3}`}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {popularVendor.map((vendor) => (
          <SwiperSlide key={vendor._id}>
            <PopularCard
              image={vendor.image}
              name={vendor.name}
              location={vendor.location}
            ></PopularCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularVendor;
