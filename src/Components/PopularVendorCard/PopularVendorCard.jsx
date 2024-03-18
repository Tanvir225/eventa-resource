// eslint-disable-next-line react/prop-types
const PopularVendorCard = ({ name, image }) => {
  return (
    <div className="relative">
      <div>
        <img src={image} alt={`${name} image`} className="w-full h-[30vh] rounded-lg" />
      </div>
      <p className=" bg-white  absolute z-20 bottom-2 rounded-lg p-1 left-[40%]">{name}</p>
    </div>
  );
};

export default PopularVendorCard;
