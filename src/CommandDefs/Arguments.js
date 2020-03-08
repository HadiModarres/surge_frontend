let symbolArg = {
    name: "symbol",
    displayName: "symbol",
    description: "Specify stock's symbol. e.g. APT.AX",
    valueType: "string"
};

let pointsArg = {
    name: "included_points",
    displayName: "included points",
    description: "Include this many data points in the calculation. For example in the case of ROC, " +
        "an included point count of 5 give rate of change for each day compared to 5 days before.",
    valueType: "number"
};

let returnPointCount ={
    name: "points",
    displayName: "returned point count",
    description: "Limit the resulting data points count to this number.",
    valueType: "number"
};

let intervalArg = {
    name: "interval",
    displayName: "Interval",
    description: "Interval type.",
    valueType: "options",
    options: [{name: "daily", description: "daily interval."},
        {name: "weekly", description: "weekly interval."},{name: "monthly", description: "monthly interval."}]
};

module.exports = {symbolArg, pointsArg, intervalArg, returnPointCount};
