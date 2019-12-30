import React from 'react';
import logo from './logo.svg';
import './App.css';
import CommandComposer from "./Components/CommandComposer/CommandComposer";

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


function App() {
    return (
        <div className="App">
            <CommandComposer argsForCommand={(command) => getArgsForCommand(command)}
                             commands={getCommandList()}/>
        </div>
    );
}

export default App;
