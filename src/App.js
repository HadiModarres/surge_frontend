import React from 'react';
import logo from './logo.svg';
import './App.css';
import CommandComposer from "./Components/CommandComposer/CommandComposer";

class DummyDataProvider {
    getCommandList(){
       return [
           {name: "up",description: "Get percentage of positive close prices in a given period."},
           {name: "avg",description: "Get average of close prices for given period"}
       ]
    }
    symbolArg(){
        return {name:"symbol",displayName:"symbol",description:"Specify stock's symbol. e.g. APT.AX",valueType:"string"}
    }
    pointsArg(){
        return {name:"points",displayName:"point_count",description:"number of points to include in the calculation.",valueType:"number"}
    }
    getArgsForCommand(command){
       switch (command.name) {
           case "up":
               return [this.symbolArg(),this.pointsArg()];
           case "avg":
               return [];
           default:
               return [];
       }
    }
}

let provider = new DummyDataProvider();

function App() {
  return (
    <div className="App">
      <CommandComposer argsForCommand={(command)=>provider.getArgsForCommand(command)} commands={provider.getCommandList()}/>
    </div>
  );
}

export default App;
