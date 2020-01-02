import React from "react";
import FieldInput from "./FieldInput";
import FieldLabel from "./FieldLabel";

class Argument extends React.Component{
   constructor(props) {
      super(props);
      this.remove = this.remove.bind(this);

   }

   remove(){
      if (this.props.removeable) {
         this.props.onRemove(this.props);
      }
   }
   render() {
      return (<div>
         <FieldLabel displayName={this.props.displayName} showDescription={this.props.showDescription}
                     description={this.props.description} onRemove={this.remove}/>
         =
         <FieldInput options={this.props.valueType==="options"?this.props.options:[]} showDescription={this.props.showDescription}
         showOptions={this.props.showOptions} valueSpecified={this.props.valueSpecified}/>
      </div>)
   }
}

export default Argument;
