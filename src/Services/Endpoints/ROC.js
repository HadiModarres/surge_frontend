import {Config} from "../../Config";

let fetchRoc = async function (args) {
    const url = `${Config.API_BASE}/data/roc?args`;
    let res = await fetch(url);
    return await res.json();
};

