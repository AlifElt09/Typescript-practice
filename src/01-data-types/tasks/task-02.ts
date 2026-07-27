/**
 * An e-commerce platform is preparing a flash sale event. Before the discount calculation begins,
 * the system temporarily stores several pieces of information as individual variables.
 * A customer wants to purchase a Mechanical Keyboard RGB with the product code KBR-001.
 * The original price of the product is 850000 rupiahs,
 * and the flash sale offers a 25% discount. The customer plans to buy 2 keyboards.
 * Because the customer is a premium member, they are eligible for free shipping.
 * The current stock available in the warehouse is 18 units.
 *
 * Task:
 * 1. Identify every value that should become a variable.
 * 2. Choose an appropriate variable name for each value.
 * 3. Determine the correct data type.
 * 4. Declare all variables in TypeScript.
 * 5. Display the product data using console.log.
 */

const MechanicalKeyboardRGB: {
  type: string;
  productCode: string;
  originalPrice: number;
  availableStock: number;
} = {
  type: "Mechanical Keyboard RGB",
  productCode: "KBR-001",
  originalPrice: 850000,
  availableStock: 18,
};
const discountPercentage: number = 25;

enum memberStatus {
  Premium = "Premium Member",
  Regular = "Regular Member",
}

const CustomerData = {
  username: "John Doe",
  memberStatus: memberStatus.Premium,
};
const transactionData = {
  customer: CustomerData.username,
  memberStatus: CustomerData.memberStatus,
  product: MechanicalKeyboardRGB,
  quantityToPurchase: 2,
  totalPrice:
    MechanicalKeyboardRGB.originalPrice * 2 * (1 - discountPercentage / 100),
};

console.log("=== Flash Sale Product Data ===");
console.log("Product Information:", MechanicalKeyboardRGB);
console.log("Discount Percentage:", discountPercentage + "%");
console.log("Customer Information:", CustomerData);
console.log("Transaction Details:", transactionData);
console.log("Flash Sale Product Data displayed successfully!");
