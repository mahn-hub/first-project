function calculateBill() {
    let items = parseInt(prompt("Enter number of items:"));
    let total = 0;

    for (let i = 1; i <= items; i++) {
        let price = parseFloat(prompt("Enter price of item " + i + ":"));
        total += price;
    }

    if (total > 5000) {
        total = total - (total * 0.10);
        alert("10% discount applied!");
    }

    alert("Final Bill: " + total);
}

calculateBill();
function calculateGrade(avg) {
    if (avg >= 80) return "A";
    else if (avg >= 60) return "B";
    else if (avg >= 40) return "C";
    else return "Fail";
}

function studentResult() {
    let name = prompt("Enter student name:");
    let total = 0;

    for (let i = 1; i <= 5; i++) {
        let marks = parseFloat(prompt("Enter marks for subject " + i + ":"));
        total += marks;
    }

    let average = total / 5;
    let grade = calculateGrade(average);

    alert("Name: " + name +
          "\nTotal: " + total +
          "\nAverage: " + average +
          "\nGrade: " + grade);
}

studentResult();
function withdrawMoney(balance, amount) {
    if (amount > balance) {
        alert("Insufficient balance");
        return balance;
    } else {
        return balance - amount;
    }
}

function atmSystem() {
    let balance = 10000;

    for (let i = 1; i <= 3; i++) {
        let amount = parseFloat(prompt("Enter amount to withdraw:"));

        let newBalance = withdrawMoney(balance, amount);

        if (newBalance !== balance) {
            balance = newBalance;
            alert("Remaining Balance: " + balance);
            break;
        } else {
            alert("Attempt " + i + " failed");
        }
    }
}

atmSystem();
function calculateOrder(item, quantity) {
    let price = 0;

    if (item === "burger") price = 500;
    else if (item === "pizza") price = 1200;
    else if (item === "drink") price = 200;
    else {
        alert("Invalid item");
        return 0;
    }

    let total = price * quantity;

    if (total > 2000) {
        total -= total * 0.15;
        alert("15% discount applied!");
    }

    return total;
}

function orderSystem() {
    let item = prompt("Enter item (burger/pizza/drink):").toLowerCase();
    let quantity = parseInt(prompt("Enter quantity:"));

    let bill = calculateOrder(item, quantity);

    alert("Final Bill: " + bill);
}

orderSystem();
function calculateSalary(hours) {
    let rate = 500;
    let salary;

    if (hours > 40) {
        let overtime = hours - 40;
        salary = (40 * rate) + (overtime * rate * 1.5);
    } else {
        salary = hours * rate;
    }

    return salary;
}

function employeeSystem() {
    for (let i = 1; i <= 3; i++) {
        let name = prompt("Enter employee name:");
        let hours = parseFloat(prompt("Enter hours worked:"));

        let salary = calculateSalary(hours);

        alert("Employee: " + name + "\nSalary: " + salary);
    }
}

employeeSystem();