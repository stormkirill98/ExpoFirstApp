import React from 'react';
import {Image, ScrollView, StyleSheet, View,} from 'react-native';
import {Button, Input} from 'react-native-elements';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}>
                <View style={styles.headerContainer}>
                    <Image
                        source={
                            __DEV__
                                ? require('../assets/images/robot-dev.png')
                                : require('../assets/images/robot-prod.png')
                        }
                        style={styles.welcomeImage}
                    />
                </View>

                <View style={styles.mainContent}>
                    <Input
                        placeholder='Enter first name'
                    />

                    <Input
                        placeholder='Enter last name'
                    />

                    <Input
                        placeholder='Enter age name'
                    />

                    <View style={styles.buttons}>
                        <Button
                            title="Clear"
                            style={styles.clearBtn}
                        />

                        <Button
                            title="Send"
                            style={styles.sendBtn}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

HomeScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        paddingTop: 30,
    },
    headerContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    mainContent: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    buttons: {
        flexDirection: 'row',
        margin: 10
    },

    clearBtn: {
        marginRight: 10,
        width: 100
    },

    sendBtn: {
        width: 100
    }
});
