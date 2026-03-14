let price1 = 50;
let price2 = 30;
let price3 = 20;

let total = price1 + price2 + price3;

console.log("Total Price:", total);
let price = 200;
let dis = price * 0.10;
let finalPrice = price - dis;

console.log("Price after dis:", finalPrice);
let amount = 500;
let tax = amount * 0.18;
let totalBill = amount + tax;

console.log("Total Bill:", totalBill);
let weight = 60; // kg
let height = 1.6; // meters

let bmi = weight / (height * height);

console.log("BMI:", bmi);
let salary = 50000;
let tx = salary * 0.10;
let finalSalary = salary - tx;

console.log("Salary after tx:", finalSalary);
let r1 = 4;
let r2 = 5;
let r3 = 3;
let r4 = 4;
let r5 = 5;

let average = (r1 + r2 + r3 + r4 + r5) / 5;

console.log("Average Rating:", average);
let orderAmount = 80;
let shipping;

if (orderAmount > 100) {
    shipping = 0;
} else {
    shipping = 10;
}

console.log("Shipping Charge:", shipping);
let P = 1000;
let R = 5;
let T = 2;

let SI = (P * R * T) / 100;

console.log("Simple Interest:", SI);
let balance = 1000;
let withdraw = 300;

let remaining = balance - withdraw;

console.log("Remaining Balance:", remaining);
let minutes = 135;

let hours = Math.floor(minutes / 60);
let remainingMinutes = minutes % 60;

console.log("Hours:", hours);
console.log("Minutes:", remainingMinutes);
let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
    console.log("Login Successful");
} else {
    console.log("Invalid Username or Password");
}
let age = 16;

if (age < 18) {
    console.log("Access Denied");
} else {
    console.log("Access Allowed");
}
let order = 250;
let discount = 0;

if (order > 200) {
    discount = order * 0.20;
} else if (order > 100) {
    discount = order * 0.10;
}

let finalAmount = order - discount;

console.log("Final Amount:", finalAmount);
let marks = 75;
let grade;

if (marks >= 80) {
    grade = "A";
} else if (marks >= 70) {
    grade = "B";
} else if (marks >= 60) {
    grade = "C";
} else {
    grade = "Fail";
}

console.log("Grade:", grade);
let weather = "rainy";

if (weather === "hot") {
    console.log("Drink more water");
} else if (weather === "cold") {
    console.log("Wear warm clothes");
} else if (weather === "rainy") {
    console.log("Take an umbrella");
} else {
    console.log("Weather normal");
}