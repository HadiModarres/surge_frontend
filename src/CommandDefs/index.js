import commandsList from "./Commands";
import {
    symbolArg,
    pointsArg,
    intervalArg
} from "./Arguments";

class Commands {
    getCommandList() {
        return commandsList;
    }

    getArgsForCommand(command) {
        switch (command) {
            case "up":
                return {
                    args:[symbolArg, pointsArg],
                    optionalArgs: [intervalArg]
                };
            case "avg":
                return [];
            default:
                return [];
        }
    }

}


let commands = new Commands();

export default commands;

