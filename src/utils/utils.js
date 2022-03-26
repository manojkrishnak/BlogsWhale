export function formatDate(createdDate) {
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return new Date(createdDate)
    .toLocaleDateString("en-US", options)
    .replaceAll(",", "");
}


export function setItemToLocalStorage(token){
  return window.localStorage.setItem("token", token);
}

export function getItemFromLocalStorage(key){
  return window.localStorage.getItem(key);
}