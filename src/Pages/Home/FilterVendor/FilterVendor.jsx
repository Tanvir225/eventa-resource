import { useState } from "react";

const FilterVendor = () => {
  // filter verndor
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVendor, setSelectedVendor] = useState("Select Vendor Type");
  // array of options
  const vendorOptions = [
    "wedding venues",
    "wedding photographers",
    "car",
    "flower",
  ];

  //   filter by vendor by place
  const [isPlace, setIsPlace] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState("Select area");
  // array of options
  const areaOptions = [
    "mirpur",
    "gulshan",
    "farmgate",
    "dhanmondi",
    "mohammadpur",
    "ajimpur",
    "puran dhaka",
  ];

  return (
    <div>
      {/* select section */}
      <div className="flex flex-col  lg:flex-row justify-center  gap-5">
        {/*  dropdown for selecting vendor type */}
        <div className="w-full">
          {/* dropdown - btn */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="mx-auto flex w-full items-center justify-between rounded-xl bg-white px-6 py-2 border"
          >
            <h1 className="font-medium text-[#FF69B4]">{selectedVendor}</h1>
            <svg
              className={`${isOpen ? "-rotate-180" : "rotate-0"} duration-300`}
              width={25}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M7 10L12 15L17 10"
                  stroke="#4B5563"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
          {/* dropdown - options  */}
          <div
            className={`${
              isOpen ? "visible top-0 opacity-100" : "hidden -top-4 opacity-0"
            } relative mx-auto my-4 w-full rounded-xl py-4  border-[#FF69B4] border-2 duration-300`}
          >
            {vendorOptions?.map((option, idx) => (
              <div
                key={idx}
                onClick={(e) => {
                  setSelectedVendor(e.target.textContent);
                  setIsOpen(false);
                }}
                className="px-6 py-2 text-gray-500 hover:bg-gray-100"
              >
                {option}
              </div>
            ))}
          </div>
        </div>
        {/* end */}

        {/* vendor area selection */}

        <div className="w-full">
          {/* dropdown - btn */}
          <div
            onClick={() => setIsPlace(!isPlace)}
            className="mx-auto flex w-full items-center justify-between rounded-xl bg-white px-6 py-2 border"
          >
            <h1 className="font-medium text-[#FF69B4]">{selectedPlace}</h1>
            <svg
              className={`${isPlace ? "-rotate-180" : "rotate-0"} duration-300`}
              width={25}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M7 10L12 15L17 10"
                  stroke="#4B5563"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
          {/* dropdown - options  */}
          <div
            className={`${
              isPlace ? "visible top-0 opacity-100" : "hidden -top-4 opacity-0"
            } relative mx-auto my-4 w-full rounded-xl py-4  border-[#FF69B4] border-2 duration-300`}
          >
            {areaOptions?.map((option, idx) => (
              <div
                key={idx}
                onClick={(e) => {
                  setSelectedPlace(e.target.textContent);
                  setIsPlace(false);
                }}
                className="px-6 py-2 text-gray-500 hover:bg-gray-100"
              >
                {option}
              </div>
            ))}
          </div>
        </div>

        {/* end */}

        <div className="lg:-mt-1">
          <button className="btn btn-outline bg-[#FF1493] w-32 text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterVendor;
