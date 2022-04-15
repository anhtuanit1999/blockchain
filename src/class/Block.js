const crypto = require('crypto');
const SHA256 = message => crypto.createHash('sha256').update(message).digest('hex');
export class Block {
    constructor(timestamp = '', data = []) {
        this.timestamp = timestamp;
        this.data = data;
        this.hash = this.getHash();
        this.prevHash = ''; // previous block' hash
        this.nonce = 0;
    }

    getHash() {
        return SHA256(this.prevHash + this.timestamp + JSON.stringify(this.data))
    }
    
    mine(difficulty) {
        // Nó sẽ lặp cho đến khi hash của block có số số 0 bằng difficulty.
        while (!this.hash.startsWith(Array(difficulty + 1).join("0"))) {
            // Tăng nonce
            this.nonce++;
            // Cập nhật hash mới
            this.hash = this.getHash();
        }
    }
}