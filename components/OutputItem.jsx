import React, {Component} from 'react';
import {Text} from 'react-native-elements';
import {StyleSheet, View} from "react-native";

export default class OutputItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: props.firstName,
            lastName: props.lastName,
            age: props.age
        };
    }

    render() {
        return (
            <View>
                <Text>{'Name:' + this.state.firstName + " " + this.state.lastName}</Text>
                <Text>{'Age: ' + this.state.age}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({ });