import React from "react";
import AuthenticatedApp from "./Components/App/AuthenticatedApp";
import UnauthenticatedApp from "./Components/App/UnauthenticatedApp";


class App extends React.Component{
   constructor(props){
       super(props);
       this.state={loggedIn:false};
       this.loggedIn = this.loggedIn.bind(this);
   }

   loggedIn(){
      this.setState({loggedIn:true});
   }

   render() {
        return this.state.loggedIn ? <AuthenticatedApp/> : <UnauthenticatedApp onLogin={this.loggedIn}/>
   }
}

export default App;