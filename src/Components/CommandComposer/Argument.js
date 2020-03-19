import React from "react";
import FieldInput from "./FieldInput";
import FieldLabel from "./FieldLabel";

class Argument extends React.Component{
   constructor(props) {
      super(props);
      this.remove = this.remove.bind(this);
      this.fieldInputRef = React.createRef();
   }

   componentDidMount() {
      if (this.props.name === "command"){
        this.fieldInputRef.current.focus();
      }
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

   toJson(){
      return {name: this.props.name, value: this.fieldInputRef.current.state.currentValue}
   }
   render() {
      return (<span>
         <FieldLabel displayName={this.props.displayName} showDescription={this.props.showDescription}
                     description={this.props.description} removeable={this.props.removeable} onRemove={this.remove}/>
         =
         <FieldInput options={this.props.valueType==="options"?this.props.options:[]} showDescription={this.props.showDescription}
         showOptions={this.props.showOptions} valueSpecified={this.props.valueSpecified} ref={this.fieldInputRef}/>
      </span>)
   }
}

export default Argument;
