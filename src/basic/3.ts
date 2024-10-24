/*
! Завдання 3
* Створіть змінну, яка може містити або рядок, або число (union type). Також, оголосіть змінну, яка може містити лише одне з двох можливих рядкових значень: 'enable' або 'disable' (literal type).
*/

let mixedType: string | number;
let value: "enable" | "disable";

mixedType = 10;
value = "enable";

console.log("Task 3:", mixedType, value);
