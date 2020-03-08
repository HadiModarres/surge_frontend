import React from "react";
import FieldLabel from "./FieldLabel";

class FieldInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentValue: ""};
        this.inputField = React.createRef();
    }

    optionSelected(name) {
        // this.setState({currentValue: option});
        // this.props.valueSpecified(option);

        this.setState({currentValue: name});
        this.props.valueSpecified(name);
    }

    focus(){
        this.inputField.current.focus();
    }

    inputValueChanged(ev) {
        this.setState({currentValue: ev.target.value});
        this.props.valueSpecified(ev.target.value);
        this.props.showOptions(this.getOptions(ev.target.value));
    }

    getOptions(val) {
        let opts = this.props.options.filter((option) => {
            if (option.name.startsWith(val)) {
                return true;
            } else {
                return false;
            }
        });
        opts = opts.map((option, index) => {

            return <FieldLabel key={index} displayName={option.name} showDescription={this.props.showDescription}
                               description={option.description} onClick={(ev) => {
                this.optionSelected(option.name)
            }}/>
        });
        return opts;
    }

    render() {
        return (<input className={"arrow-navigable"}
                       onChange={(event) => {
                           this.inputValueChanged(event);
                       }}
                       size={10}
                       ref={this.inputField}
                       value={this.state.currentValue} onFocus={() => {
            this.props.showOptions(this.getOptions(this.state.currentValue))
        }} type={"text"}>

        </input>);
    }
}

export default FieldInput;
