const SHA256 = require('crypto-js/sha256')
const {Blockchain, Block}  =require('./blockchain');
/* const Block = require('') */
//For our hash function, we will borrow from crypto-js library and use their SHA256 hash


//Main program

let blockChain1 = new Blockchain(3);


blockChain1.addBlock(new Block("17/02/1992","data1"))
blockChain1.addBlock(new Block("19/04/2003","data2"))
console.log(blockChain1.checkValid());
console.log(JSON.stringify(blockChain1, null, 4));
/* MediaSourceHandle.exports = block */