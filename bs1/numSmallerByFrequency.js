/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function(queries, words) {
	let countF = inputStr => {
		let min = 0;
		for (let i = 0; i < inputStr.length; i++) {
			if (inputStr.charAt(i) < inputStr.charAt(min)) min = i;
		}
		let count = 0;
		for (let i = 0; i < inputStr.length; i++) {
			if (inputStr[i] === inputStr[min]) count++;
		}
		return count;
	}
	let qL = queries.map(countF);
	let wL = words.map(countF);
	// let wLNumObj={};
	// for(let j=0;j<wL.length;j++){
	// 	if(!wLNumObj[j])wLNumObj[j]=1;
	// 	else wLNumObj[j]++;
	// }
	let re = [];
	for (let i = 0; i < qL.length; i++) {
		re[i] = 0;
		for (let j = 0; j < wL.length; j++) {
			if (qL[i] < wL[j]) re[i]++;
		}
	}
	return re;
	// console.log(wL)
};

queries = ["cbd"], words = ["zaaaz"];
queries = ["bbb", "cc"], words = ["a", "aa", "aaa", "aaaa"]
console.log(numSmallerByFrequency(queries, words));
