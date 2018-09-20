var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/IMG_5037.JPG') {
		myImage.setAttribute ('src','images/IMG_5043.JPG');
	} else {
		myImage.setAttribute ('src','images/IMG_5037.JPG');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'nondescript welcomes you, ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
	} else {
		var storedName = localStorage.getItem('name');
		myHeading.textContent = 'nondescript welcomes you, ' + storedName;
	}

myButton.onclick = function() {
	setUserName();
}