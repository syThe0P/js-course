//Classes

// class user{
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptedPassword(){
//         return `${this.password}abc`;
//     }
// }

// const chai = new user("Pranav", "@gmail.com", 123);
// console.log(chai.encryptedPassword());
// console.log(chai);

//So before classes how should we have done this 
function User(username, email, password){
    this.username = username;
        this.email = email;
        this.password = password;

}

User.prototype.encryptedPassword = function(){
    return `${this.password}abc`;
}

const tea = new User("Pranav", "@gmail.com", 123);
console.log(tea.encryptedPassword());
console.log(tea);