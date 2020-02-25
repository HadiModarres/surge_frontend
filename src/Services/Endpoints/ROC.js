import {Config} from "../../Config";

let fetchRoc = async function (args) {
    console.log("calling roc");
    const url = `${Config.API_BASE}/data/roc?${args}`;
    console.log(url);
    let res = await fetch(url);
    console.log(res);
    let json = await res.json();
    console.log(json);
    return json;
};

export default fetchRoc;

