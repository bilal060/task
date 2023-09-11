'use client';
import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import TextField from './TextField';
import SelectTextField from './SelectField';
import { countiresData } from '../../../data';
import cities from '../../../cities.json';
import { addPropertyDetails } from '../redux/Actions';

const PropertyDetails = ({ activeStep, setActiveStep }) => {
  const state = useSelector((state) => state?.details?.propertyDetails);
  const dispatch = useDispatch();

  const [selectCountry, setSelectCountry] = useState({
    label: 'Select Country',
    value: '',
  });
  const [selectCity, setSelectCity] = useState({
    label: 'Select City',
    value: '',
  });
  const [citesOptions, setCitiesOptions] = useState([]);

  //Filter and Format Cities Options based on selected country
  useEffect(() => {
    let filteredOptions = cities.filter(
      (data) => data?.country == selectCountry.value
    );
    let formatedOptions = filteredOptions?.map((data) => {
      return {
        label: data?.name,
        value: data?.name,
      };
    });
    setCitiesOptions(formatedOptions);
  }, [selectCountry]);

  // Set City and Country values in exists in state
  useEffect(() => {
    if (state?.country) {
      let selectedCountry = countiresData.find(
        (data) => data?.value == state.country
      );
      let selectedCity = cities.find((data) => data?.name == state.city);
      setSelectCountry(selectedCountry);
      setSelectCity({
        label: selectedCity.name,
        value: selectedCity.name,
      });
    }
  }, [state]);

  // Form Initial Values
  const initialValues = {
    name: state?.name,
    address: state?.address,
    country: state?.country,
    city: state?.city,
    postalCode: state?.postalCode,
    date: state?.date,
  };
  // Error Schema
  const errorSchema = Yup.object().shape({
    name: Yup.string().required('Property Name field is required'),
    address: Yup.string().required('Address field is required'),
    country: Yup.string().required('Please select country name'),
    city: Yup.string().required('Please select city name'),
    postalCode: Yup.string().required('Postal/Zip code is required'),
    date: Yup.string().required('Date field is required'),
  });
  // Form Submission
  const handleSubmit = (values, { resetForm }) => {
    const data = {
      name: values.name,
      address: values.address,
      country: values.country,
      city: values.city,
      postalCode: values.postalCode,
      date: values.date,
    };
    dispatch(addPropertyDetails(data));
    setActiveStep(activeStep + 1);
  };
  return (
    <div className="p-4">
      <h3 className="text-[24px] text-black font-medium">Property Details</h3>
      <div className="w-full lg:w-[650px]">
        <Formik
          initialValues={initialValues}
          validationSchema={errorSchema}
          onSubmit={handleSubmit}
        >
          {(props) => (
            <Form className="w-full">
              <TextField
                type="text"
                label="Property Name"
                name="name"
                placeholder="Enter property name"
              />
              <TextField
                type="text"
                label="Address Line"
                name="address"
                placeholder="Enter address"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <SelectTextField
                  label="Country"
                  name="country"
                  value={selectCountry}
                  options={countiresData}
                  onChange={(e) => {
                    props.setFieldValue('country', e.value);
                    setSelectCountry(e);
                  }}
                  placeholder="Select Country"
                />
                <SelectTextField
                  label="City"
                  name="city"
                  value={selectCity}
                  options={citesOptions}
                  onChange={(e) => {
                    props.setFieldValue('city', e.value);
                    setSelectCity(e);
                  }}
                  placeholder="Select City"
                />
                <TextField
                  type="text"
                  label="Zip/Postal Code"
                  name="postalCode"
                  placeholder="Enter postal code"
                />
              </div>
              <TextField
                type="date"
                label="Close Date"
                name="date"
                placeholder=""
              />
              <div className="w-full flex items-end justify-end">
                <button
                  type="submit"
                  className=" bg-teal-950 text-white px-4 py-1 border-0 outline-none rounded "
                >
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

export default PropertyDetails;
