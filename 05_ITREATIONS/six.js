// const coding = ["js", "ruby", "cpp", "ts"]

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item;
// })
// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newMynums = myNums.filter( (num) => {
//     return num > 5

// })
// console.log(newMynums);

const newNums = []

myNums.forEach( (num) => {
    if (num > 5) {
        newNums.push(num)
    }
})
// console.log(newNums)

const books = [
    {title : 'Book one', genre: 'fiction', publish : 1980, 
        edition : 1992},
        {title : 'Book Two', genre: 'Non-fiction', publish : 1982, 
            edition : 1990},
        {title : 'Book Three', genre: 'History', publish : 1985, 
            edition : 1997},
        {title : 'Book four', genre: 'Non-fiction', publish : 1979, 
            edition : 1988},
        {title : 'Book five', genre: 'Science', publish : 1989, 
            edition : 2000},
        
        {title : 'Book Seven', genre: 'Science', publish : 1966, 
            edition : 1972},
        {title : 'Book Eight', genre: 'History', publish : 1978, 
            edition : 1999},
        {title : 'Book Three', genre: 'History', publish : 1985, 
            edition : 1997},
    ];

let userBooks = books.filter( (bk) => bk.genre === 'History' )

userBooks = books.filter( (bk) => {
    return bk.publish > 1980 && bk.genre === 'History'
})
console.log(userBooks);