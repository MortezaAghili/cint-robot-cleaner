// core functions
import { getNumberOfCommands } from "./getNumberOfCommands";
import { getRobotMoves } from "./getRobotMoves";
import { getStartPosition } from "./getStartPosition";
import { ICommand } from "./interfaces/ICommand";

// utils
import { Greeting } from "./utils/greeting";

(async function main() {
  Greeting();

  // Read number of commands
  const numberOfCommands: number = await getNumberOfCommands();

  // Read start position
  const startPosition: Array<number> = await getStartPosition();

  // Read robot moves instructions
  const robotMovesInstructions: Array<ICommand> = await getRobotMoves(numberOfCommands);
})();
