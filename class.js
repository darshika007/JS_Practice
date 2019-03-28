class User{
    constructor(email, name){
        this.email = email;
        this.name = name;
    }
}

var userO = new User('a@gmail.com', 'A');
var userT = new User('b@gmail.com', 'B');

console.log(userO);
console.log(userT);