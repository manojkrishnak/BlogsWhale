import { useEffect, useState } from "react";
import Header from "./Header";
import ArticleHero from "./ArticleHero";
import Loader from "./Loader";
import Footer from "./Footer";
import { useParams } from "react-router-dom";

function IndividualArticle() {
  const [article, setArticle] = useState(null);
  const { slug } = useParams();
  console.log(slug)
  const url = "https://mighty-oasis-08080.herokuapp.com";
  console.log(slug);

  useEffect(() => {
    fetch(`${url}/api/articles/${slug}`)
      .then((res) => res.json())
      .then((data) => setArticle(data.article))
      .catch((err) => console.log(`${err} at Individual Article`));
  }, []);

  console.log(article);

  return (
    <div>
      <Header />
      {article ? (
        <>
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
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default IndividualArticle;
