import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import { FiPlus } from 'react-icons/fi';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import TextField from './TextField';
import { addFinancingDetails } from '../redux/Actions';

const Financing = ({ activeStep, setActiveStep }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state?.details?.financingDetails);

  const [interestType, setInterestType] = useState('fixed');
  const [interestCapitilization, setInterestCapitilization] =
    useState('monthly');

  // Set Interest Type and Interest Capitalization Values if exist in state
  useEffect(() => {
    if (state?.interestType) {
      setInterestType(state?.interestType);
    }
    if (state?.interestCapitilization) {
      setInterestCapitilization(state?.interestCapitilization);
    }
  }, [state]);

  // Form Initial Values
  const initialValues = {
    lender: state?.lender,
    loanAmmount: state?.loanAmmount,
    startDate: state?.startDate,
    interestRate: state?.interestRate,
    period: state?.period,
    term: state?.term,
    financingFees: state?.financingFees,
    amortization: state?.amortization,
  };

  // Error Schema
  const errorSchema = Yup.object().shape({
    lender: Yup.string().required('Lender field is required'),
    loanAmmount: Yup.string().required('Loan Ammount field is required'),
    interestRate: Yup.string().required('Interest Rate field is required'),
    period: Yup.string().required('Inerest Period field is required'),
    term: Yup.string().required('Term field is required'),
    amortization: Yup.string().required('Amortization field is required'),
    financingFees: Yup.string().required('Financing Fees field is required'),
    startDate: Yup.string().required('Start Date is required'),
  });

  // Form Submission
  const handleSubmit = (values, { resetForm }) => {
    let data = {
      lender: values?.lender,
      loanAmmount: values?.loanAmmount,
      startDate: values?.startDate,
      interestRate: values?.interestRate,
      period: values?.period,
      term: values?.term,
      financingFees: values?.financingFees,
      amortization: values?.amortization,
      interestType: interestType,
      interestCapitilization: interestCapitilization,
    };
    dispatch(addFinancingDetails(data));
    setActiveStep(activeStep + 1);
  };
  return (
    <div className="p-4">
      <h3 className="text-[24px] text-black font-medium">Financing</h3>
      <div className="flex items-center my-3 border-b border-b-[#E2E2EA]">
        <h3 className="text-teal-500 mr-4 text-[16px] font-medium">Deb1</h3>
        <h3 className="text-gray-500 text-[16px] font-medium">Add debt</h3>
      </div>
      <div className="w-full lg:w-[650px]">
        <Formik
          initialValues={initialValues}
          validationSchema={errorSchema}
          onSubmit={handleSubmit}
        >
          {(props) => (
            <Form className="w-full">
              <div className="flex items-center w-full">
                <TextField
                  type="text"
                  label="Lender"
                  name="lender"
                  placeholder="Enter lender name"
                />
                <div className="h-[44px] px-3 mt-7 ml-3 border border-[#B8C1CE] rounded-[5px] flex items-center justify-center">
                  <FiPlus size={20} className="text-black" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <TextField
                  type="number"
                  label="Loan Ammount"
                  dollarLabel={true}
                  name="loanAmmount"
                  placeholder="Enter loan ammount"
                />
                <TextField
                  type="date"
                  label="Start Date"
                  name="startDate"
                  placeholder="Enter start date"
                />
              </div>
              {/* Interest Type Tabs */}
              <div className="form-group  md:my-3 my-4 lg:my-4 ">
                <p className="block text-gray-500 text-[14px] leading-[20px] font-jakarta-sans font-medium">
                  Type Of Rate
                </p>
                <div className="flex items-center border mt-2 rounded border-[#E2E2EA] w-full md:w-[50%]">
                  <h3
                    className={`${
                      interestType == 'fixed'
                        ? 'bg-[#B8C1CE] text-black'
                        : 'text-[#B8C1CE]'
                    } rounded text-center w-full  py-2 cursor-pointer`}
                    onClick={() => setInterestType('fixed')}
                  >
                    Fixed
                  </h3>
                  <h3
                    className={`${
                      interestType == 'variable'
                        ? 'bg-[#B8C1CE] text-black'
                        : 'text-[#B8C1CE]'
                    } rounded text-center w-full  py-2 cursor-pointer`}
                    onClick={() => setInterestType('variable')}
                  >
                    Variable
                  </h3>
                </div>
              </div>
              {/* Interest Rate Tabs */}
              <TextField
                type="number"
                label="Interest Rate"
                name="interestRate"
                additionalLabel={'%'}
                placeholder="Enter interest rate"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {/* Interest Capitilization Tabs */}
                <div className="form-group  md:my-3 my-4 lg:my-4 ">
                  <p className="block text-gray-500 text-[14px] leading-[20px] font-jakarta-sans font-medium">
                    Interest Capitilization
                  </p>
                  <div className="flex items-center border mt-2 rounded border-[#E2E2EA] w-full">
                    <h3
                      className={`${
                        interestCapitilization == 'monthly'
                          ? 'bg-[#B8C1CE] text-black'
                          : 'text-[#B8C1CE]'
                      } rounded text-center w-full  py-2 cursor-pointer`}
                      onClick={() => setInterestCapitilization('monthly')}
                    >
                      Monthly
                    </h3>
                    <h3
                      className={`${
                        interestCapitilization == 'semiAnnual'
                          ? 'bg-[#B8C1CE] text-black'
                          : 'text-[#B8C1CE]'
                      } rounded text-center w-full  py-2 cursor-pointer`}
                      onClick={() => setInterestCapitilization('semiAnnual')}
                    >
                      Semi-Annual
                    </h3>
                  </div>
                </div>
                {/* Interest Capitilization Tabs */}
                <TextField
                  type="number"
                  label="Interest Only Period"
                  name="period"
                  placeholder="Enter Interest Only Period"
                  additionalLabel={'months'}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <TextField
                  type="number"
                  label="Term"
                  name="term"
                  placeholder="Enter term"
                />
                <TextField
                  type="number"
                  label="Amortization"
                  name="amortization"
                  placeholder="Enter amortization"
                />
                <TextField
                  type="number"
                  label="Financing Fees"
                  dollarLabel={true}
                  name="financingFees"
                  placeholder="Enter financing fees"
                />
              </div>
              <div className="flex items-end justify-end my-2">
                <p
                  className="bg-transparet text-teal-950 px-4 py-1 mr-2 cursor-pointer     "
                  onClick={() => setActiveStep(activeStep - 1)}
                >
                  Back
                </p>
                <button className=" bg-teal-950 text-white px-4 py-1 border-0 outline-none rounded ">
                  Continue
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Financing;
