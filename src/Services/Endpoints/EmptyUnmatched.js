import {Config} from "../../Config";

let fetchEmptyUnmatched = async function (args) {
    console.log("calling empty unmatched.");
    const url = `${Config.API_BASE}/control/empty-unmatched`;
    console.log(url);
    let res = await fetch(url);
    return await res.json();
};

export default fetchEmptyUnmatched;

