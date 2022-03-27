import { Fragment } from "react";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <header className="header container flex justify-bt align-ct">
      <NavLink className="brand" to="/">
        <h1>BlogsWhale</h1>
      </NavLink>
      <nav className="navbar flex justify-bt">
        {props.isAuthenticated ? <AuthHeader /> : <NoAuthHeader />}
      </nav>
    </header>
  );
}

function NoAuthHeader() {
  return (
    <Fragment>
      <NavLink className="nav-items" activeClassName="active-nav" exact to="/">
        Home
      </NavLink>
      <NavLink className="nav-items" activeClassName="active-nav" to="/signin">
        Sign In
      </NavLink>
      <NavLink className="nav-items" activeClassName="active-nav" to="/signup">
        Sign Up
      </NavLink>
    </Fragment>
  );
}

function AuthHeader() {
  return (
    <Fragment>
      <NavLink className="nav-items" activeClassName="active-nav" exact to="/">
        Home
      </NavLink>
      <NavLink className="nav-items" activeClassName="active-nav" to="/new-post">
        <i className="fas fa-pen fa-xs icon"></i>New Post
      </NavLink>
      <NavLink className="nav-items" activeClassName="active-nav" to="/settings">
        <i className="fas fa-cog fa-xs icon"></i>Settings
      </NavLink>
      <NavLink className="nav-items" activeClassName="active-nav" to="/profile">
        Profile
      </NavLink>
    </Fragment>
  );
}

export default Header;
