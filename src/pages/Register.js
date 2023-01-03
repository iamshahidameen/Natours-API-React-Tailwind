import { useState } from 'react';
import { FormRow } from '../components';

const inittialState = {
  name: '',
  email: '',
  password: '',
  isMemeber: true,
};

const Register = () => {
  const [values, setValues] = useState(inittialState);
  const handleChange = (e) => {
    setValues({
      ...values,
      name: e.target.value,
      email: e.target.value,
      password: e.target.value,
    });
    console.log('Handle Change', e.target);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Handle Submit', e.target);
  };
  return (
    <div className="form-wrapper max-w-[550px] mx-auto bg-white py-[50px] px-[70px] rounded-md my-[80px]">
      <div className="secondary-heading">
        <h3 className="secondary-heading-text mb-9">LOG INTO YOUR ACCOUNT</h3>
      </div>
      <form onSubmit={handleSubmit}>
        {/* Email */}
        <FormRow
          type="email"
          name="email"
          value={values.name}
          handleChange={handleChange}
        />
        {/* Password */}
        <FormRow
          type="password"
          name="password"
          value={values.name}
          handleChange={handleChange}
        />
        <button type="submit" className="btn-primary mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
