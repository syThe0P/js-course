const randomColor = function(){
    const hexValue = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += hexValue[Math.floor(Math.random() * 16)];
    }
    return color;
}
let intervalID;
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");

const changeBgColor = function(){
    setInterval(changeBg, 1000);
    function changeBg(){
        document.body.style.backgroundColor = randomColor();
    }
    
}


const stopBgColor = function(){
    clearInterval(intervalID);
}
start.addEventListener("click", changeBgColor);

stop.addEventListener("click", stopBgColor);