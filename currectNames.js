const getSumOfTopBuyersTotalSpent = (topBuyersTotalSpent) => {
    let totalSpent  = 0;
    topBuyersTotalSpent.forEach(spent => {
        totalSpent += spent;
    });
    return totalSpent;
  }
  
  let topBuyersTotalSpent = [10000, 20000, 30000];
  console.log(getSumOfTopBuyersTotalSpent(topBuyersTotalSpent));