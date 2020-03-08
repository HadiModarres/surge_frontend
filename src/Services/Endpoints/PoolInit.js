import {Config} from "../../Config";

let fetchPoolInit = async function (args) {
    console.log("calling pool init");
    const url = `${Config.API_BASE}/control/pool-init?${args}`;
    console.log(url);
    let res = await fetch(url);
    console.log(res);
    let json = await res.json();
    console.log(json);
    return json;
};

export default fetchPoolInit;

