import React from "react";
import AuthenticatedApp from "./Components/App/AuthenticatedApp";
import UnauthenticatedApp from "./Components/App/UnauthenticatedApp";

let api = require("./API/APIGateway");

class App extends React.Component{
   constructor(props){
       super(props);
       this.state={loggedIn:false};
       this.login = this.login.bind(this);
   }

   async login(username,password){
       try {
           await api.login("had3", "123");
           console.log("logged in");
           // this.setState({loggedIn: true});
       }catch (e) {
           console.log(e);
       }
   }

   render() {
        return this.state.loggedIn ? <AuthenticatedApp/> : <UnauthenticatedApp login={this.login}/>
   }
}

export default App;