import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import { ListItem } from 'react-native-elements'


export default function OutputScreen() {
    const list = [
        {
            first_name: "Oleg",
            last_name: "Sokolov",
            age: "25"
        },
        {
            first_name: "Kirill",
            last_name: "SAdas",
            age: "12"
        },
    ];

    return (
        <ScrollView style={styles.container}>
            {
                list.map((l, i) => (
                    <ListItem
                        key={i}
                        title={l.first_name + " " + l.last_name}
                        subtitle={"Age: " + l.age}
                        bottomDivider
                    />
                ))
            }
        </ScrollView>
    );
}

OutputScreen.navigationOptions = {
    title: 'Output',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});
