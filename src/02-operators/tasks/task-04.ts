/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */

const MechanicalKeyboard : number = 850000
const WirelessMouse : number = 275000
const MousePad : number = 120000 

let Quantity = {MechanicalKeyboard:1, WirelessMouse:2, MousePad:1}

const TotalPurchased = Quantity.MechanicalKeyboard + Quantity.WirelessMouse + Quantity.MousePad
const Subtotal = MechanicalKeyboard + WirelessMouse*Quantity.WirelessMouse + MousePad
const Discount = Subtotal>1000000 ? 10/100*Subtotal : 0
const FinalPrice = Subtotal - Discount



console.log("=== Final Payment Order ===")
console.log("Total Purchased",TotalPurchased)
console.log("Subtotal",Subtotal)
console.log("Final Price",FinalPrice)