import React from "react";

class DescriptionPane extends React.Component{
    render() {
        return (
            <div>
                <h2>Description</h2>
                {this.props.children}
            </div>
        );
    }
}

export default DescriptionPane;