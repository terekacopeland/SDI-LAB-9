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

	if (isNaN(myString)) {

		//console.log("String is a number!");
		
		return "String is not a number";

	} else {

		//console.log("String is a decimal! Press enter to convert the age.");

		var myInt = parseInt(myString);
		
		//console.log("My age is " + parseInt(myString));
		
		return myInt;
	};

};

console.log("My age returned as a number is " + numberString() + ".");

//problem 3
var myFunction = function() {

	var stringDate1 = new Date("9/01/1988")
	var stringDate2 = new Date("10/02/1988")

	var timeDiff = Math.ceil(stringDate2.getTime() - stringDate1.getTime());
	var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

	console.log("The day difference between the two dates is " + diffDays);
	//console.log("The difference between the two dates in hours is " + timeDiff);
};

//myFunction();
