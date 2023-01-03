import React from 'react';

const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div className="flex flex-col form-group mb-6">
      <label
        htmlFor={name}
        className="block text-[#777] font-bold mb-[7.5px] capitalize"
      >
        {name}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        className="block text-[15px] py-[12.5px] px-[17.5px] border w-full bg-[#f2f2f2] border-y-[3px] border-y-transparent border-x-0 rounded-[3px] box-border focus:border-b-[#ff7730] outline-none capitalize"
        placeholder={name}
      />
    </div>
  );
};

export default FormRow;
