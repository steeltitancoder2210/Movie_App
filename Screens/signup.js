import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, Alert } from "react-native";
import { styles } from "./themes";
import style from "./css";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Error from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

function Signup() {
    const navigation = useNavigation();

    const [name, setName] = useState("");
    const [nameVerify, setNameVerify] = useState(false);
    const [email, setEmail] = useState("");
    const [emailVerify, setEmailVerify] = useState(false);
    const [mobile, setMobile] = useState("");
    const [mobileVerify, setMobileVerify] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState(false);
    const [hidePassword, setHidePassword] = useState(true);

    async function handleSubmit() {
        const userData = {
            name,
            email,
            mobile,
            password,
        };

        if (nameVerify && emailVerify && mobileVerify && passwordVerify) {
            try {
                const res = await axios.post("http://192.168.132.24:5001/register", userData);
                if (res.data.status === "ok") {
                    Alert.alert("Registration Successful", "You have successfully registered!", [
                        { text: "OK", onPress: () => navigation.navigate("login") },
                    ]);
                } else {
                    Alert.alert("Registration Failed", res.data.message || "Registration failed, please try again.");
                }
            } catch (e) {
                console.error(e);
                Alert.alert("Registration Failed", "An error occurred, please try again.");
            }
        } else {
            Alert.alert("Registration Failed", "Please fill out all fields correctly.");
        }
    }

    function handleName(e) {
        const nameVar = e.nativeEvent.text;
        setName(nameVar);
        setNameVerify(nameVar.length > 1);
    }

    function handleEmail(e) {
        const emailVar = e.nativeEvent.text;
        setEmail(emailVar);
        setEmailVerify(/\S+@\S+\.\S+/.test(emailVar));
    }

    function handleMobile(e) {
        const mobileVar = e.nativeEvent.text;
        setMobile(mobileVar);
        setMobileVerify(/^\d{10}$/.test(mobileVar));
    }

    function handlePassword(e) {
        const passwordVar = e.nativeEvent.text;
        setPassword(passwordVar);
        setPasswordVerify(passwordVar.length >= 6);
    }

    function togglePasswordVisibility() {
        setHidePassword(!hidePassword);
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : null}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
                <View style={{ flex: 1, backgroundColor: '#0A0A0A', paddingHorizontal: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginHorizontal: 7, marginTop: 100 }}>
                        <Text style={{ color: "white", fontSize: 100, fontWeight: "bold" }}>
                            <Text style={styles.text}>M</Text>
                            ovies
                        </Text>
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 35, marginLeft: 10, marginTop: 50 }}>Register !!!</Text>
                        <View style={style.action}>
                            <FontAwesome name="user-o" color="#eab308" style={style.smallIcon} />
                            <TextInput
                                placeholder="Name"
                                placeholderTextColor="white"
                                style={style.textInput}
                                onChange={handleName}
                            />
                            {name.length < 1 ? null : nameVerify ? (
                                <Feather name="check-circle" color="green" size={20} />
                            ) : (
                                <Error name="error" color="red" size={20} />
                            )}
                        </View>
                        <View style={style.action}>
                            <FontAwesome name="envelope" color="#eab308" style={style.smallIcon} />
                            <TextInput
                                placeholder="Email"
                                placeholderTextColor="white"
                                style={style.textInput}
                                onChange={handleEmail}
                            />
                            {email.length < 1 ? null : emailVerify ? (
                                <Feather name="check-circle" color="green" size={20} />
                            ) : (
                                <Error name="error" color="red" size={20} />
                            )}
                        </View>
                        <View style={style.action}>
                            <FontAwesome name="mobile" color="#eab308" style={style.smallIcon} />
                            <TextInput
                                placeholder="Mobile No."
                                placeholderTextColor="white"
                                style={style.textInput}
                                onChange={handleMobile}
                            />
                            {mobile.length < 1 ? null : mobileVerify ? (
                                <Feather name="check-circle" color="green" size={20} />
                            ) : (
                                <Error name="error" color="red" size={20} />
                            )}
                        </View>
                        <View style={style.action}>
                            <FontAwesome name="lock" color="#eab308" style={style.smallIcon} />
                            <TextInput
                                placeholder="Password"
                                placeholderTextColor="white"
                                style={style.textInput}
                                secureTextEntry={hidePassword}
                                onChange={handlePassword}
                            />
                            <TouchableOpacity onPress={togglePasswordVisibility}>
                                <Feather
                                    name={hidePassword ? "eye-off" : "eye"}
                                    color="white"
                                    size={20}
                                />
                            </TouchableOpacity>
                            {password.length < 1 ? null : passwordVerify ? (
                                <Feather name="check-circle" color="green" size={20} />
                            ) : (
                                <Error name="error" color="red" size={20} />
                            )}
                        </View>
                    </View>
                    <TouchableOpacity style={style.inBut} onPress={handleSubmit}>
                        <View>
                            <Text style={style.textSign}>
                                Register
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default Signup;
