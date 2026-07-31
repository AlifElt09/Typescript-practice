/**
 * An Internet Service Provider recommends an internet package based on the customer's monthly data usage.
 * Business Rules
 * | Monthly Usage    | Recommended Package |
 * | ---------------- | ------------------- |
 * | Less than 50 GB  | Basic               |
 * | 50–150 GB        | Standard            |
 * | More than 150 GB | Premium             |
 * 
 * Today's customer has used:
 * | Information   | Value        |
 * | ------------- | ------------ |
 * | Customer Name | Raka Saputra |
 * | Monthly Usage | 124 GB       |
 * 
 * Tasks:
 * 1. Declare all variables.
 * 2. Implement the business rules using if...else if...else.
 * 3. Display the recommended package.
 */


type Customer = {
  CustomerName:string,
  MontlyUsage:number
}

const customer1:Customer = {
  CustomerName:"Raka Saputra",
  MontlyUsage:160,
}


let PackageRecomendation:string;
if (customer1.MontlyUsage<50) {
  PackageRecomendation =  "Basic"
} else if (customer1.MontlyUsage<=150) {
  PackageRecomendation = "Standard"
} else {
  PackageRecomendation = "Premium"
}


console.log("=== Internet Package Recommendation ===")
console.log ("Customer name = "+customer1.CustomerName)
console.log("Montly Usage = "+customer1.MontlyUsage)
console.log("Package Recommendation = "+ PackageRecomendation)