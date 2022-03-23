import { useEffect, useState, Fragment } from "react";
import ArticleHero from "./ArticleHero";
import Loader from "./Loader";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { articlesURL } from "../utils/constant";

function IndividualArticle() {
  const [article, setArticle] = useState(null);
  const { slug } = useParams();
  console.log(slug)

  useEffect(() => {
    fetch(`${articlesURL}/${slug}`)
      .then((res) => res.json())
      .then((data) => setArticle(data.article))
      .catch((err) => console.log(`${err} at Individual Article`));
  }, []);

  console.log(article);

  return (
    <div>
      {article ? (
        <Fragment>
          <ArticleHero article={{ ...article }} />
          <div className="container each-article-content">
            <p className="">{article.body}</p>
            <div className="each-article-tags">
              {article.tagList.map((tag) => (
                <span className="article-tags" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <hr />
            <Footer />
          </div>
        </Fragment>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default IndividualArticle;
