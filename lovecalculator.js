var name1 = prompt("your name");
var name2 = prompt("your name");
var lp = Math.random();
lp = lp*100
lp = Math.floor(lp) +1;

if (lp >= 70) {
alert("Hurray!, " +name1.slice(0,1).toUpperCase() +name1.slice(1,name1.count).toLowerCase() +" and " + name2.slice(0,1).toUpperCase() +name2.slice(1,name2.count).toLowerCase() +" stand a " + lp +"% chance of being together! They really do love each other!");
}

if (lp >= 30 && lp < 70) {
alert(name1.slice(0,1).toUpperCase() +name1.slice(1,name1.count).toLowerCase() +" and " + name2.slice(0,1).toUpperCase() +name2.slice(1,name2.count).toLowerCase() +" stand a " + lp +"% chance of being together! ");
}

if (lp < 30) {
alert(name1.slice(0,1).toUpperCase() +name1.slice(1,name1.count).toLowerCase() +" and " + name2.slice(0,1).toUpperCase() +name2.slice(1,name2.count).toLowerCase() +" stand a " + lp +"% chance of being together! They go like oil and water!");
}
