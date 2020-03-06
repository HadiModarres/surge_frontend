import React from "react";

class FieldLabel extends React.Component{
    constructor(props){
       super(props);
    }
    keyPressed(ev){
        console.log(ev.key);
        switch (ev.key) {
            case ' ':
            {
                ev.target.click();
                document.getElementsByClassName("arrow-navigable")[0].focus();
                break;
            }
            case 'Backspace':
            case 'Delete': {
                if (this.props.removeable) {
                    this.props.onRemove();
                    break;
                }
            }
        }
    }
    render() {
        return (<span className={"marg arrow-navigable"} onKeyDown={(ev)=>{this.keyPressed(ev)}} onClick={this.props.onClick} tabIndex={"0"} onFocus={()=>{this.props.showDescription(this.props.description)}}>
            {this.props.displayName}
        </span>);
    }
}

export default FieldLabel;
