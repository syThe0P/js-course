//Inheritance

class User{
    constructor(username){
        this.username = username;
    }
    LogMe(){
        return `Username is ${this.username}`;
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }
    addCourse(){
        return `This course is added by ${this.username}`
    }
}

const chai = new Teacher("Meghna", "Meghna@teacher.com", 1522);
console.log(chai);


//
console.log(chai instanceof Teacher);
console.log(chai instanceof User);