import React from "react";

class UnauthenticatedApp extends React.Component{
    render() {
        return (
            <div className="App">
                <button onClick={this.props.login}>Login</button>
            </div>
        );
    }

}

export default UnauthenticatedApp;
