import { NavLink } from "react-router-dom";

function FeedNav({ removeTab, tabName }) {
  return (
    <ul className="flex feed-nav">
      <li onClick={removeTab}>
        <NavLink
          className={
            tabName === ""
              ? "gobal-feed-heading active-tab"
              : "gobal-feed-heading"
          }          
          to={""}
        >
          Global Feed
        </NavLink>
      </li>
      {tabName && (
        <li>
          <NavLink
            className={
              tabName !== ""
                ? "gobal-feed-heading active-tab"
                : "gobal-feed-heading"
            }   
            to={""}
          >
            #{tabName}
          </NavLink>
        </li>
      )}
    </ul>
  );
}

export default FeedNav;
