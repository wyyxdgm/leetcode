/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function(transactions) {
	let re = [];
	let obj = {};
	let name, time, amount, city;
	for (let i = 0; i < transactions.length; i++) {
		[name, time, amount, city] = transactions[i].split(',');
		if (amount > 1000) {
			re.push(transactions[i]);
			continue;
		}
		if (!obj[name]) obj[name] = [{
			time,
			amount,
			str: transactions[i]
		}];
		else obj[name].push({
			time,
			amount,
			str: transactions[i]
		});
	}
	console.log(obj)
	for (key in obj) {
		let arr = obj[key];
		for (let gapt = 0; gapt < arr.length; gapt++) {
			// console.log(gapt, arr[gapt]);

			let find = false;
			for (let findt = 0; findt < arr.length; findt++) {
				if (findt === gapt) continue;
				if (Math.abs(arr[gapt].time - arr[findt].time) < 61) {
					// console.log('-----', findt, arr[findt]);
					find = true;
					break;
				}
			}
			if (find) re.push(arr[gapt].str);
		}
	}
	return re;
};


let transactions = ["alice,20,800,mtv", "alice,50,1200,mtv"];

transactions = ["alice,20,800,mtv", "alice,50,1200,mtv"];
// transactions = ["alice,20,800,mtv", "bob,50,1200,mtv"]
console.log(invalidTransactions(transactions));
