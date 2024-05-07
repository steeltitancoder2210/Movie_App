

import { View,Text, Dimensions, Platform, ScrollView,TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./themes";
import MovieList from "../components/movielist";
import Loading from "../components/Loading";
const { width, height } = Dimensions.get("window"); 
const isIOS = Platform.OS === "ios"; 

export default function PersonScreen() {
    const circleSize = Math.max(height, width) * 0.4;
    const navigation = useNavigation();
    const [isFavourite, setFavourite] = useState(true);
    const [PersonMOvies, setMOvies] = useState([1,2,3,4]); de
    const [loading,setLoading]=useState(false);
    return (
        
            loading?
            <Loading/>
    :(
        <ScrollView 
        style={{ flex: 1, backgroundColor: "#000" }} 
        contentContainerStyle={{ paddingBottom: 20 }}
    >
        <SafeAreaView
            style={{
                zIndex: 10,
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 10,
                paddingVertical: 10,
            }}
        >
            <TouchableOpacity 
                onPress={() => navigation.goBack()} 
                style={styles.background}
            >
                <ChevronLeftIcon size={28} strokeWidth={2.5} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setFavourite(!isFavourite)}>
                <HeartIcon size={35} color={isFavourite ? "red" : "white"} />
            </TouchableOpacity>
        </SafeAreaView>

        
         <View>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center",shadowColor:"Green",shadowRadius:10,shadowOffset:{width:0,height:5},shadowOpacity:1 }}>
                
                    <View 
                        style={{
                            alignItems: "center", 
                            overflow: "hidden", 
                            height: circleSize, 
                            width: circleSize, 
                            borderRadius: circleSize/2,// Corrected borderRadius,
                            borderWidth:3,
                            borderColor:"#FFFDD0",
                            
                        }}
                    >
                        <Image 
                            source={require("../assets/icon.png")} 
                            style={{ height: circleSize, width: circleSize }} 
                        />
                        </View>
                    </View>
                    <View  style={{marginTop:10}}>
                <Text style={{fontSize:30,color:"white",fontWeight:"bold",textAlign:"center"}} >
                   person name
                   
                    </Text>  
                    <Text style={{fontSize:18,color:"grey",textAlign:"center"}} >
                   person name
                   
                    </Text>    
                    <View   style={{ padding:10,display:"flex",flexDirection:"row",marginHorizontal:10,marginTop:10,justifyContent:"space-between",alignItems:"center",backgroundColor:"#353839",borderBlockColor:"grey",borderRadius:50}}>
    <View style={{borderRightWidth:3,borderColor:"grey",paddingHorizontal:10,alignItems:"center"}}>
        <Text style={{color:"white",fontWeight:"600"}}>Gender</Text>
        <Text style={{color:"grey",fontWeight:"500"}}>Male</Text>
    </View>
    <View style={{borderRightWidth:3,borderColor:"grey",paddingHorizontal:10,alignItems:"center"}}>
        <Text style={{color:"white",fontWeight:"600"}}>Birthday</Text>
        <Text style={{color:"grey",fontWeight:"500"}}>Male</Text>
    </View>
    <View style={{borderRightWidth:3,borderColor:"grey",paddingHorizontal:10,alignItems:"center"}}>
        <Text style={{color:"white",fontWeight:"600"}}>Known for</Text>
        <Text style={{color:"grey",fontWeight:"500"}}>Male</Text>
    </View>
    <View style={{borderColor:"grey",paddingHorizontal:10,alignItems:"center"}}>
        <Text style={{color:"white",fontWeight:"600"}}>Popularity</Text>
        <Text style={{color:"grey",fontWeight:"500"}}>Male</Text>
    </View>
                    </View>
    
                    </View>
                    <View style={{marginHorizontal:10,marginVertical:10,justifyContent:"space-between"}}>
    <Text  style={{color:"white",fontWeight:"bold",fontSize:20}}>Biography</Text>
    <Text style={{color:"grey",marginTop:5}}>
    I am Prakhar Singhal.I'm a btech 2nd year CSE branch student at SKIT Jaipur.I am coding enthusiastic, passionate towards learning new technology , competitive programming and skills. I like problem solving .To achieve this, my commitment is that I'm determined to keep the momentum going and further sharpen my problem solving skills .
    
    "The journey of continuous learning and growth never stops"I am Prakhar Singhal.I'm a btech 2nd year CSE branch student at SKIT Jaipur.I am coding enthusiastic, passionate towards learning new technology , competitive programming and skills. I like problem solving .To achieve this, my commitment is that I'm determined to keep the momentum going and further sharpen my problem solving skills . "The journey of continuous learning and growth never stops"
    ActivityActivity
    635 followers635 followers
    
    Create a post
    </Text>
                    </View>
    <MovieList title={"Movies"} hideSeeAll={true} data={PersonMOvies}/>
    
                </View>
       
    </ScrollView>
               
            )
        
       
    );
}
