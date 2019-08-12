import React from 'react'
import Article from '../Common/Article';
import start from '../../static/images/projects/blockChain/start.png';

export default () => {

    const head = {
        title: "block chain in javascript",
        meta: [
          {
            name: 'description',
            content: 'learn how to create a block chain in javascript'
          },
          {
            name: 'keywords',
            content: 'blockchain, javascript'
          }
        ]
      };

    const data = [
        {
            type: "image",
            src: start,
            alt: 'Block chain mining start'
        },
        {
            type: 'source',
            href: 'https://github.com/nialloc9/blockChain'
        },
        {
            type: 'paragraph',
            text: `Block chain has really been hitting the news recently with the success of crypto technologies such as bitcoin. However, what is not as well known is that block chain
            can impact so many other areas of the world than just currencies. It is much more flexible and the applications for it more than what first seems apparent. It can be the foundation of
            many advances in coding for the future and something that has really peaked my curiosity.`
        },
        {
            type: 'paragraph',
            text: `So how does block chain actually work? Well at it's simplest it works by chaining together a group of blocks. And after being chained the block cannot be modified without modifying the whole chain. This concept is
            very powerful because by it's very nature it makes data transfer much more secure and less open to attack by outside attackers. Even if an attacker manages to modify a block it still needs to integrate it with the chain and
            in order to do that they have to modify the entire chain. We will see below that this would take an enormous amount of resources to accomplish and therefore naturally securing the chain from attack.`
        },
        {
            type: 'code',
            code: `
class Block{

    constructor({index, timestamp, data, previousHash = ""}){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    calculateHash(){
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
    }

    mineBlock(difficulty){
        while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")){
            this.nonce++;
            this.hash = this.calculateHash();
        }

        console.log("Block mined: " + this.hash)
    }
}
            `
        },
        {
            type: 'paragraph',
            text: `From above we can see that a block in a block chain has attributes that needed to be passed into the constructor to create a block. The only optional one
            being previousHash because the first block the genesis block does not have a block before it so therefore no previousHash. We can also see that there is a nonce value.
            In cryptography a nonce value is a value that can only be used once. It is needed here for generating the hash. To create the hash we are using SHA256 incncryption of all
            the blocks attributes.`
        },
        {
            type: 'paragraph',
            text: `Notice in the mineBlock method that we pass in a difficulty paramater. This is interesting because it is used to determin the number of 0's required at the front of the hash to
            be an acceptable hash. This will determine how much computing power will be needed so as computing power increases in the future we can just increase the difficulty.`
        },
        {
            type: 'code',
            code: `
class BlockChain{
    constructor(){
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 5;
    };

    createGenesisBlock(){
        return new Block({
            index: 0,
            timestamp: "01/01/2017",
            data: "Genesis block",
            previousHash: "0"
        })
    }

    getLatestBlock(){
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.mineBlock(this.difficulty)

        this.chain.push(newBlock);
    }

    isChainValid(){
        for(let i = 1; i < this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if(currentBlock.hash !== currentBlock.calculateHash()){
                console.log("hashes don't match");
                return false;
            }

            if(currentBlock.previousHash !== previousBlock.hash){
                console.log("current previous has does not match previous block hash");
                return false;
            }

            return;
        }

        return true;
    }
}
            `
        },
        {
            type: 'paragraph',
            text: `As we can see from the constructor a genesis block is created in which will be the first block in the chain. It all takes a difficulty level which will
            be the number of zeros required in at the start of the hash. The class also has two other methods getLatestBlock, addBlock, and isChainValid. getLatestBlock
            returns the last block in the chain, addBlock will add it to the chain and isChainValid will return true or false based on whether the chain is valid. In addBlock
            we can see that the mineBlock method is called which will pass in the difficulty. This will loop around creating the hash to be used. Also see that the newBlock has a reference
            to the previous blocks hash. This is very important as it will ensure the integrity of the chain when calling the isChainValid method.`
        },
        {
            type: 'published',
            date: `25/11/2017`
        },
    ];

    return <Article head={head} data={data} />;
};