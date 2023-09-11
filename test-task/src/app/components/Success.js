import React from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { resetDetails } from '../redux/Actions';

const Success = ({ setActiveStep }) => {
  const dispatch = useDispatch();

  // Reset Form
  const handleResetForm = () => {
    dispatch(resetDetails());
    setActiveStep(0);
  };

  return (
    <div className=" w-full mt-8 md:mt-16 flex flex-col justify-center items-center">
      <BsFillCheckCircleFill className="text-teal-500" size={50} />
      <p className="my-2 text-[#B8C1CE] text-[16px] text-center">
        Thank you for filling out your information!
      </p>
      <div className="flex items-center justify-center my-2">
        <p
          className="bg-transparet text-teal-950 px-4 py-1 mr-2 cursor-pointer     "
          onClick={() => setActiveStep(2)}
        >
          Back
        </p>
        <button
          className=" bg-teal-950 text-white px-4 py-1 border-0 outline-none rounded "
          onClick={() => handleResetForm()}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Success;
