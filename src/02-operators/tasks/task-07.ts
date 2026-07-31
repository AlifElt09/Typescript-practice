/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */

type CustomerReservasion = {
    roomPrice : number;
    nightsStayed : number;
    serviceCharge : number;
    tax : number;
    vipMember : boolean;
}

const RevervasionOrder1 : CustomerReservasion = {
    roomPrice : 650000,
    nightsStayed : 4,
    serviceCharge : 120000,
    tax : 0.11,
    vipMember : true
}

const VipDiscount = RevervasionOrder1.vipMember ? RevervasionOrder1.roomPrice * 0.12 : 0;
const Tax = RevervasionOrder1.tax * RevervasionOrder1.roomPrice;

const FinalPayment = RevervasionOrder1.roomPrice * RevervasionOrder1.nightsStayed + RevervasionOrder1.serviceCharge + Tax - VipDiscount;
const breakfast = RevervasionOrder1.nightsStayed >= 3 || RevervasionOrder1.vipMember;

const CustomerBookingOrder = {
    RevervasionOrder1,
    VipDiscount,
    Tax,
    FinalPayment,
    breakfast
}

console.log("=== Customer Booking Order ===");
console.log(CustomerBookingOrder);