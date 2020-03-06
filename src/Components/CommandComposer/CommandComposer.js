import React from "react";
import ArgPane from "./ArgPane";
import OptionsPane from "./OptionsPane";
import DescriptionPane from "./DescriptionPane";
import Argument from "./Argument";

class CommandComposer extends React.Component {
    constructor(props) {
        super(props);
        this.commandSelected = this.commandSelected.bind(this);
        this.showOptions = this.showOptions.bind(this);
        this.showDescription = this.showDescription.bind(this);
        this.state = {options: [], description: "", args: [], optionalArgs: []}
        this.argPaneRef = React.createRef();
        this.command = "";
    }
    componentDidMount() {
        document.onkeypress= e =>{
            if (e.key === 'Enter'){
                this.runClicked();
            }
        }
    }

    commandSelected(command) {
        console.log("args");
        this.command = command;
        let args = this.props.argsForCommand(command).args;
        let optionalArgs = this.props.optionalArgsForCommand(command).optionalArgs;

        this.setState({args, optionalArgs, options: [], description: ""});
    }

    showOptions(options) {
        this.setState({options});
    }

    showDescription(description) {
        this.setState({description});
    }

    runClicked(){
        this.props.commandComposed(this.command, this.argPaneRef.current.toString());
    }

    render() {
        return (
            <>
                <div className={"results-container"}>

                    <div style={{alignText:"center",flex: 3}}>
                        <Argument {...{
                            description: "Specify a command to execute.",
                            name: "command",
                            displayName: "Command",
                            valueType: "options",
                            options: this.props.commands
                        }} showOptions={this.showOptions} showDescription={this.showDescription}
                                  valueSpecified={this.commandSelected}/>
                        <ArgPane ref={this.argPaneRef} showOptions={this.showOptions}
                                 showDescription={this.showDescription}
                                 args={this.state.args} optionalArgs={this.state.optionalArgs}/>
                        <OptionsPane>
                            {this.state.options}
                        </OptionsPane>
                    </div>
                    <div style={{flex:2}}>
                        <DescriptionPane>
                            {this.state.description}
                        </DescriptionPane>
                    </div>
                </div>
                <button className={"arrow-navigable"} onClick={() => {
                    this.runClicked();
                }}>Run
                </button>
            </>
        )
    }
}

export default CommandComposer;
