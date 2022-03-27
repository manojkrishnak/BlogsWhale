import { useEffect, useState } from "react";
import Hero from "./Hero";
import Tags from "./Tags";
import Posts from "./Posts";
import Paginate from "./Paginate";
import FeedNav from "./FeedNav";
import { articlesURL } from "../utils/constant";
import { getItemFromLocalStorage } from "../utils/utils";
import "../styles/App.css";

function HomePage() {
  const [articles, setArticles] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [totalArticles, setTotalArticles] = useState(0);
  const [offset, setOffset] = useState(0);
  const [error, setError] = useState(null);
  const [addTab, setAddTab] = useState("");
  const [token, setToken] = useState(null);

  useEffect(() => {
    fetch(
      `${articlesURL}?limit=10&offset=${offset}` + (addTab && "&tag=" + addTab)
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        setArticles(data.articles);
        setTotalArticles(data.articlesCount);
      })
      .catch((err) => setError("posts " + err));
    setToken(getItemFromLocalStorage("token"));
  }, [currentPage, addTab]);

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
    setOffset((pageNumber - 1) * postsPerPage);
  }

  function addTabHandler(name) {
    setAddTab(name);
  }

  function removeTabHandler() {
    setAddTab("");
  }

  return (
    <main>
      <Hero />
      <FeedNav removeTab={removeTabHandler} tabName={addTab} />
      <div className="container content flex justify-bt align-st">
        <Posts articles={articles} error={error} />
        <Tags addTabInFeed={addTabHandler} />
      </div>
      <Paginate
        totalArticles={totalArticles}
        postsPerPage={postsPerPage}
        paginate={paginate}
        currentPage={currentPage}
      />
    </main>
  );
}

export default HomePage;
