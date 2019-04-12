let Face = require("./Face");

class Bet {
    constructor(face, betValue) {
       this.face = face;
       this.betValue = betValue;
        
    }

    set face(face) {
        if(!(face instanceof Face)) {
            throw new Error ("Invalid value for property face");
        }

        this._face = face;
    }    

    get face() {
        return this._face;
    }


    set betValue(betValue) {
        if(isNaN(betValue)) {
            this._value = 10;
        }
        else {
            this._value = betValue;

        
        }

        if (betValue < 1) {
            this._value = 10; 
        }
        else {
            this._value = betValue;
        }
    }

    get value() {
        return this._value;
    }


}

module.exports = Bet;