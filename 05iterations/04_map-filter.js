const myNum = [1,2,3,4,5,6];


// const number = myNum.forEach( (item) =>{
//     console.log(item);
// } )

// console.log(number); //This will give a result output of undefined because forEach loop doesnot return any thing

//for that we use filter or map methods


//Filter method -- this basically return the subarray from the given array according to the conditions for example below->

const number = myNum.filter((num) => {
    return num > 2;
});
console.log(number);


//Another example
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //If we want to access all the books with genre history

  let myBooks = books.filter ((bk) =>{
    return bk.genre === "History";
  })

  console.log(myBooks);


  //Map method -- basically this return the array after some changes in the orignal array for example ->

  const array = [1,2,3,4,5,6,7,8,9,10];

  let newArray = array.map((val) => val*10).map((val) => val + 10);
  console.log(newArray);
