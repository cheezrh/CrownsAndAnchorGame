var Face = require("./Face");
var Bet = require("./Bet");



var myFace = new Face("Crown", 10, "https://image.spreadshirtmedia.com/image-server/v1/mp/compositions/T31A1MPA66PT10X0Y6D1002938993S69PA29PT10X-10Y6B12%3A0%3A56%3A59%7CF61%3A93S100AMCx000000%7CF61%3A93S100AMCx000000Y10X40TRULES%7CF61%3A93S100AMCx000000Y22X40TWERE%7CF61%3A93S100AMCx000000Y34X40TMEANT%7CF61%3A93S100AMCx000000Y46X40TTO+BE%7CF61%3A93S100AMCx000000Y58X40TBROKEN%21%7C/views/3,width=100,height=100,appearanceId=1,backgroundColor=FFFFFF,noPt=true,version=1426103816/success-king-crown-mug.jpg");

var badFace = new Face('Bad', 'bad');

var isFace = myFace instanceof Face

console.log(isface);

var Die = require("./Die");

var die = new Die();

console.log(die.ActiveFace);

die.rollDie();

console.log(die.ActiveFace);