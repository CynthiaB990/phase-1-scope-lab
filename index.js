var customerName = "bob";
const leastFavoriteCustomer = 0;

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer(){
    bestCustomer = "maybe bob";
}

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "changed";
}