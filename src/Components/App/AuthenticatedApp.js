import React, {useState} from 'react';
import CommandComposer from "../CommandComposer/CommandComposer";
import commands from "../../CommandDefs"
import callAPIMethod from "../../Services/Endpoints";
import ReactJson from "react-json-view";
import Draggable from "react-draggable";
import "./AuthenticatedApp.css";
import * as SVGLoaders from 'svg-loaders-react';
import ResultWrapper from "../Result/ResultWrapper";
import { v4 as uuidv4 } from 'uuid';


require("arrow-key-nav");


function AuthenticatedApp(props) {
    const [results, setResults] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    function addResult(result) {
        results[uuidv4()]=result;
        setResults(results);
    }
    function removeResult(key){
        console.log(key);
        delete results[key];
        console.log(results);
        // console.log({...results});
        setResults({...results});
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
                {Object.entries(results).map((result, index) => {
                    return <ResultWrapper index={result[0]} key={result[0]} onClose={(key)=>{console.log("closed");removeResult(key)}}><ReactJson
                        displayDataTypes={false} style={{width: "300px"}}
                        theme={"rjv-default"} src={result[1]}/></ResultWrapper>
                })}
            </div>
            <div>{error && error}</div>
        </div>
    );
}

export default AuthenticatedApp;
