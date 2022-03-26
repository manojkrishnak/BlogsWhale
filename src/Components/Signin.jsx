import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { signinURL } from "../utils/constant";
import validate from "../utils/validate";
import Loader from "./Loader";
import {setItemToLocalStorage} from "../utils/utils";

function Signin() {
  let history = useHistory();
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const [inputErrors, setinputErrors] = useState({
    email: true,
    password: true,
  });
  const [loginErrors, setLoginErrors] = useState({
    emailOrPwd:""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    let errors = { ...inputErrors };
    const { name, value } = e.target;
    validate(errors, name, value);
    setinputErrors(errors);
    setLoginErrors({emailOrPwd: ""})
    setUserDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    fetch(`${signinURL}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: userDetails }),
    })
      .then((res) =>  res.json())
      .then((data) => {
        console.log(data)
        if (data.errors) {
          setLoginErrors((prevState) => ({
            ...prevState,
            emailOrPwd: "email or password "+ data.errors["email or password"],
          }));
          setLoading(false);
        } else {
          setLoading(false);
          console.log(data)
          setItemToLocalStorage(data.user.token)
          history.push("/");
        }
      })
      .catch((err) => alert(err));
  }

  return (
    <div className="container">
      <div className="signin-form-container text-ct">
        <h2 className="signin-heading">Sign In</h2>
        <Link className="register-link" to="/signup">
          Need an account?
        </Link>
        {loading && <Loader />}
        <form
          className="signin-form flex justify-ct align-ct col form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            value={userDetails.email}
            onChange={handleChange}
          />
          <span className="error">{inputErrors && inputErrors.email}</span>
          <span className="error">{loginErrors.emailOrPwd}</span>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={userDetails.password}
            onChange={handleChange}
          />
          <span className="error">{inputErrors && inputErrors.password}</span>
          <span className="error">{loginErrors.emailOrPwd}</span>
          <button
            className="signin-btn"
            type="submit"
            disabled={inputErrors.email || inputErrors.password}
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
