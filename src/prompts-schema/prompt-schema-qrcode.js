import chalk from "chalk";

const promptSchemaQRCode = [
  {
    name: "link",
    description: chalk.blueBright("Digite um link para gerar o QR Code"),
  },
  {
    name: "type",
    description: chalk.blueBright(
      "Escolha entre o tipo (1- Normal) ou (2- Terminal)"
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Escolha 1 ou 2"),
    required: true,
  },
];

export default promptSchemaQRCode;
