import chalk from "chalk";
import handle from "./handle.js";
import prompt from "prompt";
import promptSchemaPassword from "../../prompts-schema/prompt-schema-password.js";

async function createPassword() {
  // prompt.start() é chamado no index.js
  prompt.get(promptSchemaPassword, async (err, result) => {
    if (err) {
      console.log(chalk.red("Erro ao obter as opções da senha:", err));
      return;
    }
    const userPassword = await handle(result);
    console.log(
      chalk.green("\n Sua senha gerada é:"),
      chalk.bold.green(userPassword)
    );
  });
}

export default createPassword;
