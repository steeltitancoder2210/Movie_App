

import { View,Text, Dimensions, Platform, ScrollView,TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { useNavigation, useRoute } from "@react-navigation/native";
import { styles } from "./themes";
import MovieList from "../components/movielist";
import Loading from "../components/Loading";
import { fetchperson, fetchpersonMOvies, image342 } from "../ap/movieDb";
const { width, height } = Dimensions.get("window"); 
const isIOS = Platform.OS === "ios"; 

export default function PersonScreen() {
    const {params:item}=useRoute();
    const circleSize = Math.max(height, width) * 0.4;
    const navigation = useNavigation();
    const [isFavourite, setFavourite] = useState(true);
    const [PersonMOvies, setMOvies] = useState([]); 
    const [Person, setPerson] = useState([]); 

    const [loading,setLoading]=useState(false);
    useEffect(()=>{
setLoading(true);
getpersonDetails(item.id);
getpersonmovies(item.id);
    },[item]);
    const getpersonDetails=async id =>{
        const data=await fetchperson(id);
        // console.log("got ",data);
        if(data)
          setPerson(data);
        setLoading(false);
      }
    const getpersonmovies=async id =>{
        const data=await fetchpersonMOvies(id);
        // console.log("got ",data);
        if(data&&data.cast)
          setMOvies(data.cast);
        
      }

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
                            source={{uri:image342(Person?.profile_path)}} 
                            style={{ height: circleSize, width: circleSize }} 
                        />
                        </View>
                    </View>
                    <View  style={{marginTop:10}}>
                <Text style={{fontSize:30,color:"white",fontWeight:"bold",textAlign:"center"}} >
                   {Person?.name}
                   
                    </Text>  
                    <Text style={{fontSize:18,color:"grey",textAlign:"center"}} >
                   {Person?.place_of_birth}
                   
                    </Text>    
                    <View   style={{ padding:10,display:"flex",flexDirection:"row",marginHorizontal:10,marginTop:10,justifyContent:"space-between",alignItems:"center",backgroundColor:"#353839",borderBlockColor:"grey",borderRadius:50}}>
    <View style={{borderRightWidth:3,borderColor:"grey",paddingHorizontal:10,alignItems:"center"}}>
        <Text style={{color:"white",fontWeight:"600"}}>Gender</Text>
        <Text style={{color:"grey",fontWeight:"500"}}>{Person?.gender==1?"Female":"Male"}</Text>
    </View>
    <View style={{borderRightWidth:3,borderColor:"grey",paddingHorizontal:10,alignItems:"center"}}>
        <Text style={{color:"white",fontWeight:"600"}}>Birthday</Text>
        <Text style={{color:"grey",fontWeight:"500"}}>{Person?.birthday}</Text>
    </View>
    <View style={{borderRightWidth:3,borderColor:"grey",paddingHorizontal:10,alignItems:"center"}}>
        <Text style={{color:"white",fontWeight:"600"}}>Known for</Text>
        <Text style={{color:"grey",fontWeight:"500"}}>{Person?.known_for_department}</Text>
    </View>
    <View style={{borderColor:"grey",paddingHorizontal:10,alignItems:"center"}}>
        <Text style={{color:"white",fontWeight:"600"}}>Popularity</Text>
        <Text style={{color:"grey",fontWeight:"500"}}>{Person?.popularity?.toFixed(2)} %</Text>
    </View>
                    </View>
    
                    </View>
                    <View style={{marginHorizontal:10,marginVertical:10,justifyContent:"space-between"}}>
    <Text  style={{color:"white",fontWeight:"bold",fontSize:20}}>Biography</Text>
    <Text style={{color:"grey",marginTop:5}}>
    {
        Person?.biography||'N/A'
    }
    </Text>
                    </View>
    <MovieList title={"Movies"} hideSeeAll={true} data={PersonMOvies}/>
    
                </View>
       
    </ScrollView>
               
            )
        
       
    );
}
