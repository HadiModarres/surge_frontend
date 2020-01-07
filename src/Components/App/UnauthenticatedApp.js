import React from "react";
let api = require("../../API/APIGateway");

class UnauthenticatedApp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {username:"",password:"",error:null};
        this.loginClicked = this.loginClicked.bind(this);
    }

    async loginClicked(){
        try {
            await api.login(this.state.username, this.state.password);
            this.props.onLogin();
        }catch (e) {
            this.setState({error: e});
        }
    }

    render() {
        return (
            <div className="App">
                Username: <input onChange={(ev)=>{this.setState({username:ev.target.value});}} value={this.state.username} type="text"/>
                Password: <input onChange={(ev)=>{this.setState({password:ev.target.value});}} value={this.state.password} type="text"/>
                <button onClick={this.loginClicked}>Login</button>
                {this.state.error? <p>{this.state.error}</p>: null}
            </div>
        );
    }

}

export default UnauthenticatedApp;
