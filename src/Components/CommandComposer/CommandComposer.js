import React from "react";
import ArgPane from "./ArgPane";
import OptionsPane from "./OptionsPane";
import DescriptionPane from "./DescriptionPane";

class CommandComposer extends React.Component{
    constructor(props){
       super(props);
    }
   render() {
       return (<div>
               <ArgPane/>
               <OptionsPane></OptionsPane>
               <DescriptionPane></DescriptionPane>
           </div>
       )
   }
}