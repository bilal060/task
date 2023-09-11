import { ErrorMessage, useField } from 'formik';

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

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
      <div
        className={`w-full rounded-[5px] px-3 mt-2 h-[44px] flex items-center ${
          meta.touched && meta.error
            ? 'border border-red-500 error-form'
            : ' border border-[#B8C1CE]'
        }`}
      >
        {props?.dollarLabel && (
          <p className="block text-black mr-2 text-[14px] leading-[20px] font-jakarta-sans font-medium">
            $
          </p>
        )}
        <input
          className={`w-full h-full rounded-[5px] focus:ring-none focus:border-0 focus:outline-none     dark:focus:ring-none dark:focus:border-0 `}
          {...field}
          {...props}
        />
        {props?.additionalLabel && (
          <p className="block text-black mr-2 text-[14px] leading-[20px] font-jakarta-sans font-medium">
            {props?.additionalLabel}
          </p>
        )}
      </div>
      <ErrorMessage
        component="p"
        name={field.name}
        className="text-red-500 font-normal font-jakarta-sans text-sm mt-2"
      />
    </div>
  );
};

export default TextField;
