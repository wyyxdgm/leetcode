/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function(root) {
	let arr = [];


	function count(tree, level) {
		if (!arr[level]) arr[level] = 0;
		if (tree.val) arr[level] += tree.val;
		if (tree.left) count(tree.left, level + 1);
		if (tree.right) count(tree.right, level + 1);
	}
	count(root, 0);
	let len = arr.length;
	let maxIndex = 0;
	console.log(arr)
	for (let i = 0; i < len; i++) {
		if (arr[maxIndex] < arr[i]) maxIndex = i;
	}
	return maxIndex + 1;
};



// let root = [1, 7, 0, 7, -8, null, null]

let root = {
	val: 1,
	left: {
		val: 7,
		left: {
			val: 7,
			left: {
				val: 1
			},
			right: {
				val: 100
			}
		},
		right: {
			val: -8
		}
	},
	right: {
		val: 0
	}
}

console.log(maxLevelSum(root))
