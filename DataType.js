/**
 *  các kiểu dữ liệu trong javascript
 * String
 * number
 * boolean
 * undedine
 * null
 * Object
 * array
 */

// kiểu Object
var person = {
    username : 'minh hung',
    old : 28,
    gender: 'male'
};
console.log(person);

// kieu Array
// tearm: element, lengh, size, index
var arrNumber = [2,4,6]
console.log(arrNumber);
console.log(arrNumber.length);
console.log(arrNumber.size);
console.log(arrNumber[0]);

//-----------------
var carBMW = {
    name:'BMW-30',
    product:'USA'
};
var carVinfast = {
    name:'sedanVin',
    product:'Viet Nam'
};
var arrCar = [carBMW, carVinfast];
console.log("mang vua nhap: ", arrCar);
console.log("do dai mang la: ",arrCar.length);
