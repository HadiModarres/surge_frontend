import {Config} from "../../Config";
import {argsToQueryParams} from "../../Utils/args";

let fetchSyn = async function (args) {
    let formula='';
    let argArray = [];
    for (let item of args){
        if (item.name === "formula"){
            formula= item.value;
        }else {
            argArray.push(item);
        }
    }

    const url = `${Config.API_BASE}/cluster/syn`;
    let res = await fetch(url, {
        method: 'POST',
        cache: 'no-cache',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({formula})
    });
    console.log(res);
    let json = await res.json();
    console.log("printing json");
    console.log(json);
    return json;
};

export default fetchSyn;

