//We initialize a different node project into this directory
const express = require('express');
const cors = require('cors');



class HttpServer{


    constructor(blockchain){


    this.app = express();
    this.app.use(cors());
    this.app.use(express.json());

    this.blockchain = blockchain;


    this.app.get('', (req, res) => {
        const blocks = blockchain.getAllBlocks();
        //res.status(200).send(<p>{blockchain.getAllBlocks()}</p>);
        console.log("blockchain/blocks called",blocks);
        res.send(blocks);
    });

}
}
module.exports = { HttpServer};