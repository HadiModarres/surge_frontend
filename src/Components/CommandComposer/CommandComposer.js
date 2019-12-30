import React from "react";
import ArgPane from "./ArgPane";
import OptionsPane from "./OptionsPane";
import DescriptionPane from "./DescriptionPane";
import Argument from "./Argument";

class CommandComposer extends React.Component{
    constructor(props){
       super(props);
        this.commandSelected = this.commandSelected.bind(this);
        this.showOptions = this.showOptions.bind(this);
        this.showDescription = this.showDescription.bind(this);
        this.state= {options:[],description:"",args:[]}
    }

    commandSelected(command){
        console.log("args");
        let args = this.props.argsForCommand(command);
        console.log(args);
        this.setState({args,options:[],description:""});
    }

    showOptions(options){
        this.setState({options});
    }
    showDescription(description){
        this.setState({description});
    }

   render() {
       return (<div>
               <Argument {...{description: "Specify a command to execute.",name:"command",displayName:"Command",valueType:"options",options:this.props.commands}} showOptions={this.showOptions} showDescription={this.showDescription}
               valueSpecified={this.commandSelected}/>
               <ArgPane showOptions={this.showOptions} showDescription={this.showDescription} args={this.state.args}/>
               <OptionsPane>
                   {this.state.options}
               </OptionsPane>
               <DescriptionPane>
                   {this.state.description}
               </DescriptionPane>
           </div>
       )
   }
}

export default CommandComposer;