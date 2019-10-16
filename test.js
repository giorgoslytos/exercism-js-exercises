let orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
]

console.log(orders.reduce((sum, order) => sum + order.amount, 0))
