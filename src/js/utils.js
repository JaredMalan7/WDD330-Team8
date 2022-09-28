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
  const html = await fetch(path).then(converToText);
  const template = document.createElement('template');
  template.innerHTML = html;
  return template;
}

export function loadHeaderFooter(){
  debugger
  header = loadTemplate("../partials/header.html");
  footer = loadTemplate("../partials/footer.html");
  headerDOM = document.querySelector("#main-header")
  footerDOM = document.querySelector("#main-footer")
  renderWithTemplate(header,headerDOM)
  renderWithTemplate(footer,footerDOM)

}










