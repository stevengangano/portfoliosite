// console.log('Hey Developer, you"re the best!')

// document.write('Hello friend, welcome to my website')

// alert ('Enjoy clicking me')

// var username = prompt ('What is your name?')

// document.write ('<br> Hello ' + username) // need to add a space after hello for browswer to recognize space

// STRINGS
// var stringVar = 'This is my string variable'
// // NUMBERS
// var numberVar = '28'
// // BOOLEAN
// var booleanVar = false
// // ARRAYS
// var arrayVar = [stringVar, 29, numberVar, 'This is a var', true]

// console.log(arrayVar[0]) // this calls the first array

// OBJECTS
// var objectVar = {
// 	name: 'Stebs', 
// 	height: '4"10',
// 	working: true
// }

// console.log (objectVar.name + ' : ' + objectVar.height)

// IF STATEMENTS

// 1) IF STATEMENT
// var awakeTime = prompt ('When did you wake up?')
// var trainTime = 8
// var classTime = 9

// if ( awakeTime > trainTime ) {
// 	document.write ('You\'re Late')
// } else {
// 	document.write ('You\'re right on time')
// }

// // 2) ELSE STATEMENT

// var code = prompt ('How many hours do you a code a day?')

// if (code > 3) {
// 	document.write ('You will be a good coder!')
// } else {
// 	document.write ('You need more practice')
// }

// 3 ELSE IF STATEMENT


// if ( awakeTime > trainTime ) {
// 	document.write ('You\'re Late')
// } else if (awakeTime < trainTime) { // || = or, && = and, == is equal
// 	document.write ('You\'re right on time')
// } else {
// 	document.write ('this is not a number')
// }


// FOR LOOPS

// 1) create a variable for 0
// 2) Will check if i <= to something


//FUNCTIONS

// function accept (n) {
// 	console.log(n + n)
// }
// // accept(2) gives an answer of 4

// function accept2() {
// 	console.log (2 * 2)
// }
// accept2() // gives an answer of 4

// function askName () {
// var name = prompt ('Enter name')
// alert (name);
// }
// askName();
//Instead of creating a general class like:

//WEek 8

// //1) 
// console.log ('Hello World')
// document.write ('Hello world')
// alert ('Hello world')

// //2)
// var car = prompt ('What kind of car do you drive?')

// //3)
// var car = 'Honda'
// var type = 'CR-V'
// var year = 2013
// var miles = 25000

// //4)

// var grade1 = 3
// var grade2 = 4
// var grade3 = 3

// var GPA = (3+4+3) / 3
// console.log (GPA)

// // //5

// var year = prompt ('What is year is the model of your car?')

// if (year < 2000) {
// 	console.log ('Youre car is old' )
// 	} else {
// 		('Youre car is up to date')
// }

// //6
// for (var i =1; i <= 20; i++ ) {
// 	console.log (i)
// }

// //7
// function say(name) {
// console.log("Hello " + name);
// }
// say('Steven');


// //8

// var favoriteCar = prompt ('What is your favorite car?')


// document.write (favoriteCar ' is a nice car!')


//9

// var username = prompt ('What is your name')

// 		if (username == 'alice' || username == 'bob' == username == 'stebs' ) {
// 			console.log ('Welcome ' + username)
// 		} else {
// 			console.log ('Go away ' + username)
// 		}

//10

// var element = document.getElementById('message') 

// element.innerHTML = 'Hello' // this displays 'Hello' in the div id 'message'

// //11

// var friends = document.getElementbyId ('friends')

// friends.innerHTML = ('Mark', 'Lisa', 'Darren')

//12

// function getInfo(){
//       var myUsername = document.getElementById('username').value // stores value in username
//       var myPassword = document.getElementById('password').value // stores value in password
//              console.log ('My username is ' + myUsername + ' and my password is' + myPassword) // this is what will show when the button is clicked
// }

//13
// function Info(){
//       var username = document.getElementById('myusername').value // stores value in username
//       var myAge = document.getElementById('age').value // stores value in password
//              console.log ('My username is ' + username + ' and my age is ' + myAge) // this is what will show when the button is clicked
// }


// var arrayVar = ['honda', 'toyota', 'ford', 'fiat']
// console.log( arrayVar[3])

// for (i= 0; i < arrayVar.length; i ++) {
//        if (cars[i] = ‘benz’) { // if any of the arrays = benz,
//               console.log(‘You’re driving a ’ + cars[i]) // console.log  cars[i] which equals benz
// 	}


// var danceStyles = ['breakdancing', 'locking', 'popping']

// for (i = 0; i < danceStyles.length; i = i + 1) {
// 	if (danceStyles[i] == 'breakdancing' || danceStyles[i] == 'breakdancing' || danceStyles[i] == 'breakdancing')
// 		console.log ('My favorite dance style is '  + danceStyles[i])
// 	}


var Aries = {
	name: 'Aries',
	description: 15
	
}

var Taurus = {
	name: 'Taurus',
	description: 26

}

var Gemini = {
	name: 'Gemini',
	description: 25

}
var Cancer = {
	name: 'Cancer',
	description: 25

}

var Leo = {
	name: 'Leo',
	description: 26
}

var Virgo = {
	name: 'Virgo',
	description: 25

}
var Libra = {
	name: 'Libra',
	description: 29
}
	
var Scorpio = {
	name: 'Taurus',
	description: 26
}
	
var Sagittarrius = {
	name: 'Sagittarius',
	description: 25

}
var Capricorn = {
	name: 'Capricorn',
	description: 25
}
	
var Aquarius = {
	name: 'Aquarius',
	description: 25
}
var Pisces = {
	name: 'Pisces',
	description: 25
}


var objArray = [Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarrius, Capricorn, Aquarius, Pisces]


function info () {
	var userInput = document.getElementById('userInput').value
	for (i=0; i < objArray.length; i++) {
		if (userInput == objArray[i].name)
			document.write (objArray[i].description)
	} else if 
}