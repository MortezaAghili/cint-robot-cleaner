// core functions
import { getNumberOfCommands } from "./getNumberOfCommands";
import { getStartPosition } from "./getStartPosition";

// utils
import { Greeting } from "./utils/greeting";

(async function main() {
  Greeting();

  // Read number of commands
  const numberOfCommands: number = await getNumberOfCommands();

  // Read start position
  const startPosition: Array<number> = await getStartPosition();
})();
