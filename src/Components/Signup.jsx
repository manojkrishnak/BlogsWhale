import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { signupURL } from "../utils/constant";
import validate from "../utils/validate";
import Loader from "./Loader";

function Signup(props) {
  let history = useHistory();
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errorDetails, setErrorDetails] = useState({
    username: true,
    email: true,
    password: true,
  });

  const [exists, setExists] = useState({
    username: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    const errors = errorDetails;
    validate(errors, name, value);
    setUserDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setErrorDetails((prevState) => ({
      ...prevState,
      errors,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    fetch(`${signupURL}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: userDetails }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errors) {
          setExists((prevState) => ({
            ...prevState,
            email: "email " + data.errors.email,
            username: "username " + data.errors.username,
          }));
        } else {
          setLoading(false);
          history.push("/");
        }
      })
      .catch((err) => alert(err));
  }
  console.log(JSON.stringify({ user: userDetails }));
  return (
    <div className="container">
      <div>
        <div className="signup-form-container text-ct">
          <h2 className="signup-heading">Sign Up</h2>
          <Link className="signin-link" to="/signin">
            Have an account?
          </Link>
          {loading && <Loader />}
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
            <span className="error">{errorDetails.username}</span>
            <span className="error">{exists.username}</span>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              value={userDetails.email}
              onChange={handleChange}
            />
            <span className="error">{errorDetails.email}</span>
            <span className="error">{exists.email}</span>
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
              disabled={errorDetails.email || errorDetails.password}
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
