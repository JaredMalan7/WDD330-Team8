import ProductData from "./productData.js";
import ProductList from "./productList.js";
import { loadHeaderFooter } from "./utils.js";

const dataSource = new ProductData("tents");

const listElement = document.querySelector(".product-list");
const pl = new ProductList("tents",dataSource, listElement)
// debugger
pl.init();

loadHeaderFooter();





