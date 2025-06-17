import chalk from "chalk";

const promptSchemaEncrypt = [
  {
    name: "textToEncrypt",
    description: chalk.blueBright("Digite o texto ou senha a ser criptografado"),
    required: true,
  },
  {
    name: "secretKey",
    description: chalk.blueBright("Digite uma chave secreta para a criptografia (guarde bem esta chave!)"),
    required: true,
    hidden: true, // Para não exibir a chave enquanto o usuário digita
  },
];

export default promptSchemaEncrypt;
