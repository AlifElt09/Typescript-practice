/**
 * An online store wants to generate a daily sales dashboard. All transaction amounts are stored in an array.
 * Instead of writing one long program, the development team decides to split the calculations into reusable functions.
 * The dashboard should display:
 * - Total sales
 * - Highest transaction
 * - Lowest transaction
 * - Average transaction
 * - Number of transactions above Rp500,000
 * 
 * Student Tasks
 * Create the following functions:
 */

const sales = [
  125000,
  780000,
  250000,
  99000,
  540000,
  670000,
  180000,
  450000,
  310000,
  820000
];

function calculateTotalSales(sales: number[]): number {
  const totalSales = sales.reduce((total, sale) => total + sale, 0);
  return totalSales;
}

function findHighestTransaction(sales: number[]): number {
  const highestSale = Math.max(...sales);
  return highestSale;
}

function findLowestTransaction(sales: number[]): number {
  const lowestSale = Math.min(...sales);
  return lowestSale;
}

function calculateAverageSale(sales: number[]): number {
  const totalSales = sales.reduce((total, sale) => total + sale, 0);
  const averageSale = totalSales / sales.length;
  return averageSale;
}

function countLargeTransactions(sales: number[], minimumAmount: number): number {
  const largeTransactions = sales.filter((sale) => sale >= minimumAmount);
  return largeTransactions.length;
}

console.log("=== Sales Dashboard ===");
console.log("Total sales:", calculateTotalSales(sales));
console.log("Highest transaction:", findHighestTransaction(sales));
console.log("Lowest transaction:", findLowestTransaction(sales));
console.log("Average transaction:", calculateAverageSale(sales));
console.log("Transactions above Rp500,000:", countLargeTransactions(sales, 500000));