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

export function renderListWithTemplate(template, parent, list, callback) {
  list.forEach(item => {
    const clone = template.content.cloneNode(true);
    const templateWithData = callback(clone, item);
    parent.appendChild(templateWithData);
  })
}

export function renderWithTemplate(template, parent, data, callback) {
  let clone = template.content.cloneNode(true);
  if (callback) {
    clone = callback(clone, data);
  }
  parent.appendChild(clone);
}

export async function loadTemplate(path) {
  const res = await fetch(path);
  const html = await res.text();
  const template = document.createElement('template');
  template.innerHTML = html;
  return template;
}

export async function loadHeaderFooter() {
  const headerTemplate = await loadTemplate('/partials/header.html');
  const footerTemplate = await loadTemplate('/partials/footer.html');

  const headerElement = document.getElementById('main-header');
  const footerElement = document.getElementById('main-footer');

  renderWithTemplate(headerTemplate, headerElement);
  renderWithTemplate(footerTemplate, footerElement);
}


