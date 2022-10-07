
//http://server-nodejs.cit.byui.edu:3000/checkout



// takes the items currently stored in the cart (localstorage) and returns them in a simplified form.
function packageItems(items) {
    // convert the list of products from localStorage to the simpler form required for the checkout process. Array.map would be perfect for this.
    
    }
    export default class CheckoutProcess {
        constructor(key, outputSelector) {
          this.key = key;
          this.outputSelector = outputSelector;
          this.list = [];
          this.itemTotal = 0;
          this.shipping = 0;
          this.tax = 0;
          this.orderTotal = 0;
        }
        init() {
          this.list = getLocalStorage(this.key);
          this.calculateItemSummary();
        }
        calculateItemSummary() {
          // calculate and display the total amount of the items in the cart, and the number of items.
          
        }
        calculateOrdertotal() {
          // calculate the shipping and tax amounts. Then use them to along with the cart total to figure out the order total
          
          // display the totals.
          this.displayOrderTotals();
        }
        displayOrderTotals() {
          // once the totals are all calculated display them in the order summary page
          
        }
        async checkout(form) {
        // build the data object from the calculated fields, the items in the cart, and the information entered into the form
        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          }
          
        // call the checkout method in our ExternalServices module and send it our data object.
      }
    }


// takes a form element and returns an object where the key is the "name" of the form input.
function formDataToJSON(formElement) {
    const formData = new FormData(formElement),
      convertedJSON = {};
  
    formData.forEach(function (value, key) {
      convertedJSON[key] = value;
    });
  
    return convertedJSON;
  }


  