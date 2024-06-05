

import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./themes";
import style from "./css";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";

function Signup() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: '#0A0A0A' }}>

            <View>
                
            </View>
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
                    <TextInput placeholder="Name" placeholderTextColor="white" style={style.textInput} />
                </View>
                <View style={style.action}>
                    <FontAwesome name="envelope" color="#eab308" style={style.smallIcon} />
                    <TextInput placeholder="Email" placeholderTextColor="white" style={style.textInput} secureTextEntry={true} />
                </View>
                <View style={style.action}>
                    <FontAwesome name="mobile" color="#eab308" style={style.smallIcon} />
                    <TextInput placeholder="Mobile No." placeholderTextColor="white" style={style.textInput} secureTextEntry={true} />
                </View>
                <View style={style.action}>
                    <FontAwesome name="lock" color="#eab308" style={style.smallIcon} />
                    <TextInput placeholder="Password" placeholderTextColor="white" style={style.textInput} secureTextEntry={true} />
                </View>
                
            </View>
            <TouchableOpacity style={style.inBut}>
                <View>
                    <Text style={style.textSign}>
                      Register
                    </Text>
                </View>
            </TouchableOpacity>
           
           
            
        </View>
    );
}

export default Signup;
