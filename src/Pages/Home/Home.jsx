import Card from "../../Components/Card/Card";

const Home = () => {
  return (
    <div className="container mx-auto px-5 lg:px-0 xl:px-0">
      this is home
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 ">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
};

export default Home;
