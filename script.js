function findLargest(a, b, c) {
	let largest;

	if (a >= b && b >= c) {
		largest = a;
	} else if (b >= a && b >= c){
		largest = b;
	}
	else {
		largest = c;
	}
	return largest;
  //your code here
}
console.log(findLargest(100, 200, 50));   // 200
console.log(findLargest(-100, -200, -50)); // -50
console.log(findLargest(-100, 200, 50));   // 200
console.log(findLargest(0, 0, 0));   

const num1 = parseInt(prompt("Enter First Number."));
const num2 = parseInt(prompt("Enter Second Number."));
const num3 = parseInt(prompt("Enter Third Number."));
alert(findLargest(num1, num2, num3));
