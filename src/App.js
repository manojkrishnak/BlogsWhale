import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import NoMatch from "./components/NoMatch";
import PrivateHomePage from "./components/PrivateHomePage";
import IndividualArticle from "./components/IndividualArticle";
import HomePage from "./components/HomePage";
import { getItemFromLocalStorage } from "./utils/utils";
import { localStorageKey, verifyUserURL } from "./utils/constant";
import FullPageLoader from "./components/FullPageLoader";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isVerifying, setIsVerifying] = useState(true);

  useEffect(() => {
    const authToken = getItemFromLocalStorage(localStorageKey);
    if (authToken) {
      fetch(verifyUserURL, {
        method: "GET",
        headers: {
          authorization: `Token ${authToken}`,
        },
      })
        .then((res) => res.json())
        .then(({ user }) => updateUser(true, { user }));
    } else {
      setIsVerifying(false);
    }
  }, []);

  function updateUser(status, user) {
    setIsAuthenticated(true);
    setUser(user);
    setIsVerifying(false);
  }

  if (isVerifying) {
    return <FullPageLoader />;
  }

  return (
    <BrowserRouter>
      <Header isAuthenticated={isAuthenticated} />
      {
        isAuthenticated ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes updateUser={updateUser}/>
      }
    </BrowserRouter>
  );
}

function AuthenticatedRoutes(props) {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/article/:slug">
        <IndividualArticle />
      </Route>
      <Route path="/private">
        <PrivateHomePage />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  );
}

function UnauthenticatedRoutes(props) {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/signin">
        <Signin updateUser={props.updateUser} />
      </Route>
      <Route path="/signup">
        <Signup updateUser={props.updateUser} />
      </Route>
      <Route path="/article/:slug">
        <IndividualArticle />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  );
}

export default App;
