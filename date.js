
//module.exports is an Object. So, we can use it as an object
//to bind it to several functions as follows



//Below approach is a verbose way to declare JS methods
//I am commenting this out and showing the better method below
//this commented code
// module.exports.getDate = getDate;

// function getDate() {
//     let today = new Date();
//     let options = {
//         weekday: "long",
//         day: "numeric",
//         month: "long"
//     };
//     return today.toLocaleDateString("en-US", options);
// }

//Better method to declare this
module.exports.getDate = function () {
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    return today.toLocaleDateString("en-US", options);
}



//We can also simply write "exports.getDay" instead of "module.exports.getDay"
//These both will work exactly the same because they are very frequently used.
///It's kinda shortcut


//To simplify the code even more, we can use "const" instead of "let"
//as the values of most of the variables will not vary.
exports.getDay = getDay;
function getDay() {
    let today = new Date();
    let options = {
        weekday: "long"
    };
    return today.toLocaleDateString("en-US", options);
}