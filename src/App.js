import React from "react";
import AuthenticatedApp from "./Components/App/AuthenticatedApp";
import UnauthenticatedApp from "./Components/App/UnauthenticatedApp";

class App extends React.Component{
   constructor(props){
       super(props);
       this.state={loggedIn:false}
   }

   render() {
        return this.state.loggedIn ? <AuthenticatedApp/> : <UnauthenticatedApp/>
   }
}