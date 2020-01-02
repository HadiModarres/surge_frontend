import React from "react";
import FieldInput from "./FieldInput";
import FieldLabel from "./FieldLabel";

class Argument extends React.Component{
   constructor(props) {
      super(props);
      this.remove = this.remove.bind(this);
      this.fieldInputRef = React.createRef();
   }

   remove(){
      if (this.props.removeable) {
         this.props.onRemove(this.props);
      }
   }
   getState(){
      return this.state;
   }
   toString(){
      return this.props.name+"="+this.fieldInputRef.current.state.currentValue;
   }
   render() {
      return (<div>
         <FieldLabel displayName={this.props.displayName} showDescription={this.props.showDescription}
                     description={this.props.description} removeable={this.props.removeable} onRemove={this.remove}/>
         =
         <FieldInput options={this.props.valueType==="options"?this.props.options:[]} showDescription={this.props.showDescription}
         showOptions={this.props.showOptions} valueSpecified={this.props.valueSpecified} ref={this.fieldInputRef}/>
      </div>)
   }
}

export default Argument;
