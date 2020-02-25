import React, {useState} from 'react';
import CommandComposer from "../CommandComposer/CommandComposer";
import commands from "../../CommandDefs"
import callAPIMethod from "../../Services/Endpoints";

require("arrow-key-nav");


function AuthenticatedApp(props) {
    const [result, setResult] = useState(null);

    async function commandComposed(command, args) {
        try {
            setResult(await callAPIMethod(command, args));
        } catch (e) {
            setResult(e);
        }
    }

    return (
        <div className="App">
            <button onClick={props.logout}>Logout</button>
            <CommandComposer argsForCommand={commands.getArgsForCommand}
                             optionalArgsForCommand={commands.getArgsForCommand}
                             commandComposed={commandComposed}
                             commands={commands.getCommandList()}/>
            <div>{result && JSON.stringify(result)}</div>
        </div>
    );
}

export default AuthenticatedApp;
