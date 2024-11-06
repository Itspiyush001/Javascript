const myNums = [1, 2, 3]

// const MyTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc : ${acc} and currval : ${currval}`);
    
//     return acc + currval
// }, 0)

const MyTotal = myNums.reduce( (acc, currval) => acc + currval,0)
   
console.log(MyTotal);


const shoopingCart = [
        {
            itemName : "js course",
            Price : 2999
        },
        {
            itemName : "py course",
            Price : 1999
        },
        {
            itemName : "c# course",
            Price : 999
        },
        {
            itemName : "Data science course",
            Price : 4999
        },
]

const priceTopay = shoopingCart.reduce( (acc, item) => acc + item.Price, 0)
console.log(priceTopay);