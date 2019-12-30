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

    render() {
        let opts = this.props.options.map((option) => {
            return <FieldLabel displayName={option.name} showDescription={this.props.showDescription}
                               description={option.description} onClick={()=>{this.optionSelected(option)}}/>
        });
        return(<input value={this.state.currentValue} onFocus={()=>{this.props.showOptions(opts)}} type={"text"}>

        </input>);
    }
}

export default FieldInput;
