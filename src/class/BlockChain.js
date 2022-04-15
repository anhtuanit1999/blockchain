import { Block } from './Block';

class BlockChain {
    constructor() {
        this.chain = [new Block(Date.now().toString())]
        this.currentLength = this.chain.length
        this.difficulty = 1;
    }

    getLastBlock() {
        return this.chain[this.currentLength - 1]
    }

    addBlock(block) {
        block.prevHash = this.getLastBlock().hash
        block.hash = block.getHash();
        block.mine(this.difficulty);

        this.chain.push(block);
    }

    isValid() {
        for (let i = 1; i < this.currentLength; i++) {
            const currentBlock = this.chain[i];
            const prevBlock = this.chain[i - 1];

            if(currentBlock.hash !== currentBlock.getHash() || prevBlock.hash !== currentBlock.prevHash) {
                return false;
            }
        }
        return true;
    }
}