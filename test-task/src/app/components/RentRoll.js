import React from 'react';
import { FiUpload, FiDownload } from 'react-icons/fi';
import { BiSolidUpArrow, BiSolidDownArrow } from 'react-icons/bi';

const RentRoll = ({ activeStep, setActiveStep }) => {
  const tableData = [1, 2, 3, 4, 5, 7, 8, 9, 10];
  return (
    <div className="p-4 w-full ">
      <div className="flex items-center justify-between w-full">
        <h3 className="text-[24px] text-black font-medium">Rent Roll</h3>
        <div className="flex items-center">
          <div className="flex items-center">
            <FiDownload lassName="text-teal-950" />
            <h5 className="text-[14px] ml-1 font-medium text-teal-950">
              Export Template
            </h5>
          </div>
          <div className="flex items-center ml-3">
            <h5 className="text-[14px] mr-1 font-medium text-teal-950">
              Import File
            </h5>
            <FiUpload className="text-teal-950" />
          </div>
        </div>
      </div>
      <div className="flex flex-col px-2">
        <div className="sm:-mx-6 lg:-mx-4">
          <div className=" min-w-full py-2  lg:px-4">
            <div className="overflow-x-auto custom-scroll-bar h-500px">
              <table className="min-w-full border rounded border-[#E2E2EA]  text-left text-sm font-light">
                <thead className="whitespace-nowrap  font-medium ">
                  <tr>
                    <th
                      scope="col"
                      className="px-2  py-2 text-gray-500 border border-[#E2E2EA] text-[14px] font-medium leading-5 capitalize"
                    >
                      id
                    </th>
                    <th
                      scope="col"
                      className="px-2  py-2 text-gray-500 border border-[#E2E2EA] text-[14px] font-medium leading-5 capitalize"
                    >
                      type
                    </th>
                    <th
                      scope="col"
                      className="px-2  py-2 text-gray-500 border border-[#E2E2EA] text-[14px] font-medium leading-5 capitalize"
                    >
                      Rent
                    </th>
                    <th
                      scope="col"
                      className="px-2  py-2 text-gray-500 border border-[#E2E2EA] text-[14px] font-bold leading-5 capitalize"
                    >
                      width (ft)
                    </th>
                    <th
                      scope="col"
                      className="px-2  py-2 text-gray-500 border border-[#E2E2EA] text-[14px] font-bold leading-5 capitalize"
                    >
                      id (ft)
                    </th>
                    <th
                      scope="col"
                      className="px-2  py-2 text-gray-500 border border-[#E2E2EA] text-[14px] font-bold leading-5 capitalize"
                    >
                      Market Rent
                    </th>
                    <th
                      scope="col"
                      className="px-2  py-2 text-gray-500 border border-[#E2E2EA] text-[14px] font-bold leading-5 capitalize"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-2  py-2 text-gray-500 border border-[#E2E2EA] text-[14px] font-medium leading-5 capitalize"
                    >
                      SQFT/SQM
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData?.map((data, index) => (
                    <tr className="" key={index}>
                      <td className="whitespace-nowrap border border-[#E2E2EA]  capitalize px-2 py-4 text-gray-500 text-[14px] leading-5   font-normal">
                        E22
                      </td>
                      <td className="whitespace-nowrap flex items-center justify-between border border-[#E2E2EA] capitalize px-2 py-4 text-gray-500 text-[14px] leading-5   font-normal">
                        Indoor
                        <div className="flex flex-col">
                          <BiSolidUpArrow size={10} />
                          <BiSolidDownArrow size={10} />
                        </div>
                      </td>
                      <td className="whitespace-nowrap border border-[#E2E2EA] capitalize px-2 py-4 text-gray-500 text-[14px] leading-5   font-normal">
                        $ 160
                      </td>
                      <td className="whitespace-nowrap border border-[#E2E2EA] capitalize px-2 py-4 text-gray-500 text-[14px] leading-5   font-normal">
                        10
                      </td>
                      <td className="whitespace-nowrap border border-[#E2E2EA] capitalize px-2 py-4 text-gray-500 text-[14px] leading-5   font-normal">
                        20
                      </td>
                      <td className="whitespace-nowrap border border-[#E2E2EA] capitalize px-2 py-4 text-gray-500 text-[14px] leading-5   font-normal"></td>
                      <td className="whitespace-nowrap border border-[#E2E2EA] capitalize px-2 py-4 text-gray-500 text-[14px] leading-5   font-normal">
                        Rented
                      </td>
                      <td className="whitespace-nowrap border border-[#E2E2EA] capitalize px-2 py-4 text-gray-500 text-[14px] leading-5   font-normal">
                        50
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-end my-2">
        <button
          className="bg-transparet text-teal-950 px-4 py-1 mr-2 "
          onClick={() => setActiveStep(activeStep - 1)}
        >
          Back
        </button>
        <button
          className=" bg-teal-950 text-white px-4 py-1 border-0 outline-none rounded "
          onClick={() => setActiveStep(activeStep + 1)}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default RentRoll;
