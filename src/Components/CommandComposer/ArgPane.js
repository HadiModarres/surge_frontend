import React from "react";
import Argument from "./Argument";

class ArgPane extends React.Component {
    constructor(props){
        super(props);
        this.state = {activeOptionalArgs: [],ref:undefined};
        this.optionalArgSpecified = this.optionalArgSpecified.bind(this);
        this.argRemoved = this.argRemoved.bind(this);
        this._refs = [];
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
    toString(){
        return this._refs.reduce(((previousValue, currentValue) => {
            return previousValue+currentValue.current+"&";
        }),"");
    }

    toJson(){
       return this._refs.map(value => {
           return value.current.toJson();
       }) ;
    }

    hashCode(str) {
        return str.split('').reduce((prevHash, currVal) =>
            (((prevHash << 5) - prevHash) + currVal.charCodeAt(0))|0, 0);
    }

    render() {
        this._refs=[];
        return (<span style={{overflowX:"auto", whiteSpace:"nowrap"}}>
                {[...this.props.args,...this.state.activeOptionalArgs].map((value, index) => {
                    let newRef = React.createRef();
                    this._refs.push(newRef);
                    return <Argument valueSpecified={() => {
                    }} showOptions={this.props.showOptions} showDescription={this.props.showDescription}
                                     key={this.hashCode(JSON.stringify(value))} {...value} removeable onRemove={this.argRemoved} ref={newRef}/>
                })}
                <Argument {...{
                    description: "Add an optional argument",
                    name: "optional_arg",
                    displayName: "Optional Arguments",
                    valueType: "options",
                    options: this.props.optionalArgs
                }} showOptions={this.props.showOptions} showDescription={this.props.showDescription} valueSpecified={this.optionalArgSpecified}/>
            </span>
        )
    }
}

export default ArgPane;
