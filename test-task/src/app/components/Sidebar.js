import React from 'react';
import { FaRegDotCircle, FaRegCircle } from 'react-icons/fa';
import { BsFillCheckCircleFill } from 'react-icons/bs';

const Sidebar = ({ activeStep }) => {
  const steps = [
    { name: 'Property detail', href: '#', status: 'complete' },
    { name: 'Unit Mix', href: '#', status: 'complete' },
    { name: 'Financing', href: '#', status: 'current' },
    { name: 'Success', href: '#', status: 'upcoming' },
  ];

  function CheckActiveStep(index) {
    if (index == activeStep) {
      return <FaRegDotCircle className="text-teal-500" />;
    } else if (index < activeStep) {
      return <BsFillCheckCircleFill className="text-black" />;
    } else {
      return <FaRegCircle className="text-[#B8C1CE]" />;
    }
  }
  return (
    <div className="block w-full  md:w-[250px] md:h-[100vh] md:2xl:h-[1080px] bg-white md:border-r border-[#E2E2EA]">
      <div className="p-4 grid grid-cols-2 border-b border-b-gray-400 md:block md:border-b-0">
        {steps?.map((data, index) => (
          <div
            key={index}
            className="mb-2 md:mb-0 flex items-center md:py-2 cursor-pointer"
          >
            {CheckActiveStep(index)}
            <h3
              className={`text-[18px] ml-4 ${
                activeStep == index
                  ? 'text-teal-500'
                  : activeStep > index
                  ? 'text-black'
                  : 'text-[#B8C1CE]'
              }`}
            >
              {data?.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
