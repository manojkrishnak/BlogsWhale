const ROOT_URL = "https://mighty-oasis-08080.herokuapp.com/api";

const articlesURL = ROOT_URL + "/articles";
const tagsURL = ROOT_URL + "/tags";
const signinURL = ROOT_URL + "/users/login";
const signupURL = ROOT_URL + "/users";
const verifyUserURL = ROOT_URL + "/user";

const localStorageKey = "blog_user";

export { ROOT_URL, articlesURL, tagsURL, signinURL, signupURL, localStorageKey, verifyUserURL };
