import React from "react";
import FieldLabel from "./FieldLabel";

class FieldInput extends React.Component {
    constructor(props) {
        super(props);
        this.state= {currentValue: ""};
    }
    optionSelected(option){
        this.setState({currentValue: option});
    }

    inputValueChanged(ev){
        this.setState({currentValue: ev.target.value});
        this.props.valueSelected(ev.target.value);
    }

    render() {
        let opts = this.props.options.map((option,index) => {
            return <FieldLabel key={index} displayName={option.name} showDescription={this.props.showDescription}
                               description={option.description} onClick={()=>{this.optionSelected(option)}}/>
        });
        return(<input onChange={(event) =>{this.inputValueChanged(event);} } value={this.state.currentValue} onFocus={()=>{this.props.showOptions(opts)}} type={"text"}>

        </input>);
    }
}

export default FieldInput;
