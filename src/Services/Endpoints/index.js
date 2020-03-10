import fetchRoc from "./ROC";
import fetchPoolInit from "./PoolInit";
import fetchPoolPopulate from "./PoolPopulate";
import fetchInfo from "./PoolInfo";
import fetchEmptyUnmatched from "./EmptyUnmatched";
import fetchRemoveUnmatched from "./RemoveUnmatched";


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
        case "pool-populate":
            return await fetchPoolPopulate(args);
        case "info":
            return await fetchInfo(args);
        case "empty-unmatched":
            return await fetchEmptyUnmatched(args);
        case "remove-unmatched":
            return await fetchRemoveUnmatched(args);
        default:
    }
};

export default callAPIMethod;
