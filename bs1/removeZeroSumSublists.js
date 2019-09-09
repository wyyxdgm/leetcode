var DinnerPlates = function(capacity) {
	this.capacity = capacity;
	this.arr = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
DinnerPlates.prototype.push = function(val) {
	if (this.arr.length < this.capacity) {
		console.log(this.arr)
		return this.arr.unshift(val);
	}
};

/**
 * @return {number}
 */
DinnerPlates.prototype.pop = function() {
	return this.arr.pop() || -1;
};

/** 
 * @param {number} index
 * @return {number}
 */
DinnerPlates.prototype.popAtStack = function(index) {
	if (!this.arr.length) return -1;
	let re = this.arr.splice(index, 1);
	if (re[0]) return re[0];
	return -1;
};



var D = new DinnerPlates(2); // 初始化，栈最大容量 capacity = 2
D.push(1);
D.push(2);
D.push(3);
D.push(4);
D.push(5); // 栈的现状为：    2  4
// 1  3  5
// ﹈ ﹈ ﹈
D.popAtStack(0); // 返回 2。栈的现状为：      4
// 1  3  5
// ﹈ ﹈ ﹈
D.push(20); // 栈的现状为：  20  4
// 1  3  5
// ﹈ ﹈ ﹈
D.push(21); // 栈的现状为：  20  4 21
// 1  3  5
// ﹈ ﹈ ﹈
D.popAtStack(0); // 返回 20。栈的现状为：       4 21
// 1  3  5
// ﹈ ﹈ ﹈
D.popAtStack(2); // 返回 21。栈的现状为：       4
// 1  3  5
// ﹈ ﹈ ﹈ 
D.pop() // 返回 5。栈的现状为：        4
	// 1  3 
	// ﹈ ﹈  
D.pop() // 返回 4。栈的现状为：    1  3 
	// ﹈ ﹈   
D.pop() // 返回 3。栈的现状为：    1 
	// ﹈   
D.pop() // 返回 1。现在没有栈。
D.pop() // 返回 -1。仍然没有栈。
