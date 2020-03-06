export const jumpToFirstEmptyInputField= (className)=>{
    let elements = Array.from(document.getElementsByTagName("input"));
    for (let element of elements){
        if ((element.className === className) && (element.value === "")){
            element.focus();
            return;
        }
    }
};
