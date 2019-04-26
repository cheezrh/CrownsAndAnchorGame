const Face = ["Diamonds", "Spades", "Hearts", "Clubs", "Anchors", "Crowns"]
/*
 *  Helper Functions Begin
 */ 
// returns a random integer in the range [m, n] (inclusive)
function rand(m, n) {
  return m + Math.floor((n - m + 1) * Math.random())
}

// randomly returns a string representing one of the six
// Crown and Anchor faces
function randFace() {
  const randIndex = rand(0, 5)
  return FACES[randIndex]
}

/*
 *  Helper Funcions End
 */

let funds = 20
let bet = {
  face: -1,
  amount: -1
}

while (funds > 0 && funds < 100) {
  
  bet.face = -1 
  while (bet.face < 1 || bet.face > 6) {
    bet.face = prompt("choose number between 1 - 6")
  }
  
  bet.amount = -1
  while ( bet.amount < 0 ||  bet.amount > funds){
     bet.amount = prompt("choose bet amount")
  }
  
  funds -= bet.amount
  
  let face = randFace()
  console.log('face: ' + face)
  if (bet.face === face) {
    console.log("you win " + betAmount * 2)
    funds += betAmount * 2
  } 
  
  console.log('funds remaining: ' + funds)
  console.log(' ')
}