import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Button} from 'react-native';
import {NavigationActions as navigation} from "react-navigation";
import CheckIn from "./checkIn";

export default class App extends React.Component {

   state ={
       email: "",
    Password: ""
   }

   pressHandler = () => {
        navigation.navigate(CheckIn)
    };
    render(){

        return (
            <View style={styles.container}>
                <Text style={styles.logo}>Attendance</Text>
                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder="E-mail"
                        placeholderTextColor="#000000"
                        borderColor="#000000"
                        onChangeText={text => this.setState({email:text})}/>
                </View>
                <View style={styles.inputView} >
                    <TextInput
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="Password"
                        placeholderTextColor="#000000"
                        onChangeText={text => this.setState({password:text})}/>
                </View>
                <Button title='Login' onPress={this.pressHandler} >
                    <Text style={styles.loginText}>LOGIN</Text>
                </Button>



            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        fontWeight:"bold",
        fontSize:50,
        color:"rgba(64,80,227,0.82)",
        marginBottom:40
    },
    inputView:{
        width:"80%",
        backgroundColor:"rgb(253,253,253)",
        borderRadius:25,
        height:50,
        borderColor: '#000',
        marginBottom:20,
        justifyContent:"center",
        padding:20
    },
    inputText:{
        height:50,
        color:"black"
    },


    loginBtn:{
        width:"80%",
        backgroundColor:"rgba(20,52,177,0.91)",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        marginBottom:10
    },
    loginText:{
        color:"white"
    }
});
