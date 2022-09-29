import ProductData from "./productData.js";
import ProductList from "./productList.js";
import { loadHeaderFooter } from "./utils.js";

const productIds = ["880RR", "985RF", "985PR", "344YJ"];
const dataSource = new ProductData("tents");
const listElement = document.querySelector(".product-list");
const dataSourceList = new ProductList("tents", dataSource, listElement, productIds);

loadHeaderFooter();
dataSourceList.init();
