import React, {Component} from 'react';
import {Input, Text} from 'react-native-elements';
import {StyleSheet, View} from "react-native";

export default class InputField extends Component {
    constructor(props) {
        super(props);

        this.state = {errorMsg: ''};

        this.setErrorMsg = this.setErrorMsg.bind(this);
        this.clear = this.clear.bind(this);
    }

    setErrorMsg(errorMsg) {
        this.setState({
            errorMsg: errorMsg
        })
    }

    clear() {
        if (this.input) this.input.clear();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>{this.props.name}</Text>
                <Input
                    placeholder={this.props.placeholder}
                    errorMessage={this.state.errorMsg}
                    ref={el => this.input = el}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },

    label: {
        marginLeft: 10
    }
});