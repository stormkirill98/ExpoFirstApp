import React from 'react';
import {Input, Text} from 'react-native-elements';
import {View} from "react-native";

export function InputField(props) {
    return (
        <View>
            <Text>{props.name}</Text>
            <Input
                placeholder={props.placeholder}
            />
        </View>
    );
}