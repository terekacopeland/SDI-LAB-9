//alert("JavaScript works!");
//SDI 1403
//Lab 9
//Number and Date Objects
//Tereka Copeland

//problem 1
var formatNumber = function() {
	
	var forPI = (Math.PI);
	console.log(Math.PI);
	console.log("PI is equal to " + Math.PI);
	
	
	console.log("If you fix PI to the 5th decimal the result is " + forPI.toFixed(5));
	console.log("If you fix PI to the 6th decimal the result is " + forPI.toFixed(6));
	
};

//formatNumber();

//problem 2
var numberString = function() {
	var myString = "25.2354764";
	console.log("My age is " + myString + ".");
	                           
	//var myFloat = parseInt(myString);   
	var myInt = parseInt(myString);   
                                   
console.log("My age is " + parseInt(myString));

};

numberString();
