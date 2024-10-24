/*
! Завдання 2
* У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. Ваше завдання – використовувати Pick та generics для вказівки, що поля цих параметрів належать AllType. Функція compare повинна повертати AllType.

? type AllType = {
?   name: string;
?   position: number;
?   color: string;
?   weight: number
? }

? function compare (top, bottom): AllType {
?   return {
?     name: top.name,
?     color: top.color,
?     position: bottom.position,
?     weight: bottom.weight,
?   }
? }
*/

type AllType = {
	name: string;
	position: number;
	color: string;
	weight: number;
};

function compare<T extends Pick<AllType, keyof AllType>>(
	top: T,
	bottom: T,
): AllType {
	return {
		name: top.name,
		color: top.color,
		position: bottom.position,
		weight: bottom.weight,
	};
}

const top: AllType = {
	name: "Max",
	position: 1,
	color: "blue",
	weight: 100,
};

const bottom: AllType = {
	name: "Jack",
	position: 2,
	color: "red",
	weight: 120,
};

console.log("Task 2:", compare(top, bottom));
