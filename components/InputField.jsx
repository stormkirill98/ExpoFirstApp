import React, {Component} from 'react';
import {Input, Text} from 'react-native-elements';
import {View} from "react-native";

export default class InputField extends Component {
    constructor(props) {
        super(props);

        this.state = {errorMsg: ''};

        // this is where we do the binding
        this.setErrorMsg = this.setErrorMsg.bind(this)
    }

    setErrorMsg(errorMsg) {
        this.setState({
            errorMsg: errorMsg
        })
    }

    render() {
        return (
            <View ref='inputFirstName'>
                <Text>{this.props.name}</Text>
                <Input
                    placeholder={this.props.placeholder}
                    errorMessage={this.state.errorMsg}
                />
            </View>
        );
    }
}