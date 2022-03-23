import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Loader from "./Loader";
import { tagsURL } from "../utils/constant";

function Tags(props) {
  const {addTabInFeed} = props;
  const [tags, setTags] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${tagsURL}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => setTags(data.tags))
      .catch((err) => setError("tags " + err));
  }, []);

  console.log(tags);
  
  
  /* "to" attribute is not filled. */

  if(error){
    return <p>Sorry, could not fetch Tags</p>
  }

  if (!tags) {
    return <Loader />;
  }

  return (
    <div className="tags">
      <h3 className="tags-heading">Popular Tags</h3>
      <div className=" flex-30">
        {tags.map((tag) => (
           tag && <NavLink to="" key={tag} className="tag" onClick={() => addTabInFeed(tag)} activeClassName="active-tag">
            {tag}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Tags;
