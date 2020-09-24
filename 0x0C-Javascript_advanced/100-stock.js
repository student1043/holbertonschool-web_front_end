let stock = {
    macbook: 0,
    iphone: 4
}
function processPayment(itemName) {
    stock[itemName] -= 1;
    console.log("Payment is being processed for item", itemName);
}
function processError(itemName) {
    console.log("No more",itemName,"in stock");
    console.log("Payment is not being processed");
}
function processOrder(itemName, callbackPayment, callbackError) {
    console.log("Verifying the stock of",itemName);
    if (stock[itemName] !== undefined && stock[itemName] > 0) {
        callbackPayment(itemName);
    }
    else {
        callbackError(itemName);
    }
}
console.log("Please enter the item you would like to purchase (Macbook, iPhone)");
let name = window.prompt();
name = name.toLowerCase();
processOrder(name, processPayment, processError);
