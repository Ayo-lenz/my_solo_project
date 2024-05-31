import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Validation from "../Components/Validation";
import { Axios } from "axios";

const LogIn = () => {
  const [errors, setErrors] = useState({});

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(user));
  };
  const url = ''
  useEffect(() => {
    // to check if the email and yhe password is correct
  /* 
   const loginData = async () => {
      try {
        const response = await Axios.get(url);
        const data = await response.json();

        if (data.includes(user.name) && data.includes(user.password))
          {
            // do something
          }
      } catch {
        console.log(error)
      }
      
    };
    loginData();
  */

    if (
      Object.keys(errors).length === 0 &&
      user.email !== "" &&
      user.password !== ""
    ) {
      navigate("/userprofile");
    }
  }, [errors]);

  return (
    <div className="text-center">
      <form
        action="//"
        className="form text-capitalize rounded py-5 mt-5"
        onSubmit={handleSubmit}
      >
        <h4 className="pb-3">Login to FarmTab</h4>
        <div className="mb-4">
          <input
            type="email"
            className="sign-input p-2"
            id="email"
            name="email"
            placeholder="Email address"
            value={user.email}
            onChange={handleChange}
          />
          {errors.email && (
            <div className="text-danger fs-6">{errors.email}</div>
          )}
        </div>

        <div className="">
          <input
            type="password"
            className="sign-input p-2"
            id="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
          />
          {errors.password && (
            <div className="text-danger fs-6">{errors.password}</div>
          )}
        </div>
        <button type="submit" className="btn btn-success mt-4 w-50">
          Log in
        </button>
      </form>
    </div>
  );
};
export default LogIn;
