import React from 'react';
import CommandComposer from "../CommandComposer/CommandComposer";

require("arrow-key-nav");


function AuthenticatedApp(props) {
    return (
        <div className="App">
            <button onClick={props.logout}>Logout</button>
            <CommandComposer argsForCommand={(command) => getArgsForCommand(command)}
                             optionalArgsForCommand={(command) => getOptionalArgsForCommand(command)}
                             commands={getCommandList()}/>
        </div>
    );
}

export default AuthenticatedApp;
