import React from "react";

class FieldLabel extends React.Component{
    constructor(props){
       super(props);
    }
    render() {
        return (<span onFocus={()=>{this.props.showDescription(this.props.description)}}>
            {this.props.displayName}
        </span>);
    }
}

export default FieldLabel;
