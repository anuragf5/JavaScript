let sellingPrice = 100,
  costPrice = 50;

let profit;

let profitPercentage;

if (sellingPrice > costPrice) {
  profit = sellingPrice - costPrice;
  profitPercentage = ((sellingPrice - costPrice) / costPrice) * 100;

  console.log(`Profit is ${profit} and profit margin is ${profitPercentage}`);
} else if (sellingPrice < costPrice) {
  profit = costPrice - sellingPrice;
  profitPercentage = ((costPrice - sellingPrice) / costPrice) * 100;

  console.log(`Loss is ${profit} and loss margin is ${profitPercentage}`);
}
else{
    console.log("No profit and loss");
}
