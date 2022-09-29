import{loadHeaderFooter as e}from"./utils.js";function o(a){return JSON.parse(localStorage.getItem(a))}function s(){let a="";const r=o("so-cart"),t=r.map(c=>l(c));document.querySelector(".product-list").innerHTML=t.join("")}function l(a){const r=`<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${a.Image}"
      alt="${a.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${a.Name}</h2>
  </a>
  <p class="cart-card__color">${a.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${a.FinalPrice}</p>
</li>`;return console.log(r),r}s(),e();
