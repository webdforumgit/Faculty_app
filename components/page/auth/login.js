import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity} from "react-native";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>


            <StatusBar style="auto" />
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Enter Registered Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Enter Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#dfe3ee",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: '#b0bec5',
        marginTop: "10%"
    },

    image: {
        marginBottom: 40,
    },

    inputView: {
        backgroundColor: "#bbdefb",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        // alignItems: "center",
        justifyContent: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 10,
    },

    forgot_button: {
        height: 30,
        marginBottom: 30,
        marginLeft: 10
    },

    loginBtn: {
        width: "70%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#64b5f6",
    },
    signupBtn: {

        width: "70%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 25,
        backgroundColor: "#8b9dc3",
    }

});