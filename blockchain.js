import Block from 'main.js';

class Blockchain{
    constructor(blocks,difficulty){
        this.blocks = [this.createGenesis()];
    }

    createGenesis(){
        return new Block("01/01/2017","Genesis block", "0")) 
    }

    latestBlock(){
        return this.chain[this.chain.length - 1]
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
}