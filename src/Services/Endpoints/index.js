import fetchRoc from "./ROC";
import fetchPoolInit from "./PoolInit";

let callAPIMethod = async function(command,args){
    switch (command) {
        case "roc":
            return await fetchRoc(args);
        case "up":
            break;
        case "avg":
            break;
        case "pool-init":
            return await fetchPoolInit(args);
        default:
    }
};

export default callAPIMethod;
