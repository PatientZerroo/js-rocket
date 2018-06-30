// (>")>  <("<)(>")>  <("<)(>")>  <("<)(>")>  <("<) *Kerby Dancing Bitch*

var doCoolStuff = function () {
	var currentClassName = document.getElementById('cool').className;

	if (currentClassName == 'cool') {
		document.getElementById('cool').className = 'cool red';
	}else {
		document.getElementById('cool').className = 'cool';
	}

	//Changing ClassName
	//document.getElementById('cool').className = 'cool red';
}

var sayMyName = function (name) {
	alert('My Name is: ' +name);
}
// This variable identifies the 'Car' with functions
var car = {
		make: 'BMW',
		type: 'Sport',
		color: 'black',
		isTurnedOn: false,
		numberOfWheels: 4,
		seats:[
			'seat1', 
			'seat2', 
			'seat3', 
			'seat4',
		],
		turnOn: function () {
			this.isTurnedOn = true;
		},
		fly: function () {
			alert('fly');
		},
		switchCar: function (isOn) {
			console.log('turn car '+isOn);
			if (isOn == true) {
				this.isTurnedOn = true;
			} else {
				this.isTurnedOn = false;
			}
		}
	};

console.log('Hello there friends')