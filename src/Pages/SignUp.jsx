import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Validation from "../Components/Validation";
import Axios from "axios";

const SignUp = () => {
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const url = "";
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(user));

    
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      Axios.post(url, {
        name: user.name,
        email: user.email,
        password: user.password,
      }).then((response) => {
        console.log(response.user);
      });
    }
      if (
        Object.keys(errors).length === 0 &&
        user.name !== "" &&
        user.password !== ""
      ) {
        navigate("/userprofile");
      }
  }, [errors]);

  return (
    <>
      <h3 className="sign-header text-center py-5">
        Welcome to Farm-Tab, An Agro E-commerce that takes Agriculture to the
        next level
      </h3>
      <div className="text-center">
        <form
          action="//"
          className="form text-capitalize rounded py-5"
          onSubmit={handleSubmit}
        >
          <h4 className="pb-3">Create an Account</h4>
          <div className="mb-4">
            <input
              type="name"
              className="p-2 sign-input"
              id="name"
              name="name"
              placeholder="Full name"
              value={user.name}
              onChange={handleChange}
            />
            {errors.name && (
              <div className="text-danger fs-6">{errors.name}</div>
            )}
          </div>
          <div className="mb-4">
            <input
              type="email"
              className="p-2 sign-input"
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
              className="p-2 sign-input"
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
            Register
          </button>
        </form>

        <p className="mt-3">
          Already have an account?{" "}
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="btn btn-success"
          >
            Login
          </button>
        </p>
        <p>this is my {user.name}</p>
      </div>
    </>
  );
};
export default SignUp;
