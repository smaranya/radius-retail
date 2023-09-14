import React, { Component, useState } from 'react';
import constants from '../constants';
import { StatusBar, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default class Register extends Component{
    constructor(props) {
        super(props);

        this.state ={
            phone: ' ',
            username: ' ',
            password: ' '
        }
    }
    onRegister=()=>{
        fetch(`${constants.API_URL}/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                    username: this.state.username,
                    phone: this.state.phone,
                    password: this.state.password
            }),
          }).then((res) => {
              if (!res.ok) {
                throw new Error('Network response was not ok');
              }
              return res.json();
            }).then((data) => {
              console.log(data);
            }).catch((error) => {
              console.error('Error:', error);
              
              //setError('An error occurred. Please try again later.');
            });
    };

    render(){
        return(
            <View style={styles.container}>
                <Text>Register Now!</Text>
                <Text style={styles.instruct}>Enter your 10-digit mobile number:</Text>
                <TextInput
                    style={styles.textbox}
                    inputMode='tel'
                    maxLength={10}
                    onChangeText={(value)=>this.setState({phone: value})}
                />
                <Text style={styles.instruct}>Enter your preferred username: </Text>
                <TextInput
                    style={styles.textbox}
                    inputMode='text'
                    maxLength={8}
                    onChangeText={(value)=>this.setState({username: value})}
                />
                <Text style={styles.instruct}>Enter you password: </Text>
                <TextInput
                    style={styles.textbox}
                    secureTextEntry={true}
                    maxLength={20}
                    onChangeText={(value)=>this.setState({password: value})}
                />
                <TouchableOpacity style={styles.buttonAlt} onPress={this.onRegister}>
                    <Text style={styles.buttonAltText}>Register</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      rowGap: 15
    },
    buttonAlt: {
        width: '80%',
        borderWidth: 1,
        height: 40,
        borderRadius: 50,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    buttonAltText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '400',
    },
    instruct: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    textbox: {
        borderColor: '#000',
        borderWidth: 1,
        width: '60%',
        paddingLeft: '2%'
    }
});