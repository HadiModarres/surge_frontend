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
                return [[symbolArg(), pointsArg()
                ],[intervalArg]];
            case "avg":
                return [];
            default:
                return [];
        }
    }

}


let commands = new Commands();

module.exports= commands;