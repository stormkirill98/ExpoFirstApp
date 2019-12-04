import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

export default function OutputScreen() {
    return (
        <ScrollView style={styles.container}>
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
