// console.log('hello')
// const isEven = a => {
// 	if (a % 2 == 0) {
// 		return true
// 	} else return false
// }
// console.log(isEven(4))

// const isEven2 = a => {
//     return a % 2 == 0 ? true : false
// }
// isEven2(2)
// console.log(isEven2)

// hoisting
//nie musze dpoisywać true false, on jest domyślnie. trójargumentowy OK
// console.log(isEven3(3))
// function isEven3(a) {
// 	return a % 2 == 0
// }

//Rekurencja zwracacanie funkcji w samej funkcji
// const isEven4 = a => {
// 	if (a == 0) return true
// 	else if (a == 1) return false
// 	else if (a < 0) return isEven4(-a)
// 	else return isEven4(a - 2)
// }
// console.log(isEven4(-2))
//switch
// const isEven5 = a => {
// 	switch (true) {
// 		case a == 0:
// 			return true
// 		case a == 1:
// 			return false
// 		case a < 0:
// 			return isEven5(-a)
// 		default:
// 			return isEven5(a - 2)
// 	}
// }
// console.log(isEven5(0));
//wyszukiwanie dużego B
// const countLetters = (name, x) => {
// 	let output = 0
// 	const letter = name.toUpperCase()
// 	for (let i = 0; i < letter.length; i++) {
// 		if (letter[i] === x) {
// 			output++
// 		}
// 	}
// 	return output
// }
// console.log(countLetters('BBPappP','P'))

// const countBs = (name) => {
//     return countLetters(name,'B')

// }
// console.log(countBs('Buba'));

//------------------------------------------------------------------------------------------
//Funkcja strzałkowa do wypisywania duzych liter z napisu
// const getUppercaseLetters = (word) => {
//     const uppercaseLetters = word.split('').filter(letter => letter === letter.toUpperCase());

//     console.log(`Duże litery w napisie "${word}":`, uppercaseLetters.join(''));
//   };

//   const inputWord = 'DowolnyNapis';
//   getUppercaseLetters(inputWord);

// const msg = 'elo elo'
// console.log(msg)
// const numbers = [2, 5, 7, 10, 34, 16, 879, 1]
// //   Napisz funkcję, która wypisze w konsoli nową tablicę zawierającą tylko parzyste liczby z tablicy numbers.
// const newNumbers = numbers.filter(number => number % 2 === 0)
// console.log(newNumbers)
// Napisz pętlę wywołującą siedem razy funkcję console.log i drukującą poniższy trójkąt:

// let i = 0
// while (i < 8) {
//   i++
// 	console.log(i)
// }
// do{i++
//   console.log(i);}
//   while(i<8)
// for(let i=0; i<8; i++)console.log(i);
// for(let i='#'; i.length<8; i+='#')console.log(i);
// let i = '#'
// while (i.length < 8) {
// 	console.log(i)
// 	i += '#'
// }

// Napisz program drukujący za pomocą console.log wszystkie liczby od 1 do
// 100 z dwoma wyjątkami. Zamiast liczb podzielnych przez 3 wydrukuj słowoFizz,
// a zamiasat liczb podzielnych przez 5 wydrukuj słowo Buzz.

// for (let i = 1; i <= 100; i++) {
// 	if (i % 3 == 0 && i % 5 == 0) {
// 		console.log('fizzbuzz')
// 	} else if (i % 5 == 0) {
// 		console.log('buzz')
// 	} else if (i % 3 == 0) {
// 		console.log('fizz')
// 	} else console.log(i)
// }
// for (let i = 1; i < 100; i++) {
// 	switch (true) {
// 		case i % 3 == 0 && i % 5 == 0:
// 			{
// 				console.log('fizzbuzz')
// 			}
// 			break
// 		case i % 3 == 0:
// 			console.log('fizz')
// 			break
// 		case i % 5 == 0:
// 			{
// 				console.log('buzz')
// 			}
// 			break
// 		default:
// 			console.log(i)
// 	}
// }

// const promiseA = new Promise((resolve, reject) => {
//   resolve(777);
// });
//            At this point, "promiseA" is already settled.
// promiseA.then((val) => console.log("asynchronous logging has val:", val));
// console.log("immediate logging");

// produces output in this order:
// immediate logging
// asynchronous logging has val: 777

//   const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("foo");
//     }, 300);
//   });

//   myPromise
//     .then(handleFulfilledA, handleRejectedA)
//     .then(handleFulfilledB, handleRejectedB)
//     .then(handleFulfilledC, handleRejectedC);
