import {Config} from "../../Config";

let fetchInfo = async function (args) {
    console.log("calling pool info");
    const url = `${Config.API_BASE}/control/info`;
    console.log(url);
    let res = await fetch(url);
    let json = await res.json();
    return json;
};

export default fetchInfo;

