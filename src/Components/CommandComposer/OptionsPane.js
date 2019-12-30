import React from "react";

class OptionsPane extends React.Component{
    render() {
        return (
            <div>
                <h2>Options</h2>
                {this.props.children}
            </div>
        );
    }
}

export default OptionsPane;
