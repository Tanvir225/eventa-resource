// eslint-disable-next-line react/prop-types
const PopularVendorCard = ({ name, image }) => {
  return (
    <div className="relative">
      <img src={image} alt={`${name} image`} className="w-full h-48 object-cover rounded-lg " />
      <p className="absolute bottom-0 bg-black text-xl font-bold w-full bg-opacity-75 py-4 text-white rounded-lg px-5">{name}</p>
    </div>
  );
};

export default PopularVendorCard;
