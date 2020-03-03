import React from "react";

class OptionsPane extends React.Component{
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default OptionsPane;
