import prompt from "prompt";
import promptSchemaMain from "./prompts-schema/prompt-schema-main.js";
import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";
import createEncryption from "./services/encrypt/create.js";
import chalk from "chalk";

async function main() {
  prompt.start(); 
  prompt.get(promptSchemaMain, async (err, choose) => {
    if (err) {
      console.log(chalk.red.bold("Ocorreu um erro", err));
    }

    switch (choose.select) {
      case "1":
        await createQRCode();
        break;
      case "2":
        await createPassword();
        break;
      case "3":
        await createEncryption();
        break;
      default:
        console.log(chalk.red.bold("Opção inválida!"));
    }
  });
}

main();
