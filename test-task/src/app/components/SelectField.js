import React from 'react';
import { ErrorMessage, useField } from 'formik';
import Select from 'react-select';

const SelectTextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: '#fffff',
      height: '42px',
      border: '0',
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isSelected ? '#002E2E' : isFocused ? '#efefef' : '',
        cursor: isDisabled ? 'not-allowed' : 'default',
      };
    },
  };

  return (
    <div className="form-group  md:my-3 my-4 lg:my-4 ">
      {label && (
        <label
          htmlFor={field.name}
          className="block text-gray-500 text-[14px] leading-[20px] font-jakarta-sans font-medium"
        >
          {label}
        </label>
      )}
      <Select
        styles={colourStyles}
        className={`w-full  h-[44px] rounded-[5px]  mt-2  focus:ring-teal-500 focus:border-teal-500 focus:outline-none     dark:focus:ring-teal-500 dark:focus:border-teal-500 ${
          meta.touched && meta.error
            ? 'border border-red-500 error-form'
            : 'border border-gray-400'
        }`}
        {...field}
        {...props}
      />
      <ErrorMessage
        component="p"
        name={field.name}
        className="text-red-500 font-normal font-jakarta-sans text-sm mt-2"
      />
    </div>
  );
};

export default SelectTextField;
