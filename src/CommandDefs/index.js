import commandsList from "./Commands";
import {
    symbolArg,
    pointsArg,
    intervalArg,
    returnPointCount,
    marketInitSymbolCount,
    seriesIdentifiersArray,
    marketArg
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
            case "roc":
                return {
                    args:[symbolArg],
                    optionalArgs: [pointsArg,returnPointCount,intervalArg]
                };
            case "avg":
                return {args: [],optionalArgs: []};
            case "pool-init":
                return {
                    args:[marketArg],
                    optionalArgs: [marketInitSymbolCount]
                };
            case "pool-populate":
                return {
                    args:[seriesIdentifiersArray]
                };
            default:
                return {args: [],optionalArgs: []};
        }
    }

}


let commands = new Commands();

export default commands;

