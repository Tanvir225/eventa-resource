import Card from "../../Components/Card/Card";
import Banner from "../../Shared/Banner/Banner";
import FilterVendor from "./FilterVendor/FilterVendor";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>

      <div className="container mx-auto px-5 my-5">
        <FilterVendor></FilterVendor>
      </div>
    </div>
  );
};

export default Home;
