// Function overloading




function sayHi(first, middle, last){
    console.log('Hi', first + ' ' + middle + ' ' + last);
    console.log(3);
}

sayHi("Dao", "Trong");
sayHi("Dao", "Trong", "Van");

function sayHi(first, last){
    var middle = arguments[2] || "Van";
    console.log('Hi', first + ' '+ middle + ' ' + last);
    console.log(2);
}

