import React, {useState} from 'react';
import CommandComposer from "../CommandComposer/CommandComposer";
import commands from "../../CommandDefs"
import callAPIMethod from "../../Services/Endpoints";
import ReactJson from "react-json-view";
import Draggable from "react-draggable";
import "./AuthenticatedApp.css";

require("arrow-key-nav");


function AuthenticatedApp(props) {
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);

    function addResult(result) {
        setResults([...results, result]);
    }

    async function commandComposed(command, args) {
        try {
            addResult(await callAPIMethod(command, args));
        } catch (e) {
            setError(e);
        }
    }

    return (
        <div className="App" style={{backgroundColor: "#f2f2f2"}}>
            <button onClick={props.logout}>Logout</button>
            <CommandComposer argsForCommand={commands.getArgsForCommand}
                             optionalArgsForCommand={commands.getArgsForCommand}
                             commandComposed={commandComposed}
                             commands={commands.getCommandList()}/>
            <div className={"results-container"}>
                {results.map((result) => {
                    return <Draggable defaultClassName={"shadow result-item"}><span style={{width: "400px"}}><ReactJson
                        displayDataTypes={false} style={{width: "300px", backgroundColor: "white"}}
                        theme={"rjv-default"} src={result}/></span></Draggable>

                })}
            </div>
            <div>{error && error}</div>
        </div>
    );
}

export default AuthenticatedApp;
