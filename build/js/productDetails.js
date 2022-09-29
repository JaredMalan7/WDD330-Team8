var s=(c,t,r)=>new Promise((e,a)=>{var u=d=>{try{o(r.next(d))}catch(i){a(i)}},l=d=>{try{o(r.throw(d))}catch(i){a(i)}},o=d=>d.done?e(d.value):Promise.resolve(d.value).then(u,l);o((r=r.apply(c,t)).next())});import{getLocalStorage as p,setLocalStorage as n}from"./utils.js";export default class h{constructor(t,r){this.productId=t,this.product={},this.dataSource=r}init(){return s(this,null,function*(){this.product=yield this.dataSource.findProductById(this.productId),document.querySelector("main").innerHTML=this.renderProductDetails(),document.getElementById("addToCart").addEventListener("click",this.addToCart.bind(this))})}addToCart(){let t=[];t=p("so-cart"),t===null&&(t=[]),t.push(this.product),n("so-cart",t)}renderProductDetails(){return`<section class="product-detail"> <h3>${this.product.Brand.Name}</h3>
        <h2 class="divider">${this.product.NameWithoutBrand}</h2>
        <img
          class="divider"
          src="${this.product.Image}"
          alt="${this.product.NameWithoutBrand}"
        />
        <p class="product-card__price">$${this.product.FinalPrice}</p>
        <p class="product__color">${this.product.Colors[0].ColorName}</p>
        <p class="product__description">
        ${this.product.DescriptionHtmlSimple}
        </p>
        <div class="product-detail__add">
          <button id="addToCart" data-id="${this.product.Id}">Add to Cart</button>
        </div></section>`}}
