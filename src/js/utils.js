// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}
export function getParam(param){
  const queryString = window.location.search;
  const urlParam = new URLSearchParams(queryString);
  return urlParam.get(param);
}

export function renderListWithTemplate(template, parentElement, product, callback) {
  let clone = template.content.cloneNode(true);
  if (callback) {
    clone = callback(clone, product);
  }

  parentElement.appendChild(clone);
}


export function renderWithTemplate(template, parentElement, data, callback) {
  let clone = template.content.cloneNode(true);
  if (callback) {
    clone = callback(clone, data);
  }

  parentElement.appendChild(clone);
}

export async function loadTemplate(path){
  console.log(location.pathname)
  const html = await fetch(path).then(convertToText);
  const template = document.createElement('template');
  template.innerHTML = html;
  return template;
}

export async function loadHeaderFooter(){
  let header = '';
  let footer = '';
  // debugger;
  // header = await loadTemplate("../src/partials/header.html");
  // debugger;
  // footer = await loadTemplate("../src/partials/footer.html");

  if(location.pathname.indexOf("src") >= 0) {
    header = await loadTemplate("../src/partials/header.html");
    footer = await loadTemplate("../src//partials/footer.html");
  // } else if(location.pathname.indexOf("build") >= 0) {
  //   header = await loadTemplate("../build/partials/header.html");
  //   footer = await loadTemplate("../build/partials/footer.html");
  }else {
    header = await loadTemplate("../partials/header.html");
    footer = await loadTemplate("../partials/footer.html");
  }

  const headerDOM = document.querySelector("#main-header");
  const footerDOM = document.querySelector("#main-footer");
  renderWithTemplate(header,headerDOM);
  renderWithTemplate(footer,footerDOM);

}

function convertToText(res) {
  if (res.ok) {
    return res.text();
  } else {
    throw new Error("Bad Response");
  }
}








