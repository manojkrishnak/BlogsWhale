import { NavLink } from "react-router-dom";



function Tags( props) {

  return (
    <NavLink
      to=""
      key={props.tag}
      className="tag"
      activeClassName="active-tag"
    >
      {props.tag}
    </NavLink>
  );
}

export default Tags;
