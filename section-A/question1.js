let price = 45
let quantity = 4
let totalCost = price * quantity
let discountedCost = totalCost - 15
let splitCost = discountedCost / 3
let remainder = totalCost % 7

console.log("Total Cost: $" + totalCost)
console.log("Discounted Cost: $" + discountedCost)
console.log("Split Cost: $" + splitCost)
console.log("Remainder when Total Cost is divided by 7: " + remainder)