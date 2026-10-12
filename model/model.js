import home from "../pages/home.js";
import news from "../pages/news.js";
import contact from "../pages/contact.js";
import about from "../pages/about.js";


export function loadPage(pageID) {
  console.log(`model.js ${pageID}`);

  switch (pageID) {
    case "home":
      document.querySelector("main").innerHTML = home;
      break;
    case "news":
      document.querySelector("main").innerHTML = news;
      break;
    case "contact":
      document.querySelector("main").innerHTML = contact;
      break;
    case "about":
      document.querySelector("main").innerHTML = about;
      break;
  }
}
