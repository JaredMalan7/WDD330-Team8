import { renderListWithTemplate } from "./utils";

export default class ProductList  {
    constructor(category, datasource, listElement) {
      this.category = category;
      this.datasource = datasource;
      this.listElement = listElement;
    }

    async init() {
      const list = await this.datasource.getData();
      this.renderList(list);
    }

    renderList(list) {
      // make sure the list is empty
      this.listElement.innerHTML = '';
      //get the template
      const template = document.getElementById('product-card-template');
      renderListWithTemplate(template, this.listElement, list, this.prepareTemplate);
      
    }
    prepareTemplate(template, product) {
      
      template.querySelector('a').href +=  product.Id;
      template.querySelector('img').src = product.Image;
      template.querySelector('img').alt += product.Name;
      template.querySelector('.card__brand').textContent = product.Brand.Name;
      template.querySelector('.card__name').textContent = product.NameWithoutBrand;
      template.querySelector('.product-card__price').textContent += product.FinalPrice; 
      
      return template;
    }

  }
