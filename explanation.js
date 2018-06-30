// Explanations
//BOOLEAN
var name1 = 'Dustin';
var name2 = 'Bob';
if (name1=='Dustin' || name2 == 'Bob') {
	alert ('true 1');
} else if (name2=='Dustin') {
	alert ('true 2');
} else {
	alert ('false');
}

var number1 = 10;
var number2 = 100;
if (number1>number2) {
	alert (true)
} else {
	alert (false)
}

if ('male'= 'male') { 
	alert ('male')
}
if (1==1) {
	alert (true)
}
if (10>1) {
	alert (true)
}


//FUNCTIONS
var fullName = function (firstname, secondname) {
	return firstname + '' secondname;
}
var area =  function (width, height){
	return width*height;
}
var WhatIsMyFavColor = function () {
	return 'red';
	return true;
	return false;
}
var doSomething = function () {
	console.log("Do Something!!!")
}

//VARIABLES
var favColor = 'red';
var myFavColors = ['red', 'blue', 'green'];
var numOfFavColors  = 3;
var hasGotFavColors = true;
var dustinObject = {
	firstName: 'Dustin',
	lastName: 'Claridge',
	myFavColors: ['red', 'blue', 'green'];
	yearsAlive: 103
	isMale: true
}
