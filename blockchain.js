//import Block from 'main.js';
const SHA256 = require('crypto-js/sha256')
class Blockchain{
    constructor(difficulty){
        this.blocks = [this.createGenesis()];
        this.difficulty = difficulty;
    }

    createGenesis(){
        return new Block("01/01/2017","Genesis block", "0");
    }

    latestBlock(){
        return this.blocks[this.blocks.length - 1]
    }

    addBlock(newBlock){
        newBlock.previousHash = this.latestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.blocks.push(newBlock);

    }

    checkValid(){
        for (let i = 0;i++;i<this.blocks.length){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i-1];

            if (currentBlock.previousHash !== previousBlock.hash){
                return false;
            }

            if (currentBlock.calculateHash()!= currentBlock.hash){
                return false;
            }
        }

        return true;
    }

    getAllBlocks(){
        return JSON.stringify(this.blocks, null, 4);
    }
}
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
        console.log("Start mining block")
        const target = Array(difficulty+1).join("0");
        while(this.hash.substring(0,difficulty)!== target){
            this.nonce++
            this.hash = this.calculateHash()
        }

    }
}
module.exports = { Blockchain, Block };