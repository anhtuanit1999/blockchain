import CryptoJS from "crypto-js";
const SHA256 = (message: string) => CryptoJS.SHA256(message)

console.log(SHA256("hihi"));
