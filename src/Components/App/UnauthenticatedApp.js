import React from "react";

class UnauthenticatedApp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {username:"",password:""};
        this.loginClicked = this.loginClicked.bind(this);
    }

    loginClicked(){
        console.log(this.state.username, this.state.password);
       this.props.login(this.state.username,this.state.password);
    }

    render() {
        return (
            <div className="App">
                Username: <input onChange={(ev)=>{this.setState({username:ev.target.value});}} value={this.state.username} type="text"/>
                Password: <input onChange={(ev)=>{this.setState({password:ev.target.value});}} value={this.state.password} type="text"/>
                <button onClick={this.loginClicked}>Login</button>
            </div>
        );
    }

}

export default UnauthenticatedApp;
