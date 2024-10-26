const SHA256 = require('crypto-js/sha256')
const {Blockchain, Block}  =require('./blockchain');
const {HttpServer} = require('./server/server');
/* const Block = require('') */
//For our hash function, we will borrow from crypto-js library and use their SHA256 hash


//Main program


let blockChain1 = new Blockchain(4);

let block1 = new Block("17/02/1992","data1")
block1.mineBlock(blockChain1.difficulty);
blockChain1.addBlock(block1)
console.log("Block 1 added")

let block2 = new Block("19/04/2003","data2")
block1.mineBlock(blockChain1.difficulty)
blockChain1.addBlock(block2)
console.log("Block 2 added")

let block3 = new Block("19/04/2004","data3")
block3.mineBlock(blockChain1.difficulty)
blockChain1.addBlock(block3)
console.log("Block 3 added")

console.log(blockChain1.checkValid());
console.log(JSON.stringify(blockChain1, null, 4));


let HttpServer1 = new HttpServer(blockChain1);

HttpServer1.app.listen(8083);
/* MediaSourceHandle.exports = block */