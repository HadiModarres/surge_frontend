import {Config} from "../../Config";
import {argsToQueryParams} from "../../Utils/args";

let fetchPoolPopulate = async function (args) {
    let series='';
    for (let item of args){
        if (item.name === "series"){
            series= item.value;
        }
    }
    console.log(args);
    console.log(series);
    console.log("calling pool populate");
    const url = `${Config.API_BASE}/control/pool-populate`;
    console.log(url);
    let res = await fetch(url, {
        method: 'POST',
        cache: 'no-cache',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"series":[series]})
    });
    let json = await res.json();
    console.log("printing json");
    console.log(json);
    return json;
};

export default fetchPoolPopulate;

