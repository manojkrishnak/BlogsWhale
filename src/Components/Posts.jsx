import { Fragment } from "react";
import Post from "./Post";
import Loader from "./Loader";

function Posts(props) {
  console.log(props)
  const {articles, error} = props;


  if (error) {
    return <p>Sorry, could not fetch Posts</p>;
  }

  if (!articles) {
    return <Loader />;
  }

  if (articles.length === 0) {
    return <p className="text-ct">There are no articles.</p>;
  }
  return (
    <Fragment>
      <div className="flex-68">
        <ul>
          {articles.map((article, i) => (
            <li key={i}>
              <Post key={i} article={article} />
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
}

export default Posts;
