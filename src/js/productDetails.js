


export default class ProductDetails {
    constructor(productId, dataSource){
  this.productId = productId;
  this.product = {};
  this.dataSource = dataSource;
}
    init(){

    }

    addToCart(){
        setLocalStorage("so-cart", product);
    }

    renderProductDetails(){

    }
}