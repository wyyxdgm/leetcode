/**
 * @param {number[]} calories
 * @param {number} k
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */

var dietPlanPerformance = function(calories, k, lower, upper) {
	let sum = 0;
	let l = calories.length;
	// let fnT=(calories,i,endi,lower,upper)=>{
	// 	let t = 0;
	// 	for(let j=i;j<=endi;j++){
	// 		t+=calories[j]
	// 	}
	// }
	let total = 0;
	for (let j = 0; j < k; j++) {
		total += calories[j]
	}
	// console.log(total)
	for (let i = 0, endi = k - 1; endi < l; i++, endi++) {
		if (i != 0) total = total + calories[endi] - calories[i - 1]
		sum += total < lower ? -1 : (total > upper ? 1 : 0);
		// console.log('i', i, 'total', total, 'sum', sum)
	}
	return sum;
};

let re;

calories = [1, 2, 3, 4, 5], k = 1, lower = 3, upper = 3
re = dietPlanPerformance(calories, k, lower, upper);
console.log(re === 0)

calories = [3, 2], k = 2, lower = 0, upper = 1
re = dietPlanPerformance(calories, k, lower, upper);
console.log(re === 1)

calories = [6, 5, 0, 0], k = 2, lower = 1, upper = 5
re = dietPlanPerformance(calories, k, lower, upper);
console.log(re === 0)
