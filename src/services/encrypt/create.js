import chalk from "chalk";
import prompt from "prompt";
import promptSchemaEncrypt from "../../prompts-schema/prompt-schema-encrypt.js";
import handleEncrypt from "./handle.js";

async function createEncryption() {

  prompt.get(promptSchemaEncrypt, async (err, result) => {
    if (err) {
      console.error(
        chalk.red("Erro ao obter os dados para criptografia:", err)
      );
      return;
    }
    const { textToEncrypt, secretKey } = result;
    const encryptedText = await handleEncrypt(textToEncrypt, secretKey);

    if (encryptedText) {
      console.log(
        chalk.green("\nTexto criptografado:"),
        chalk.bold.black(encryptedText)
      );
      console.log(
        chalk.cyan(
          "Lembre-se de guardar sua chave secreta em um local seguro para descriptografar depois!"
        )
      );
    }
  });
}

export default createEncryption;
