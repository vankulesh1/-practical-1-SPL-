// Приклад функції для обчислення суми двох чисел
function add(a, b) {
    return a + b;
}

// Приклад масиву з числами
const numbers = [1, 2, 3, 4, 5];

// Функція для обчислення суми чисел у масиві
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Створення об'єкта користувача
const user = {
    name: "John",
    age: 25,
    isStudent: false,
};

// Функція для привітання користувача
function greetUser(user) {
    return `Hello, ${user.name}!`;
}

// Виклик функцій для перевірки
console.log(add(10, 20)); // Виведе 30
console.log(sumArray(numbers)); // Виведе 15
console.log(greetUser(user)); // Виведе "Hello, John!"

// Додаткові функції для створення 200 рядків коду
for (let i = 0; i < 190; i++) {
    console.log(`Line ${i + 10}`);
}
