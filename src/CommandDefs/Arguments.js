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

let returnPointCount = {
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
        {name: "weekly", description: "weekly interval."}, {name: "monthly", description: "monthly interval."}]
};

let marketArg = {
    name: "market",
    displayName: "Market",
    description: "Initiate the pool with the symbols from this market.",
    valueType: "options",
    options: [{name: "nasdaq", description: "NASDAQ"},
        {name: "nyse", description: "NYSE"},
        {name: "asx", description: "ASX"},
        {name: "asx200", description: "ASX200"},
        {name: "asx100", description: "ASX100"},
        {name: "sp500", description: "SP500"},
        {name: "sp500_asx200", description: "SP500 plus ASX200"}
    ]
};

let marketInitSymbolCount = {
    name: "count",
    displayName: "# of symbols to add",
    description: "Add this many symbols from the given market to the pool. The symbols to add are selected randomly.",
    valueType: "number"
};

module.exports = {
    symbolArg,
    pointsArg,
    intervalArg,
    marketArg,
    marketInitSymbolCount,
    returnPointCount};
