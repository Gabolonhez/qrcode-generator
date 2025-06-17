import allowChars from "./utils/allowed-characters.js";

async function handle(options) {
    let password = "";

    const passwordLength = parseInt(options.length);
    // Renomeando a variável para corresponder à função importada, ou mantendo 'characters' e ajustando a chamada.
    // Para consistência com o nome da função importada:
    let characters = await allowChars(options, passwordLength);

    if (typeof characters === "string") {
        return characters;
    }

    for ( let i = 0; i < passwordLength; i++) {
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index]; // EQUAL password + password +  
    }

    return password;

}

export default handle;