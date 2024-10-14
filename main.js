const SHA256 = require('crypto-js/sha256')

class Block{
    constructor(timestamp,data){
        this.index = 0;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = "0";
        this.hash = this.calculateHash();
        this.nonce = 0;
    }


    calculateHash(){
        return SHA256(this.data + this.previousHash + this.timestamp + this.nonce).toString()
    }

    mineBlock(difficulty){
        //Get a string with number of 0 equal to difficulty
        target = 
        while(this.hash.substring(0,difficulty)!== target){
            
        }
    }
}
//For our hash function, we will borrow from crypto-js library and use their SHA256 hash