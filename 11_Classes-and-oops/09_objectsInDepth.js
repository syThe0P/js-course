const disreptor = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(disreptor);

//So there is also hidden values of the object that is the reason we cannot chage certain values like ->
/* {
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
} */

//So here writable is false and enumerable is also false so we cannot change any value also we cannot apply a loop into it