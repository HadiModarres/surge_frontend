import {Config} from "../../Config";

let fetchRemoveUnmatched = async function (args) {
    console.log("calling remove unmatched");
    const url = `${Config.API_BASE}/control/remove-unmatched`;
    console.log(url);
    let res = await fetch(url);
    return await res.json();
};

export default fetchRemoveUnmatched;

