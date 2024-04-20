//Static is a property which we can apply to stop giving the access of particular method or function like below
class User{
    constructor(username){
        this.username = username;
    }
    LogMe(){
        return `Username is ${this.username}`;
    }
    static createId(){             // Now we cannot access it 
        return `123`;
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

const pranav = new User("Pranav", "email", 123);
console.log(pranav);
// console.log(pranav.createId());
