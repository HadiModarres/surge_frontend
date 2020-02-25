import fetchRoc from "./ROC";

let callAPIMethod = async function(command,args){
    switch (command) {
        case "roc":
            return await fetchRoc(args);
        case "up":
            break;
        case "avg":
            break;
        default:
    }
};

export default callAPIMethod;
