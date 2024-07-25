
import React from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "./themes";
import style from "./css";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";

function m() {
    const navigation = useNavigation();
    
    return (
        <View style={{ flex: 1, backgroundColor: '#0A0A0A' }}>

                <View style={style.logoContainer}>
                <Image source={require("../assets/logo.jpeg")} style={style.logo}/>
                  </View> 
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginHorizontal: 7, marginTop: 100 }}>
                <Text style={{ color: "white", fontSize: 110, fontWeight: "bold" }}>
                    <Text style={styles.text}>M</Text>
                    ovies
                </Text>
            </View>
            
            
            
            <TouchableOpacity 
                style={{ 
                    width: '90%',
                    marginTop: 90,
                    marginLeft: 20,
                    backgroundColor: '#eab308',
                    alignItems: 'center',
                    justifyContent: "center",
                    paddingHorizontal: 15,
                    paddingVertical: 15,
                    borderRadius: 50,
                }} 
                onPress={() => navigation.navigate("login")}
            >
                <View>
                    <Text style={style.textSign}>
                        Get Started
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default m;
