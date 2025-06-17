import CryptoJS from 'crypto-js';
import chalk from 'chalk';

async function handleEncrypt(text, secretKey) {
    try {
        const encrypted = CryptoJS.AES.encrypt(text, secretKey).toString();
        return encrypted;
    } catch (error) {
        console.error(chalk.red("Erro durante a criptografia:"), error.message);
        return null;
    }
}

export default handleEncrypt;
