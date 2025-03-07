// Declare customerName in global scope using var
var customerName = "bob";

// Function to uppercase customerName
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Function to declare bestCustomer in global scope and assign it to 'not bob'
function setBestCustomer() {
    bestCustomer = "not bob"; // No var/let/const = global variable
}

// Function to overwrite bestCustomer
function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
}

// Declare leastFavoriteCustomer as a constant in global scope
const leastFavoriteCustomer = "someone";

// Function to attempt changing leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "another person"; // This will throw an error
}
