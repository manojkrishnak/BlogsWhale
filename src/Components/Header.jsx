import {NavLink} from "react-router-dom";


function Header() {
  return (
    <header className="header container flex justify-bt align-ct">
      <NavLink className="brand" to="/">
        <h1>BlogsWhale</h1>
      </NavLink>
      <nav className="navbar flex justify-bt">
              <NavLink className="nav-items" activeClassName="active-nav" exact to="/">Home</NavLink>
              <NavLink className="nav-items" activeClassName="active-nav" to="/signin">Sign In</NavLink>
              <NavLink className="nav-items" activeClassName="active-nav" to="/signup">Sign up</NavLink>
      </nav>
    </header>
  );
}

export default Header;
