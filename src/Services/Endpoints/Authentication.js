class AuthenticationAPI {
    constructor(){
       this.baseURL = "http://localhost:5000/";

    }

    login(username,password){
        let promise = new Promise((resolve,reject)=>{
            fetch(this.baseURL+`users/login?username=${username}&password=${password}`).then((value => {
                value.json().then((val)=>{
                    if (val.error){
                        reject(val.message);
                    }else{
                        resolve();
                    }
                });
            }),(reason => {
                reject(reason);
            }));
        });
        return promise;
    }

    logout(){

    }

    register(username,password){

    }
}

let authenticationAPI = new AuthenticationAPI();

module.exports = authenticationAPI;