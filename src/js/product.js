import ProductData from "./productData.js";
import ProductDetails from "./productDetails.js";
import { getParam } from "./utils.js";

const productId = getParam("product");
const dataSource = new ProductData();

const product = new ProductDetails(productId, dataSource);
product.init();

// let products = [];

// // //function convertToJson(res) {
// // //  if (res.ok) {
// //   //  return res.json();
// // //  } else {
// //   //  throw new Error("Bad Response");
// //   }
// // }
// //
// function setLocalStorage(key, data) {
//   localStorage.setItem(key, JSON.stringify(data));
// }

// // get tents data
// //function getProductsData() {
// //   fetch("../json/tents.json")
// //     .then(convertToJson)
// //     .then((data) => {
// //       products = data;
// //     });
// // }
// // or should we do it this way?
// // async function getProductsDataAwait() {
// //   products = await fetch("../json/tents.json").then(convertToJson);
// // }

// // add to cart button event handler
// function addToCart(e) {
//   // const product = products.find((item) => item.Id === e.target.dataset.id);
//   setLocalStorage("so-cart", product);
// }

// getProductsData();
// // add listener to Add to Cart button
// document.getElementById("addToCart").addEventListener("click", addToCart);
