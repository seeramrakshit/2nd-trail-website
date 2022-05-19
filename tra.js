//alert('hii');
//console.log('How are you');
//var x=3;
//var y=5;
//console.log(x*y);


/*console.error('error high alert');
console.log(x);
console.log(typeof x);
const k=4;
const l=undefined;
const m=true;
const t=null;
console.log(typeof k);
console.log(typeof l);
console.warn('warning high elert');
*/


/*
const nam = 'Smrithin Sat';
const age = 30;
console.log(`My name is ${nam} and I am ${age}`);
const hell = `My name is ${nam} and I am ${age}`;
console.log(hell);
console.log(nam.length);
console.log(nam);
console.log(nam.toUpperCase());
console.log(nam.toLowerCase());
console.log(nam.substring(0,8).toUpperCase());
console.log(nam.split(' '));
console.log(nam.split(''));
*/


/*const sim = new Array(1,2,3,3,4,5,4);
console.log(sim);
const mon = new Array('smrithin','Rakshit');
console.log(mon);
const fruit = ['apple','mango',30,true,null];
console.log(fruit);
fruit.unshift('strawberries');
fruit.push('papaya');
console.log(fruit);
console.log(Array.isArray('papaya'));
console.log(fruit.indexOf(30));
console.log(sim.indexOf(9));
*/


/*const person = {
	first: 'mowa',
	last: 'bro',
	age: 70,
	hobbies: ['sports','web-devlopement'],
	address: {
		street: 'mancity',
		city: 'kigzill',
	},
};
console.log(person);
console.log(person.hobbies[1]);
console.log(person.address.street);
const {first,last,address:{street},address}=person;
console.log(street);
console.log(first);
console.log(address);
person.email="jhon.co@kmal.com";
console.log(person);
*/

/*
const todo = [
	{
		id:1,
		text:"meet friend",
		iscom:true,
	},
	{
		id:2,
		text:"attend class",
		iscom:true,
	},
	{
		id:3,
		text:"sleep",
		iscom:false,
	},
];
console.log(todo[1].text);
console.log(todo);
todo[1].iscom = false;
//console.log(todo);
const todojsn = JSON.stringify(todo);
console.log(todojsn);


/*
for (var i = 0.; i < 10; i++){
	console.log(i*i-2);
	console.log(`for loop no. ${i}`);
};
while(i>21){
	console.log(i);
	i++;
};
for(var i=0;i<todo.length;i++){
	console.log(todo[i].text);
};
for(var t of todo){
	console.log(t.text);
	console.log(t);
}
*/
//console.log("hii");

/*
todo.forEach(function(todo) {
	// body...
	console.log(todo.id);
})

const tet = todo.map(function(todo){
	return todo.text;
});
console.log(tet);
todo[2].iscom=true;
const com = todo.filter(function(todo){
	return todo.iscom === true;
})/*.map(function(todo){
	return todo.text;
});*/
/*
console.log(com);

const kar =com.map(function(todo){
	return todo.text;
});
console.log(kar);
*/

/*
var tom = window.prompt("enter element");
if(tom==10){
	console.log('x = 10');
}
else if(tom>10){
	console.log('x>10');
}
else{
	console.log(tom<10);
}
const rom = tom>10 ? tom*12 : tom/3;
console.log(rom);

const addNum = (num1=1,num2=1) => {
	return num1+num2;
}
console.log(addNum(tom,rom));
*/

/*
function Vehicle(wheels,gear,steiring,seater,dob){
	this.wheels = wheels;
	this.gear = gear;
	this.steiring = steiring;
	this.seater = seater;
	this.dob = new Date(dob);
};
const veh1 = new Vehicle(4,'auto','left',6,'2-20-1099');
console.log(veh1);
const like = 'hi \n 2nd line \n \t 3rd line \\ hi'
console.log(like);
*/

//alert('hii');
function bet(){
	alert('hello again');
	for (var i = 0; i<2; i++){
		alert(i);
	}
}
function chalu(){
	document.write('chalu ra babu');
}
var r = confirm('Welcome to the page');
function tabb(){
	var r = confirm('chalur');
	if (r===true) {
		r="you pressed ok";
		window.alert('poo');
	}
	else{
		r="you cancelled";
		window.confirm('goo');
	}
	console.log(r);
	var ko = prompt('enter your name');
	r= `hello ${ko}`;
	window.alert(r);
};

function changecol(){
	var kr = 4*56;
	var kk1 = document.getElementById('we1');
	var kk2 = document.getElementById('we2');
	kk1.className = 'coll1';
	kk2.className = 'coll2';
	kk1.innerHTML = 'charan'
	kk2.innerHTML = 'smrithin';
}