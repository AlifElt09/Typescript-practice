/**
 * An online store wants to analyze today's sales transactions. 
 * Each transaction amount is stored in an array.
 * ---------------------------------
 * const sales = [
 * 125000,
 * 350000,
 * 78000,
 * 910000,
 * 150000,
 * 420000,
 * 275000,
 * 99000,
 * 640000,
 * 18000
 * ]
 * -------------------------------------
 * 
 * Student task in calculate:
 * 1. Total sales revenue
 * 2. Highest transaction
 * 3. Lowest transaction
 * 4. Number of transactions worth Rp300,000 or more
 * 5. Average transaction value
 */

const sales = [
  125000,350000,78000,910000,150000,420000,275000,99000,640000,18000
]
let totalsales = 0, highest = 0,  lowest = 0,sales300 = 0, average:number

sales.forEach( sale => {
totalsales += sale
highest = highest <sale ?sale:highest;
lowest = lowest >sale || lowest == 0?sale:lowest;
if (sale>=300000) {sales300++}
}
)

average = totalsales / sales.length

console.log("=== Test ===")
console.log("Total Sales Revenue = "+totalsales)
console.log("Highest transaction = "+highest)
console.log("Lowest transaction = "+lowest)
console.log("Sales number 300+ = "+sales300)
console.log("Average transaction value = "+average)