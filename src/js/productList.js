import { renderListWithTemplate } from "./utils.js";
export default class ProductList {
    constructor(category, dataSource, listElement){
        this.category = category;
        this.product = {};
        this.dataSource = dataSource;
        this.listElement = listElement;
}
    async init(){
        const list = await this.dataSource.getData();
        // debugger
        this.renderList(list);
    }
    renderList(list) {
        this.listElement.innerHTML = "";
        const template = document.getElementById('product-card-template');
        
        list.forEach(product => {
        renderListWithTemplate(template, this.listElement, product, this.prepareTemplate);
        });


        // list.forEach(product => {
        //   const clone = template.content.cloneNode(true);
        // //   debugger;
        //     this.prepareTemplate(clone,product);  
        //     this.listElement.appendChild(clone);
        // })
      }
    prepareTemplate(template, product){
        console.log(product.Brand.Name)
        template.querySelector("a").href += product.Id;
        template.querySelector("img").src = product.Image;
        template.querySelector("img").alt += product.Name;
        template.querySelector(".card__brand").textContent = product.Brand.Name;
        template.querySelector(".card__name").textContent = product.NameWithoutBrand;
        template.querySelector(".product-card__price").textContent += product.FinalPrice;
        return template;
    }  



    }