import React from 'react';
import CommandComposer from "../CommandComposer/CommandComposer";
import commands from "../../CommandDefs"

require("arrow-key-nav");


function AuthenticatedApp(props) {
    return (
        <div className="App">
            <button onClick={props.logout}>Logout</button>
            <CommandComposer argsForCommand={commands.getArgsForCommand}
                             optionalArgsForCommand={commands.getArgsForCommand}
                             commands={commands.getCommandList()}/>
        </div>
    );
}

export default AuthenticatedApp;
