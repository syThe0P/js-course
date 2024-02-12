//Immediately Invoked Functionk Expressions(iife) -> they are just functions which are immediately invoked to avoid global scope polution

//normal function

function chai(){
    console.log(`db connected`);
}

chai();

//iife

(function chai1(){                    //This is named iife
    console.log(`db connected two`);
})();


(()=>{                                 //This is unaamed iife
    console.log(`db connected three`);
})();


//And if we want to pass variables

((name)=>{
    console.log(`db connected with ${name}`);
})(`pranav`);