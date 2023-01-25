import { useState } from 'react';
import { FormRow } from '../components';
import { LOGIN_URL } from '../utils/constants';
import { useUsersContext } from '../context/users_context';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMemeber: false,
};

const Register = () => {
  const {
    get_user_loading: loading,
    get_user_success: loggedIn,
    get_user_error: error,
    get_user_response: response,
    getLoginUser,
  } = useUsersContext();

  const [user, setUser] = useState(initialState);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('resp =>', response.status);
    console.log(user, user.email, user.password);
    let creds = {
      email: user.email,
      password: user.password,
    };
    getLoginUser(LOGIN_URL, creds);
  };
  return (
    <div className="form-wrapper max-w-[550px] mx-auto bg-white py-[50px] px-[70px] rounded-md my-[80px]">
      {loggedIn && <h3>Loogin is successfull</h3>}

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
