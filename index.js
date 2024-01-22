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

// Funkcja strzałkowa do wypisywania duzych liter z napisu
const getUppercaseLetters = (word) => {
    // Filtruj duże litery z napisu
    const uppercaseLetters = word.split('').filter(letter => letter === letter.toUpperCase());
  
    // Wypisz duże litery
    console.log(`Duże litery w napisie "${word}":`, uppercaseLetters.join(''));
  };
  
  // Przykład użycia
  const inputWord = 'DowolnyNapis';
  getUppercaseLetters(inputWord);
  