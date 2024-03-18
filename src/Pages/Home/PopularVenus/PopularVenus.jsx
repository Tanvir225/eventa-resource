import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import PopularVenuCard from '../../../Components/PopularVenuCard/PopularVenuCard';


const PopularVenus = () => {
  //state
  const [popularVenus, setPopularVenus] = useState([]);
  //fetch data
  useEffect(() => {
    fetch("./popularVendor.json")
      .then((res) => res.json())
      .then((data) => setPopularVenus(data));
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
        {popularVenus.map((vendor) => (
          <SwiperSlide key={vendor._id}>
            <PopularVenuCard
              image={vendor.image}
              name={vendor.name}
              location={vendor.location}
            ></PopularVenuCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularVenus;
