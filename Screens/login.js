
import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from "./themes";
import style from "./css";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

function Login() {
    const navigation = useNavigation();
    const [emailOrMobile, setEmailOrMobile] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        if (emailOrMobile && password) {
            try {
                const response = await axios.post("http://192.168.132.24:5001/login", { emailOrMobile, password });
                if (response.data.status === "ok") {
                    Alert.alert("Login Successful", "You have successfully logged in!", [
                        { text: "OK", onPress: () => navigation.navigate("Home") }
                    ]);
                } else {
                    Alert.alert("Login Failed", response.data.data);
                }
            } catch (error) {
                Alert.alert("Login Failed", "An error occurred during login. Please try again.");
            }
        } else {
            Alert.alert("Missing Information", "Please fill out all fields.");
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#0A0A0A' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginHorizontal: 7, marginTop: 140 }}>
                <Text style={{ color: "white", fontSize: 110, fontWeight: "bold" }}>
                    <Text style={styles.text}>M</Text>
                    ovies
                </Text>
            </View>
            <View style={{ marginTop: 30 }}>
                <Text style={{ color: "white", fontWeight: "bold", fontSize: 35, marginLeft: 10, marginTop: 50 }}>Login !!!</Text>
                <View style={style.action}>
                    <FontAwesome name="user-o" color="#eab308" style={style.smallIcon} />
                    <TextInput
                        placeholder="Mobile or Email"
                        placeholderTextColor="white"
                        style={style.textInput}
                        onChangeText={setEmailOrMobile}
                    />
                </View>
                <View style={style.action}>
                    <FontAwesome name="lock" color="#eab308" style={style.smallIcon} />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="white"
                        style={style.textInput}
                        secureTextEntry={true}
                        onChangeText={setPassword}
                    />
                </View>
                <View style={{ justifyContent: "flex-end", alignItems: "flex-end", marginTop: 8, marginRight: 10 }}>
                    <Text style={{ color: "white", fontWeight: "700" }}>
                        Forgot Password
                    </Text>
                </View>
            </View>
            <TouchableOpacity style={style.inBut} onPress={handleLogin}>
                <View>
                    <Text style={style.textSign}>
                        Log in
                    </Text>
                </View>
            </TouchableOpacity>
            <View style={{ padding: 15, alignItems: "center" }}>
                <Text style={{ fontSize: 14, fontWeight: "bold", color: "#919191" }}>
                    --- Or Continue as ---
                </Text>
            </View>
            <View style={style.bottomButton}>
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <TouchableOpacity style={style.inBut2} onPress={() => { navigation.navigate("Home") }}>
                        <FontAwesome name="user-circle-o" color="white" style={style.smallIcon2} />
                    </TouchableOpacity>
                    <Text style={style.bottomText}>Guest</Text>
                </View>
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <TouchableOpacity style={style.inBut2} onPress={() => { navigation.navigate("signup") }}>
                        <FontAwesome name="user-plus" color="white" style={style.smallIcon2} />
                    </TouchableOpacity>
                    <Text style={style.bottomText}>Sign Up</Text>
                </View>
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <TouchableOpacity style={style.inBut2} onPress={() => alert("Coming soon")}>
                        <FontAwesome name="google" color="white" style={style.smallIcon2} />
                    </TouchableOpacity>
                    <Text style={style.bottomText}>Google</Text>
                </View>
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <TouchableOpacity style={style.inBut2} onPress={() => alert("Coming soon")}>
                        <FontAwesome name="facebook" color="white" style={style.smallIcon2} />
                    </TouchableOpacity>
                    <Text style={style.bottomText}>Facebook</Text>
                </View>
            </View>
        </View>
    );
}

export default Login;
