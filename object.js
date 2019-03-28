// var userOne = {
//     email: 'a@gmail.com',
//     name: 'A',
//     login(){
//         console.log(this.email, 'has logged in');
//     },
//     logout(){
//         console.log(this.email, 'has logged out');
//     }
// };

// var userTwo = new user()  

class User{
    constructor(email, name){
        this.email = email;
        this.name = name;
    }
    login(){
        console.log(this.email, 'just logged in');

    }
    logout(){
        console.log(this.email, 'just logged out');
    }
}

var uOne = new User('a@gmail.com', 'A');
var uOne = new User('a@gmail.com', 'ASD');


