/*var string = "Hello";
string += " world";
console.log(string+"!!")*/

/*console.log((5+3)/3)

console.log(undefined/3)

function test1(a) {
	console.log(a/5);
}
test1(1);*/

/*var x=4;
var y="4";
if (x === y) {
	console.log("equal");
}
else
{
	console.log("not equal");
}*/

/*if (false || NaN || "" || undefined || 0 || null) {
	console.log("This line ever executed");
}
else{
	console.log("All false");
}
if (true && "hello" && 1 && -1 && "false") {
	console.log("all true");
}*/
/*function a() 
{
	return{
		name: "pankaj"
	};
}
function b() { 
	return{
		name: "mallik"
	};
}
console.log(a());
console.log(b());*/
/*
var sum = 0;
for (var i = 1; i <= 10; i++) {
	sum += i;
}
console.log(sum);*/

/*function orderChickenWith(sideDish) {
	sideDish = sideDish || "otherwise";
	console.log("Chicken with "+ sideDish);
}
orderChickenWith("noodles");
orderChickenWith()*/
/*var x = 10;
var y = true;
if ( (null) || (console.log("Hello")) || x > 5 || (y == true)) {
  console.log("Hello");
}*/
/*var company = new Object();
company.name = "Facebook";
company.location = "USA";
company.ceo = new Object();
company.ceo.first_name = "Mark";
company.ceo.fav_color = "Blue";
console.log(company);
console.log("Company ceo name is: "+company.ceo.first_name);
console.log(company.name);
console.log(company["name"]);*/
/*
var Facebook = {
	name: "Facebook",
	cse: {
		first_name: "Mark",
		fav_color: "Blue"
	},
	"stocks 0f company": 110
}
console.log(Facebook);*/
/*function multiply(x , y) {
	return x*y;
}
console.log(multiply(4,5));
multiply.version = "v.0.1.1";
console.log(multiply.version);

//Function Factory
function makeMultiplayer(multiplier){
	var myFunc = function(x){
		return multiplier*x;
	};
	return myFunc;
}
var multiplyBy3 = makeMultiplayer(3);
console.log(multiplyBy3(3));
var doubleAll = makeMultiplayer(2);
console.log(doubleAll(24));

//passing function as argument
function functionAsArg(x,operation){
	return operation(x);
}
var result = functionAsArg(12,multiplyBy3)
console.log(result);
var result = functionAsArg(12,doubleAll)
console.log(result);*/
/*var a = 7;
var b = a;
console.log("a: "+a);
console.log("b: "+b);
b = 5;
console.log("After Change b:");
console.log("a: "+a);
console.log("b: "+b);

//call by reference

var a = {
	x: 7
}
var b = a;
console.log("a: "+a.x);
console.log("b: "+b.x);
b.x = 5;
console.log("After Change b:");
console.log("a: "+a.x);
console.log("b: "+b.x);*/

/*function changePrimitive(primeValue) {
	console.log("In changePrimitive.... ");
	console.log("before: ");
	console.log(primeValue);

	primeValue.x = 5;
	console.log("after: ");
	console.log(primeValue);
	//console.log(primeValue);
}
var value = {x: 7}
changePrimitive(value);
console.log("After changePrimitive, orig value");
console.log(value);*/
/*function Circle(radious) {
	this.radious = radious;
	this.getArea = function(){
		return Math.PI * Math.pow(this.radious,2);
	};
}
/*Circle.prototype.CircleArea = function(){
		return Math.PI * Math.pow(this.radious,2);
	};*/
/*		Circle(10);
		console.log(window.radious);
		var Circle1 = new Circle(15);
		var Circle2 = new Circle(20);
		console.log(Circle1);
		console.log(window.radious);
		console.log(Circle1.getArea());
		console.log(Circle2);
		console.log(Circle2.getArea());*/
/*var array = new Array();
array[0] = "Yakub";
array[1] = 3;
array[2] = function(name){console.log("Hello "+name)};
array[3] = {Course: "HTML, CSS, JS"};
array[2]("pankaj");
console.log(array[3].Course);
console.log(array);*/
/*function makeMultiplier(multiplier) {
	return(
		function(x){
			return multiplier * x;
		}
		);
}
var doubleAll = makeMultiplier(2);
console.log(doubleAll(3));*/
