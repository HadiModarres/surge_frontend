import React, {useState} from 'react';
import CommandComposer from "../CommandComposer/CommandComposer";
import commands from "../../CommandDefs"
import callAPIMethod from "../../Services/Endpoints";
import ReactJson from "react-json-view";
import Draggable from "react-draggable";
import "./AuthenticatedApp.css";
import * as SVGLoaders from 'svg-loaders-react';

require("arrow-key-nav");


function AuthenticatedApp(props) {
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    function addResult(result) {
        setResults([...results, result]);
    }

    async function commandComposed(command, args) {
        setLoading(true);
        try {
            addResult(await callAPIMethod(command, args));
            setLoading(false);
        } catch (e) {
            setLoading(false);
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
            {loading &&
                <div style={{textAlign: "center"}}>
                    <SVGLoaders.Puff stroke={"#000000"}/>
                </div>
            }
            <div className={"results-container"}>
                {results.map((result, index) => {
                    return <Draggable key={index} defaultClassName={"shadow result-item"}><span
                        style={{width: "400px"}}><ReactJson
                        displayDataTypes={false} style={{width: "300px"}}
                        theme={"rjv-default"} src={result}/></span></Draggable>

                })}
            </div>
            <div>{error && error}</div>
        </div>
    );
}

export default AuthenticatedApp;
