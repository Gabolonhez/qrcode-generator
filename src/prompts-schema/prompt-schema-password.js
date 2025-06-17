import chalk from "chalk";

const promptSchemaPassword = [
  {
    name: "length",
    description: chalk.blueBright("Digite o comprimento da senha (ex: 12)"),
    pattern: /^\d+$/,
    message: chalk.red.italic("Por favor, insira um número válido para o comprimento."),
    required: true,
    default: 8,
  },
  {
    name: "uppercase",
    description: chalk.blueBright("Incluir letras maiúsculas? (s/n)"),
    pattern: /^[snSN]$/,
    message: chalk.red.italic("Responda com 's' para sim ou 'n' para não."),
    required: true,
    default: "s",
  },
  {
    name: "lowercase",
    description: chalk.blueBright("Incluir letras minúsculas? (s/n)"),
    pattern: /^[snSN]$/,
    message: chalk.red.italic("Responda com 's' para sim ou 'n' para não."),
    required: true,
    default: "s",
  },
  {
    name: "numbers",
    description: chalk.blueBright("Incluir números? (s/n)"),
    pattern: /^[snSN]$/,
    message: chalk.red.italic("Responda com 's' para sim ou 'n' para não."),
    required: true,
    default: "s",
  },
  {
    name: "symbols",
    description: chalk.blueBright("Incluir símbolos? (s/n)"),
    pattern: /^[snSN]$/,
    message: chalk.red.italic("Responda com 's' para sim ou 'n' para não."),
    required: true,
    default: "s",
  },
];

export default promptSchemaPassword;