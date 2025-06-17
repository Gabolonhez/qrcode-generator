import prompt from "prompt";
import promptSchemaQRCode from "../../prompts-schema/prompt-schema-qrcode.js";
import handle from "./handle.js";

async function createQRCode() {
  // prompt.start() é chamado no index.js
  prompt.get(promptSchemaQRCode, handle);
}

export default createQRCode;
