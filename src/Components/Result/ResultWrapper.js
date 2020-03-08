import * as React from "react";
import ReactJson from "react-json-view";
import Draggable from "react-draggable";

class ResultWrapper extends React.Component {
    render() {
        return <Draggable  defaultClassName={"shadow result-item"}><span
            style={{width: "400px"}}><button value={"Close"} onClick={() => {
    this.props.onClose(this.props.index);
        }}>Close</button>{this.props.children}</span></Draggable>
    }
}

export default ResultWrapper;
