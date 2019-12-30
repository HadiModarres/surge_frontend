import React from "react";
import FieldInput from "./FieldInput";
import FieldLabel from "./FieldLabel";

class Argument extends React.Component{
   render() {
      return (<div>
         <FieldLabel displayName={this.props.displayName} showDescription={this.props.showDescription}
                     description={this.props.description}/>
         =
         <FieldInput options={this.props.valueType==="options"?this.props.options:[]}/>
      </div>)
   }
}

export default Argument;
