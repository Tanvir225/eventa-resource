import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import PopularVendorCard from "../../../Components/PopularVendorCard/PopularVendorCard";

const PopularVendor = () => {
  //state
  const [vendors, setVendors] = useState([]);

  //useEffect for data fetching
  useEffect(() => {
    fetch("./category.json")
      .then((response) => response.json())
      .then((data) => setVendors(data));
  }, []);

  console.log(vendors);

  const isSmallScreen = window.innerWidth <= 768;

  return (
    <div>
      <Swiper
        slidesPerView={`${isSmallScreen ? 1 : 3}`}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {vendors?.map((vendor) => (
          <SwiperSlide key={vendor._id}>
            <PopularVendorCard
              image={vendor.image}
              name={vendor.name}
            ></PopularVendorCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularVendor;
