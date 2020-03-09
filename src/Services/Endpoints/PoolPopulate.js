import {Config} from "../../Config";

let fetchPoolPopulate = async function (args) {
    console.log("calling pool populate");
    const url = `${Config.API_BASE}/control/pool-populate`;
    console.log(url);
    let res = await fetch(url, {
        method: 'POST',
        cache: 'no-cache',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"series":["roc_daily_1"]})
    });
    let json = await res.json();
    console.log("printing json");
    console.log(json);
    return json;
};

export default fetchPoolPopulate;

