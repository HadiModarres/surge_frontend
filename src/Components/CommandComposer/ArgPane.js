import React from "react";
import Argument from "./Argument";

class ArgPane extends React.Component{
    render() {
        return ( <div>
                {this.props.argumentList.map((value)=>{
                    return <Argument {...value}/>
                })}
            </div>
        )
    }
}

export default ArgPane;
