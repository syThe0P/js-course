//For loop


//This will print number from 1 to 10
for (let i = 1; i <= 10; i++) {
    // const element = i;
    // console.log(element);
    
}


//Print multiplication table of 9

for (let i = 1; i <= 10; i++){
    // console.log(`9 * ${i} = ${9*i}`);
}


//Loop through arrays
const array = ["Super man", "Bat man", "Spider Man", "Flash"]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
    
}

//Break and continue statements

//break
for (let i = 0; i <= 10; i++) {
    if(i == 5){
        console.log("5 is detected");          //this will break out of this loop the moment it hit 5
        break;
    }
    console.log(i);
    
}   


//continue
for (let i = 0; i <= 10; i++) {
    if(i == 5){
        console.log("5 is detected");          //this will continue the statement and give one more channce even if it hit 5
        continue
    }
    console.log(i);
    
}   