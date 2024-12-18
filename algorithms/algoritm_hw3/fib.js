const fibonacciRecursive = n => {
	if (n <= 0) {
		return 0
	} else if (n === 1) {
		return 1
	} else {
		return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
	}
}
console.log(fibonacciRecursive(15))

const fibonacciIterative = n => {
	if (n <= 0) {
		return 0
	} else if (n === 1) {
		return 1
	}
	let a = 0,
		b = 1
	for (let i = 2; i <= n; i++) {
		let temp = a + b
		a = b
		b = temp
	}
	return b
}
console.log(fibonacciIterative(15))
