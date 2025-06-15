// extract method

async function permittedCharacters () {
    
    let permitted = [];

     if (process.env.UPPERCASE_LETTERS === "true"){ 
        permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }

    if (process.env.LOWERCASE_LETTERS) {
        permitted.push(..."abcdefghijklmnopqrstuvwxyz");
    }
    if (process.env.NUMBERS) {
        permitted.push(..."0123456789");
    }

    if (process.env.SPECIAL_CHARACTERS) {
        permitted.push(..."!@#$%&*_-()")
    }

    return permitted;

}

export default permittedCharacters;