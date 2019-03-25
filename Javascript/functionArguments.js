// parameters, arguments
// lúc định nghĩa hàm là tham số parameter
// còn lúc chạy hàm thì là đối số arguments

function sayHi(name){
    console.log(arguments);
    console.log(typeof arguments);

    let totalage = 0;
    for(let i = 0; i < arguments.length; i++){

        if(typeof arguments[i] === 'object'){
            totalage += arguments[i].age;
        }
    }
    console.log(totalage);
}

var user1 = {
    age: 12
}

var user2 = {
    age: 14
}

var user3 = {
    age: 18
}
sayHi(user1, user2, user3); // có thể khai báo bao nhiêu tham số tùy thích