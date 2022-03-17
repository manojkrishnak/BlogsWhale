import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";

function Signup() {
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errorDetails, setErrorDetails] = useState({
    email: "",
    password: "",
  });

  const [validFields, setValidFields] = useState({
    email: false,
    password: false,
  });

  const url = "https://mighty-oasis-08080.herokuapp.com";

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const errors = errorDetails;
    const valid = validFields;
    switch (name) {
      case "email":
        errors.email = validateEmail(value) ? "" : "Email is not valid";
        valid.email = errors.email.length < 1 ? true : false;
        break;
      case "password":
        errors.password =
          value.length < 6
            ? "Password needs to have minimum of 6 characters"
            : "";
        valid.password = errors.password.length < 1 ? true : false;
        break;
      default:
        break;
    }
    console.log(errors);
    setUserDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setErrorDetails((prevState) => ({
      ...prevState,
      errors,
    }));

    setValidFields((prevState) => ({
      ...prevState,
      valid,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`${url}/api/users`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: userDetails }),
    }).then((data) => console.log(">>> " + JSON.stringify(data))).catch(err => console.log(err));
  }
  console.log(JSON.stringify({ user: userDetails }));
  return (
    <div className="container">
      <Header />
      <div>
        <div className="signup-form-container text-ct">
          <h2 className="signup-heading">Sign Up</h2>
          <Link className="signin-link" to="/signin">
            Have an account?
          </Link>
          <form
            className="signup-form flex justify-ct align-ct col form"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              value={userDetails.username}
              onChange={handleChange}
            />
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              value={userDetails.email}
              onChange={handleChange}
            />
            <span className="error">{errorDetails.email}</span>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={userDetails.password}
              onChange={handleChange}
            />
            <span className="error">{errorDetails.password}</span>
            <button
              className="signup-btn"
              disabled={!validFields.email && !validFields.password}
              type="submit"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
