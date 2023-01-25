import { useState } from 'react';
import { FormRow } from '../components';
import { LOGIN_URL } from '../utils/constants';
import { useUsersContext } from '../context/users_context';

const inittialState = {
  name: '',
  email: '',
  password: '',
  isMemeber: false,
};

const Register = () => {
  // const { getLoginUser } = useUsersContext();
  console.log(useUsersContext());
  const [user, setUser] = useState(inittialState);
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // setUser(...user);
    console.log(user);
    let creds = {
      email: 'john@example.com',
      password: 'test1234',
    };
    // getLoginUser(LOGIN_URL, creds);
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
          value={user.email}
          changeProp={handleChange}
        />
        {/* Password */}
        <FormRow
          type="password"
          name="password"
          value={user.password}
          changeProp={handleChange}
        />
        <button type="submit" className="btn-primary mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
