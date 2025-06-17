import chalk from 'chalk';

const promptSchemaMain = [
    {
        name: "select",
        description: chalk.blue.bold("Escolha a ferramenta para eu gerar (1 - QR Code, 2 - Senha ou 3 - Criptografar)"),
        pattern: /^[1-3]+$/,
        message: chalk.red("Escolha 1, 2 ou 3"),
        required: true,
    }
]

export default promptSchemaMain;