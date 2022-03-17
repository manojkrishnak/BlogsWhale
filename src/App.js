import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Tags from "./Components/Tags";
import ArticleInFeed from "./Components/ArticleInFeed";
import Paginate from "./Components/Paginate";

import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [totalArticles, setTotalArticles] = useState(0);
  const [offset, setOffset] = useState(0);

  const url = "https://mighty-oasis-08080.herokuapp.com";

  useEffect(() => {
    setLoading(true);
    Promise.all([
      fetch(`${url}/api/articles?limit=10&offset=${offset}`),
      fetch(`${url}/api/tags`)
    ])
      .then((responses) => {
        return Promise.all(responses.map((response) => response.json()));
      })
      .then((data) => {
        setArticles(data[0].articles);
        setTotalArticles(data[0].articlesCount);
        setTags(data[1].tags);
        setLoading(false);
      }).catch(err => alert(err))
  }, [currentPage]);


  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
    setOffset((pageNumber - 1) * postsPerPage);
  }

  function updateTagFilteredArticles(articles){
    console.log(articles)
    setArticles(articles);
  }

  return (
    <div>
      <Header />
      <Hero />
      <div className="container content flex justify-bt align-st">
        <div className=" flex-68">
          <h3 className="gobal-feed-heading">Global Feed</h3>
          <ul>
            {articles.map((article, i) => (
              <li key={i}><ArticleInFeed key={i} article={article} /></li>
            ))}
          </ul>
        </div>
        <div className="tags">
          <h3 className="tags-heading">Popular Tags</h3>
          <div className=" flex-30">
            {tags.map((tag) =>
              tag !== "" ? <Tags key={tag} url={url} tag={tag} tagFilteredArticles={updateTagFilteredArticles}/> : ""
            )}
          </div>
        </div>
      </div>
      <div className="pagination flex justify-ct">
        <Paginate
          totalArticles={totalArticles}
          postsPerPage={postsPerPage}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default App;
