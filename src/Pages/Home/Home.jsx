//import Card from "../../Components/Card/Card";
import Heading from "../../Components/Heading/Heading";
import PopularCard from "../../Components/PopularCard/PopularCard";
import Banner from "../../Shared/Banner/Banner";
import FilterVendor from "./FilterVendor/FilterVendor";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>

      <div className="container mx-auto px-5 my-5">
        {/* heading */}
        <Heading
          heading="Fine-Tune Your Selection"
          subHeading="Find the best wedding vendors of trusted reviews!"
        ></Heading>

        {/* filter  vendor */}
        <div className="bg-blue-50 py-7 px-5 shadow-md rounded-lg">
          <FilterVendor></FilterVendor>
        </div>


        {/* popular Venus Heading */}
        <Heading heading="Popular Venue Searches" subHeading="Trending Venues That Everyone's Talking About!"></Heading>
      </div>
    </div>
  );
};

export default Home;
