// extract method

async function allowedCharacters (options, passwordLength) {
    
    let allowedChars = [];

     if (options.uppercase && options.uppercase.toLowerCase() === "s" ){ 
        allowedChars.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }

    if (options.lowercase && options.lowercase.toLowerCase() === "s") {  
        allowedChars.push(..."abcdefghijklmnopqrstuvwxyz");
    }
    if (options.numbers && options.numbers.toLowerCase() === "s") {
        allowedChars.push(..."0123456789");
    }

    if (options.symbols && options.symbols.toLowerCase() === "s") {
        allowedChars.push(..."!@#$%^&*()_+-=[]{}|;:',.<>/?");
    }
    if (allowedChars.length === 0 ) {
        return "Nenhum tipo de caracteres selecionado. Não há como gerar a senha.";
    }
    if (isNaN(passwordLength) || passwordLength <= 0 ) {
        return "Comprimento de senha inválido.";
    }

    return allowedChars;

}

export default allowedCharacters;