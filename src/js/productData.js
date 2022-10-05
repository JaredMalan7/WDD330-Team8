function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    // debugger;
    throw new Error("Bad Response");
  }
}

export default class ProductData  {
  constructor(category) {
    this.category = category;
    // debugger;
    this.path = `../json/${this.category}.json`;
  }
  getData() {
    //debugger;
    //console.log(window.location.pathname);
    return fetch(this.path)
      .then(convertToJson).then((data) => data);

      
  }    

  async findProductById(id) {
    // debugger;
    const products = await this.getData()
    return products.find((item) => item.Id === id);
  }
}

