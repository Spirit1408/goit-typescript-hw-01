/*
! Завдання 5
* Типізуйте функцію isWeekend яка приймає день тижня з enumDayOfWeek і повертає boolean значення, що вказує, чи це день робочий чи вихідний.

? enum DayOfWeek {
?   Monday,
?   Tuesday,
?   Wednesday,
?   Thursday,
?   Friday,
?   Saturday,
?   Sunday
? }

? const isWeekend = (day) => {}
*/

enum DayOfWeek {
	Monday = "Monday",
	Tuesday = "Tuesday",
	Wednesday = "Wednesday",
	Thursday = "Thursday",
	Friday = "Friday",
	Saturday = "Saturday",
	Sunday = "Sunday",
}

const isWeekend = (day: DayOfWeek) =>
	!!(day === DayOfWeek.Saturday || day === DayOfWeek.Sunday);

console.log(
	"Task 5:",
	isWeekend(DayOfWeek.Tuesday),
	isWeekend(DayOfWeek.Saturday),
);
