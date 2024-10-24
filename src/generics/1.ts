/*
! Завдання 1
* Типізуйте асинхронну функцію fetchData, яка приймає URL ресурсу та повертає об'єкт з даними. Використовуйте Generics для типізації повернутих даних.

? import axios from 'axios';

? async function fetchData(url) {
?   try {
?     const response = await axios.get(url);
?     return response.data;
?   } catch (error) {
?     throw new Error(`Error fetching from ${url}: ${error}`);
?   }
? }
*/

import axios from "axios";

async function fetchData<T>(url: string): Promise<T> {
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		throw new Error(`Error fetching from ${url}: ${error}`);
	}
}

fetchData("https://jsonplaceholder.typicode.com/todos/1").then((data) =>
	console.log("Task 1:", data),
);