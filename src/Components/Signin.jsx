import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function Signin() {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const url = "https://mighty-oasis-08080.herokuapp.com";

  const handleChange = (e) => {
    setUserDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`${url}/api/users/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: userDetails }),
    })
    //   .then((res) => res.json())
      .then(res => console.log(">>> "+JSON.stringify(res)));
  }



  return (
    <div className="container">
      <Header />
      <div className="signin-form-container text-ct">
        <h2 className="signin-heading">Sign In</h2>
        <Link className="register-link" to="/signup">
          Need an account?
        </Link>
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
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={userDetails.password}
            onChange={handleChange}
          />
          <button className="signin-btn" type="submit">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
