//We initialize a different node project into this directory
const express = require('express');
const cors = require('cors');



class HttpServer{


    constructor(blockchain){


    this.app = express();
    this.app.use(cors());
    this.app.use(express.json());

    this.blockchain = blockchain;

    this.app.get('/blockchain/blocks', (req, res) => {
        res.status(200).send(blockchain.getAllBlocks());
    });

}
}
module.exports = { HttpServer};