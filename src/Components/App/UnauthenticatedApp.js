import React from "react";

function UnauthenticatedApp() {
    return (
        <div className="App">
            <button onClick={this.props.logout}>Logout</button>
            <CommandComposer argsForCommand={(command) => getArgsForCommand(command)}
                             optionalArgsForCommand={(command) => getOptionalArgsForCommand(command)}
                             commands={getCommandList()}/>
        </div>
    );
}

export default UnauthenticatedApp;
