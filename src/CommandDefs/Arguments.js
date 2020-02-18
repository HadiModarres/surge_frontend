let symbolArg = {
    name: "symbol",
    displayName: "symbol",
    description: "Specify stock's symbol. e.g. APT.AX",
    valueType: "string"
};

let pointsArg={
    name: "points",
    displayName: "point_count",
    description: "number of points to include in the calculation.",
    valueType: "number"
};

let intervalArg={
    name: "interval",
    displayName: "Interval",
    description: "Interval type.",
    valueType: "options",
    options: [{name: "daily", description: "daily interval."},
        {name: "weekly", description: "weekly interval."}]
};

module.exports = {symbolArg, pointsArg, intervalArg};
