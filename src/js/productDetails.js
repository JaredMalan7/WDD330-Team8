
import { getLocalStorage, setLocalStorage } from './utils.js';

export default class ProductDetails {
    constructor(productId, dataSource){
        this.productId = productId;
        this.product = {};
        this.dataSource = dataSource;
        this.dataSource.path = `..${this.dataSource.path.substring(6)}`;  // `../json/${this.category}.json`;
        
}
    async init(){
        // debugger;
        this.product = await this.dataSource.findProductById(this.productId);
        document.querySelector('main').innerHTML = this.renderProductDetails();
        // add listener to Add to Cart button
        document.getElementById('addToCart').addEventListener('click', this.addToCart.bind(this));
    }

    addToCart(){
        let allProducts = [];
        allProducts = getLocalStorage("so-cart");
        if (allProducts === null){
            allProducts=[];
        }
        allProducts.push(this.product)
        setLocalStorage("so-cart", allProducts);
    }

    renderProductDetails(){
        return `<section class="product-detail"> <h3>${this.product.Brand.Name}</h3>
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
        </div></section>`;
      }
}