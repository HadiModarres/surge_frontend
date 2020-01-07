import React from 'react';
import CommandComposer from "../CommandComposer/CommandComposer";

require("arrow-key-nav");

function getCommandList() {
    return [
        {name: "up", description: "Get percentage of positive close prices in a given period."},
        {name: "avg", description: "Get average of close prices for given period"}
    ]
}

function symbolArg() {
    return {
        name: "symbol",
        displayName: "symbol",
        description: "Specify stock's symbol. e.g. APT.AX",
        valueType: "string"
    }
}

function pointsArg() {
    return {
        name: "points",
        displayName: "point_count",
        description: "number of points to include in the calculation.",
        valueType: "number"
    }
}

function intervalArg() {
    return {
        name: "interval",
        displayName: "Interval",
        description: "Interval type.",
        valueType: "options",
        options: [{name: "daily", description: "daily interval."},
            {name: "weekly", description: "weekly interval."}]
    }
}

function getArgsForCommand(command) {
    switch (command) {
        case "up":
            console.log("here");
            return [symbolArg(), pointsArg()];
        case "avg":
            return [];
        default:
            return [];
    }
}

function getOptionalArgsForCommand(command) {
    switch (command) {
        case "up":
            return [intervalArg()];
        case "avg":
            return [];
        default:
            return [];
    }
}

function AuthenticatedApp() {
    return (
        <div className="App">
            <button onClick={this.props.logout}>Logout</button>
            <CommandComposer argsForCommand={(command) => getArgsForCommand(command)}
                             optionalArgsForCommand={(command) => getOptionalArgsForCommand(command)}
                             commands={getCommandList()}/>
        </div>
    );
}

export default AuthenticatedApp;
