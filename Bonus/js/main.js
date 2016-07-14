var Lexus ={
	make: 'IS 300',
	year: 2016,
	color: 'black',
	image: 'img/bmw.jpg'
}
var BMW ={
	make: 'M-3',
	year: 2016,
	color: 'silver',
	image: 'img/lexus.jpg'
}
var Tesla ={
	make: 'P85-D',
	year: 2016,
	color: 'black',
	image: 'img/tesla.png'
}

var cars = [Lexus, BMW, Tesla]

for (i=0; i<cars.length;i++) {
	document.getElementById('image' + i).src = cars[i].image
	document.getElementById('make' + i).innerHTML = cars[i].make
	document.getElementById('year' + i).innerHTML = cars[i].year
	document.getElementById('color' + i).innerHTML = cars[i].color
}