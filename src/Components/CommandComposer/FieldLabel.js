import React from "react";

class FieldLabel extends React.Component{
    constructor(props){
       super(props);
    }
    render() {
        return (<span onClick={this.props.onClick} tabIndex={"0"} onFocus={()=>{this.props.showDescription(this.props.description)}}>
            {this.props.displayName}
        </span>);
    }
}

export default FieldLabel;
