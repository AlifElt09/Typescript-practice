/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */
const enum CurrentDiscounted {
havediscount = "Yes",
notdiscount = "No"
}

type product = {
    productCode: string;
    productName: string;
    sellingPrice: number;
    stockQuantity: number;
    productWeight: number;
    averageCustomerRating: number;
    currentDiscount: CurrentDiscounted;
}

const product1: product = {
    productCode: "prod1",
    productName: "Guide book",
    sellingPrice: 10000,
    stockQuantity: 10,
    productWeight: 5,
    averageCustomerRating: 4.5,
    currentDiscount: CurrentDiscounted.havediscount
};
const product2: product = {
    productCode: "prod2",
    productName: "Pencil",
    sellingPrice: 2000,
    stockQuantity: 43,
    productWeight: 0.2,
    averageCustomerRating: 4.2,
    currentDiscount: CurrentDiscounted.havediscount
};
const product3: product = {
    productCode: "prod3",
    productName: "Bolpoin",
    sellingPrice: 5000,
    stockQuantity: 29,
    productWeight: 0.3,
    averageCustomerRating: 5,
    currentDiscount: CurrentDiscounted.notdiscount
};


let productCatalog: product[] = [product1, product2, product3];

console.log("-- Product Catalog Summary --");
console.log(productCatalog);