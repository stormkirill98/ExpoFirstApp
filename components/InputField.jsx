import React, {Component} from 'react';
import {Input, Text} from 'react-native-elements';
import {View} from "react-native";

export default class InputField extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>{this.props.name}</Text>
                <Input
                    placeholder={this.props.placeholder}
                />
            </View>
        );
    }
}