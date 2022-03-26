import { Fragment } from "react";
import Tags from "./Tags";
import Posts from "./Posts";
import Paginate from "./Paginate";
import FeedNav from "./FeedNav";

function PrivateHomePage() {
  return (
    <main>
    {/* <FeedNav removeTab={removeTabHandler} tabName={addTab} />
    <div className="container content flex justify-bt align-st">
      <Posts articles={articles} error={error} />
      <Tags addTabInFeed={addTabHandler} />
    </div>
    <Paginate
      totalArticles={totalArticles}
      postsPerPage={postsPerPage}
      paginate={paginate}
      currentPage={currentPage}
    /> */}
  </main>
  );
}

export default PrivateHomePage;
