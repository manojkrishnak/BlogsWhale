import { Link } from "react-router-dom";
import {formatDate} from "../utils/utils";

function ArticleHero(props) {
  console.log(props);


  return (
    <div className="each-article-hero flex col justify-bt">
      <h2 className="each-article-heading">{props.article.title}</h2>
      <div>
        <div className="flex align-ct">
          <figure className="user-img">
            <img
              src={props.article.author.image}
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
      </div>
    </div>
  );
}

export default ArticleHero;
