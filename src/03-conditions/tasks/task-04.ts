/**
 * A hotel determines room availability using the following rules.
 * First, the system checks whether rooms are still available.
 * If rooms are available:
 * - Premium members receive a free room upgrade.
 * - Regular customers receive the reserved room only.
 * 
 * If no rooms are available:
 * - Premium members are placed on the priority waiting list.
 * - Regular customers are informed that no rooms are available.
 * 
 * Today's reservation:
 * | Information    | Value       |
 * | -------------- | ----------- |
 * | Customer Name  | Nadia Putri |
 * | Premium Member | Yes         |
 * | Room Available | No          |
 * 
 * The system should display the appropriate message.
 * Student Tasks: 
 * 1. Declare all variables.
 * 2. Implement the logic using nested if statements.
 * 3. Display the reservation result.
 */

type CustomerFormat = {
  CustomerName : string,
  PremiumMember : boolean,
  roomAvailable : boolean
}

const CustomerRevervation : CustomerFormat = {
  CustomerName : "Nadia Putri",
  PremiumMember : true,
  roomAvailable : false
}


if (CustomerRevervation.roomAvailable === true) {
  if (CustomerRevervation.PremiumMember === true) {
    console.log("Room Upgrade");
  } else {
    console.log("Reserved Room");
  }
} else {
  if (CustomerRevervation.PremiumMember === true) {
    console.log("Priority Waiting List");
  } else {
    console.log("No Rooms Available");
  }
}