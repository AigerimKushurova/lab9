//ex2
function ex2(a,b){
	let peri= (a+b)*2;
	return peri;
}
let a=2;
let b=3;
console.log(ex2(a,b));

//ex3
function ex3(r){
	const PI= 3.14;
	let area= PI *(r*r);
	return area;
}
let radius=2;
console.log(ex3(radius));

//ex4
function ex4(n){
	let e4= "Hi, "+ n + "!";
	return e4;
}
let name = "Aigerim";
console.log(ex4(name));

//ex11
function ex11(od){
	let div = od % 2;
	if (div == 0){
		result = "even";
	}
	else {
		result = "odd";
	}
	return result;
}
let od_= 345;
console.log(ex11(od_));


//ex13
function ex13(a,b){
if (a>b) {
	greatest_numb= a;
}
else if (a==b){
	greatest_numb = "equal"
}
else{
	greatest_numb= b;
}
return greatest_numb;
}

let num1 = 3;
let num2 = 43;
console.log(ex13(num1,num2));


//ex14 
function ex14(a,b,c){
	if (a>b) {
		biggest_num= a;
	}
	else {
		biggest_num= b;
	}

	if (c>biggest_num){
		biggest_num= c;
	}

	return biggest_num;
}

let a14 = 333;
let b14 = 53;
let c14 = 23;
console.log(ex14(a14,b14,c14));


