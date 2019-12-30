import React from "react";
import Argument from "./Argument";

class ArgPane extends React.Component{
    render() {
        return ( <div>
                <h2>Args</h2>
                {this.props.args.map((value,index)=>{
                    return <Argument valueSpecified={()=>{}} showOptions={this.props.showOptions} showDescription={this.props.showDescription} key={index} {...value}/>
                })}
            </div>
        )
    }
}

export default ArgPane;
