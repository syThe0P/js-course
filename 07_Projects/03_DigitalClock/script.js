const clock = document.getElementById("clock");


//This set interval method runs the particular function in argument for the time given in another argument
setInterval(() => {
  const date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
