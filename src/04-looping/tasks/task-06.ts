/**
 * A warehouse stores the stock quantity of each product in following array.
 * Warehouse Rules:
 * - Out of Stock → quantity = 0
 * - Low Stock → quantity < 10
 * - Safe Stock → quantity ≥ 10
 * 
 * Students have to Calculate:
 * - Number of Out of Stock products
 * - Number of Low Stock products
 * - Number of Safe Stock products
 * - Total inventory
 * - Average stock quantity
 */

type stock = {
  productname:string,
  stock:number
}
const stocks: stock [] = [
  {productname: "Mouse", stock:15,},
  {productname: "keyboard", stock:0,},
  {productname: "cooler laptop", stock:5,},
  {productname: "mousepad", stock:25,},
  {productname: "kabel roll", stock:10,}
];

let totalinventory = 0, outofstock = 0, safestock = 0, lowstock = 0, safestockname:string ="",lowstockname:string = "", outofstockname:string = "", safestockleft = 0, lowstockleft = 0, outofstockleft = 0;

console.log("=== Inventory stock ===")

for( const stock of stocks) {
  if(stock.stock >=10) {
    safestock++
    safestockname += `Product name = ${stock.productname}  Stock product = ${stock.stock}, `
  } else if (stock.stock > 0) {
    lowstock++
    lowstockname += `Product name = ${stock.productname}  Stock product = ${stock.stock}, `
  } else  {
    outofstock++
    outofstockname += `Product name = ${stock.productname}  Stock product = ${stock.stock}, `
  }
  totalinventory += stock.stock
}


const averagestock = totalinventory / stocks.length;


console.log("Safe stock list : "+safestockname+ "| product left : "+ safestock)
console.log("Low stock list : "+lowstockname+ "| product left : "+ lowstock)
console.log("Out stock list : "+outofstockname+ "| product left : "+ outofstock)

console.log("Average stock : "+averagestock)
console.log("Total inventory : "+totalinventory)

