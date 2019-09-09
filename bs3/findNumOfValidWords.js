/**
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */
var findNumOfValidWords = function(words, puzzles) {
	let sorted_words = [];
	for (let i = 0; i < words.length; i++) {
		// console.log(words[i])
		let arr = words[i].split('');
		let s = new Set();
		for (let j = 0; j < arr.length; j++) s.add(arr[j]);
		sorted_words[i] = Array.from(s).sort().join('')
	}
	let sorted_puzzles = [];
	for (let i = 0; i < puzzles.length; i++) {
		// console.log(puzzles[i])
		sorted_puzzles[i] = puzzles[i].split('').sort().join('')
	}
	// console.log(sorted_words);
	// console.log(sorted_puzzles);

	// let checkStartOk = (words_i, puzzles_i) => words[words_i][0] === puzzles[puzzles_i][0];
	// let totalSet = s;
	let checkII = (words_i, puzzles_i) => {
		// console.log('checkII--', sorted_puzzles[puzzles_i], sorted_words[words_i]);
		if (words[words_i][0] !== puzzles[puzzles_i][0]) return 0;
		// if (sorted_puzzles[puzzles_i].indexOf(sorted_words[words_i]) > -1) return 1;
		// console.log(sorted_puzzles[puzzles_i],sorted_words)

		// console.log(sorted_puzzles[puzzles_i], sorted_words[words_i])
		for (let i = 0, j = 0; i < sorted_words[words_i].length; i++, j++) {
			// console.log(i, j, sorted_puzzles[puzzles_i][j], sorted_words[words_i][i])
			if (sorted_puzzles[puzzles_i][j] !== sorted_words[words_i][i]) return 0;
			while (sorted_puzzles[puzzles_i][j + 1] < sorted_words[words_i][i + 1]) j++;
		}
		return 1;
	}
	let puzzles_re = [];
	for (let x = 0; x < puzzles.length; x++) {
		puzzles_re[x] = 0;
		for (let y = 0; y < words.length; y++) {
			puzzles_re[x] += checkII(y, x);
		}
	}
	console.log(puzzles_re)
	return puzzles_re;
};



let re;

words = ["aaaa", "asas", "able", "ability", "actt", "actor", "access"],
	puzzles = ["aboveyz", "abrodyz", "abslute", "absoryz", "actresz", "gaswxyz"]

words = ["aaaa", "asas", "able", "ability", "actt", "actor", "access"],
	puzzles = ["aboveyz", "abrodyz", "abslute", "absoryz", "actresz", "gaswxyz"]
re = findNumOfValidWords(words, puzzles);
console.log(JSON.stringify(re) === JSON.stringify([1, 1, 3, 2, 4, 0]))




// ["aaaa","asas","able","ability","actt","actor","access"]
// ["aboveyz","abrodyz","abslute","absoryz","actresz","gaswxyz"]
