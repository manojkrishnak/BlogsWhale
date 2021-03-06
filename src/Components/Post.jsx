import { Link } from "react-router-dom";
import {formatDate} from "../utils/utils";


function Post(props) {
  console.log(props);

  return (
    <article className="article-feed">
      <div className="flex justify-bt align-ct">
        <div className="flex align-ct">
          <figure className="user-img">
            <img
              src={props.article.author.image || "/images/smiley.jpg"}
              alt={props.article.author.username + "_img"}
            />
          </figure>
          <div className="ml-0-7 flex col">
            <Link
              className="article-feed-username"
              to={`/@${props.article.author.username}`}
            >
              {props.article.author.username}
            </Link>
            <span className="created-date">
              <time dateTime={props.article.createdAt}>
                {formatDate(props.article.createdAt)}
              </time>
            </span>
          </div>
        </div>
        <span className="likes">
          <i className="fas fa-heart fa-sm"></i>
          {props.article.favoritesCount}
        </span>
      </div>
      <h2 className="article-feed-heading">
        <Link
          className="article-feed-title"
          to={{
            pathname: `/article/${props.article.slug}`,
            slug: props.article.slug,
          }}
        >
          {props.article.title}
        </Link>
      </h2>
      <p className="article-desc">{props.article.description}</p>
      <div className="flex justify-bt align-ct">
        <Link
          className="read-btn"
          to={{
            pathname: `/article/${props.article.slug}`,
            slug: props.article.slug,
          }}
        >
          Read more ...
        </Link>
        <div>
          {props.article.tagList.length > 0 ?props.article.tagList.map((tag) => (
            <Link
              className="article-tags"
              key={tag}
              to={`/api/articles/?tag=${tag}`}
            >
              {tag}
            </Link>
          )): ""}
        </div>
      </div>
    </article>
  );
}

export default Post;
