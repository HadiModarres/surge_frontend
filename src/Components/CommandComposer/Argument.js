import React from "react";
import FieldInput from "./FieldInput";
import FieldLabel from "./FieldLabel";

class Argument extends React.Component{
   render() {
      return (<div>
         <FieldLabel/>
         =
         <FieldInput/>
      </div>)
   }
}

export default Argument;
