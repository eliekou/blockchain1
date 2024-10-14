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

    }

    mineBlock(difficulty){

    }
}
//For our hash function, we will borrow from crypto-js library and use their SHA256 hash