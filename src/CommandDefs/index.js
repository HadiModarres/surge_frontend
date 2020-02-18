import commandsList from "./Commands";

class Commands {
    getCommandList() {
        return commandsList;
    }

}


let commands = new Commands();

module.exports= commands;