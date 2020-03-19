export const argsToQueryParams = (args)=>{
    return args.reduce(((previousValue, currentValue) => {
        return previousValue+(`${currentValue.name}=${currentValue.value}`)+"&";
    }),"");
};
