import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, View,} from 'react-native';
import {Button} from 'react-native-elements';
import InputField from "../components/InputField";

export default class HomeScreen extends Component{
    constructor(props) {
        super(props);
    }

    render() {
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

                        <InputField name={'First Name'} placeholder={'Enter first name'}/>

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

    pressOnSend() {
        let inputFirstName = this.refs.inputFirstName;
        console.log(inputFirstName)
    }
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
