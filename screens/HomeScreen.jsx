import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, View,} from 'react-native';
import {Button} from 'react-native-elements';
import InputField from "../components/InputField";

export default class HomeScreen extends Component{
    constructor(props) {
        super(props);

        this.pressOnSend = this.pressOnSend.bind(this);
        this.clear = this.clear.bind(this);
        this.validate = this.validate.bind(this)
    }

    pressOnSend() {
        if (!this.validate())
            return;

        let bodyJSON = JSON.stringify({
            "first_name": this.inputFirstName.getValue(),
            "last_name": this.inputLastName.getValue(),
            "age": this.inputAge.getValue()
        });

        fetch("http://localhost:8080/save", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: bodyJSON}).then((response) => {
            alert(response.statusText);
        });

        this.clear();
    }

    clear() {
        if (this.inputFirstName) this.inputFirstName.clear();
        if (this.inputLastName) this.inputLastName.clear();
        if (this.inputAge) this.inputAge.clear();
    }

    validate() {
        let isValid = true;

        if (this.inputFirstName.getValue() === '') {
            this.inputFirstName.setErrorMsg("Can not be blank");
            isValid = false;
        } else this.inputFirstName.clearErrorMsg();

        if (this.inputLastName.getValue() === '') {
            this.inputLastName.setErrorMsg("Can not be blank");
            isValid = false;
        } else this.inputLastName.clearErrorMsg();

        let age = this.inputAge.getValue();
        if (age === '') {
            this.inputAge.setErrorMsg("Can not be blank");
            isValid = false;
        } else if (isNaN(age)) {
            this.inputAge.setErrorMsg("Should be digit");
            isValid = false;
        } else this.inputAge.clearErrorMsg();

        return isValid;
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container}
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
                        <InputField name={'First Name'}
                                    placeholder={'Enter first name'}
                                    ref={el => this.inputFirstName = el}/>

                        <InputField name={'Last Name'}
                                    placeholder={'Enter last name'}
                                    ref={el => this.inputLastName = el}/>

                        <InputField name={'Age'}
                                    placeholder={'Enter age'}
                                    ref={el => this.inputAge = el}/>

                        <View style={styles.buttons}>
                            <Button
                                title="Clear"
                                style={styles.clearBtn}
                                onPress={this.clear}
                            />

                            <Button
                                title="Send"
                                style={styles.sendBtn}
                                onPress={this.pressOnSend}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
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
