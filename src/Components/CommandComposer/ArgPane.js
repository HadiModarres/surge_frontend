import React from "react";
import Argument from "./Argument";

class ArgPane extends React.Component {
    constructor(props){
        super(props);
        this.state = {activeOptionalArgs: []};
        this.optionalArgSpecified = this.optionalArgSpecified.bind(this);
        this.argRemoved = this.argRemoved.bind(this);
    }

    optionalArgSpecified(displayName){
       let opt = this.props.optionalArgs.find((element)=>{return element.name === displayName});
       if (opt){
           if (!this.state.activeOptionalArgs.includes(opt)) {
               this.setState({activeOptionalArgs: [...this.state.activeOptionalArgs, opt]});
           }
       }
    }

    argRemoved(arg){
        let newOptArgs = this.state.activeOptionalArgs.filter((value => {
            return value.name !== arg.name;
        }));
        this.setState({activeOptionalArgs:newOptArgs});
    }

    render() {

        return (<div>
                <h2>Args</h2>
                {[this.props.args,...this.state.activeOptionalArgs].map((value, index) => {
                    return <Argument valueSpecified={() => {
                    }} showOptions={this.props.showOptions} showDescription={this.props.showDescription}
                                     key={index} {...value} removeable onRemove={this.argRemoved}/>
                })}
                <Argument {...{
                    description: "Add an optional argument",
                    name: "optional_arg",
                    displayName: "Optional Arguments",
                    valueType: "options",
                    options: this.props.optionalArgs
                }} showOptions={this.props.showOptions} showDescription={this.props.showDescription} valueSpecified={this.optionalArgSpecified}/>
            </div>
        )
    }
}

export default ArgPane;
