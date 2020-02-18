import React from 'react';
import CommandComposer from "../CommandComposer/CommandComposer";
import commands from "../../CommandDefs"

require("arrow-key-nav");


function AuthenticatedApp(props) {
    return (
        <div className="App">
            <button onClick={props.logout}>Logout</button>
            <CommandComposer argsForCommand={(command) => commands.getArgsForCommand(command).args}
                             optionalArgsForCommand={(command) => commands.getArgsForCommand(command).optionalArgs}
                             commands={commands.getCommandList()}/>
        </div>
    );
}

export default AuthenticatedApp;
