import chalk from 'chalk';

const promptSchemaMain = [
    {
        name: "select",
        description: chalk.blue.bold("Escolha a ferramenta (1 - QR Code ou 2 - Password)"),
        pattern: /^[1-2]+$/,
        message: chalk.red("Escolha 1 ou 2"),
        require: true,
    }
]

export default promptSchemaMain;