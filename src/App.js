import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Tags from "./components/Tags";
import Posts from "./components/Posts";
import Paginate from "./components/Paginate";
import FeedNav from "./components/FeedNav";
import { articlesURL } from "./utils/constant";

import "./styles/App.css";

function App() {
  const [articles, setArticles] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [totalArticles, setTotalArticles] = useState(0);
  const [offset, setOffset] = useState(0);
  const [error, setError] = useState(null);
  const [addTab, setAddTab] = useState("");

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

  // function updateTagFilteredArticles(articles) {
  //   console.log(articles);
  //   setArticles(articles);
  // }
  /* 
1. Hero
2. Posts
3. Tags(sidebar)
4. Paginate
*/
  return (
    <main>
      <Hero />
      <FeedNav removeTab={removeTabHandler} tabName={addTab}/>
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

export default App;
