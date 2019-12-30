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
        this.state= {options:[],description:""}
    }

    commandSelected(command){

    }
    showOptions(options){

    }
    showDescription(description){

    }

   render() {
       return (<div>
               <Argument arg={{name:"command",displayName:"Command",valueType:"options",options:this.props.commands}} showOptions={this.showOptions} showDescription={this.showDescription}
               valueSelected={this.commandSelected}/>
               <ArgPane/>
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