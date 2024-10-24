/*
! Завдання 4
* У вас є такі функції JavaScript:

? function showMessage(message) {
?   console.log(message);
? }

? function calc(num1, num2) {
?   return num1 + num2;
? }

? function customError() {
?   throw new Error('Error');
? }

* Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
*/

function showMessage(message: string): void {
	console.log(message);
}

function calc(num1: number, num2: number): number {
	return num1 + num2;
}

function customError(): never {
	throw new Error("Error");
}

console.log("Task 4:");
showMessage("Hello");
console.log(calc(10, 20));
try {
	customError();
} catch (error) {
	console.log(error.message);
}
