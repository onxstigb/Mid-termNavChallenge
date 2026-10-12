import {loadPage} from "../model/model.js"

function changeRoute(){
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "")


    console.log(pageID);
    loadPage(pageID)
}


function initApp(){
    loadPage("home");
    window.addEventListener("hashchange", changeRoute)
}

function myNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

initApp();
