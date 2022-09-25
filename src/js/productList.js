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
        const template = document.getElementById('product-card-template');
        list.forEach(product => {
          const clone = template.content.cloneNode(true);
          const hydratedTemplate = this.prepareTemplate(clone, product);
          this.listElement.appendChild(hydratedTemplate);
        })
      }
      prepareTemplate(template, product) {
        
        template.querySelector('a').href +=  product.Id;
        // fill in the rest of the data here... 
        return template;
      }
  }