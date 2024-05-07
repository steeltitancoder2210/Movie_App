import { View ,Text, Dimensions, TextInput, TouchableOpacity, useAnimatedValue, ScrollView, TouchableWithoutFeedback, Image} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { XMarkIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import Loading from "../components/Loading";
const{width,height}=Dimensions.get('window');
export default function SearchScreen() {
    const movieName="holakasholag";
    const navigation=useNavigation();
    const[results,useResults]=useState([9.8,5,4,3]);
    const [loading,setLoading]=useState(false);
    return (
        <SafeAreaView style={{backgroundColor:"black",flex:1}}>
            <View style={{marginTop:10,marginHorizontal:10,flexDirection:"row",justifyContent:"space-between",alignItems:"center",borderColor:"grey",borderRadius:30,borderWidth:1}} >
<TextInput placeholder="Search Movie"  placeholderTextColor="lightgrey" style={{paddingBottom:6,paddingLeft:15,flex:1,fontWeight:"400",color:"white"}}/>
           
        <Text>
            hola

        </Text>
        <TouchableOpacity onPress={()=>navigation.navigate("Home")} style={{borderRadius:20,padding:5,paddingLeft:6,margin:5,backgroundColor:"grey"}}>
<XMarkIcon size="25" color="white"/>
        </TouchableOpacity>
        </View>
        {
            loading?
            <Loading/>
            :
                
                    results.length>0?(<ScrollView  showsVerticalScrollIndicator={false}
                        contentContainerStyle={{padding:15}}
                        style={{}}
                        >
                <Text style={{color:"white",fontWeight:"500",marginLeft:5}}>
                Results({results.length})
                </Text>
                <View style={{marginTop:10,flexDirection:"row",justifyContent:"space-between",flexWrap:"wrap"}}>{
                    results.map((items,index)=>{
                        return(
                <TouchableWithoutFeedback
                keyy={index}
                onPress={()=>navigation.push("movie",items)}>
                <View  style={{marginBottom:10}}>
                    <Image style={{width:width*0.44,height:height*0.3,borderRadius:20}}  source={require('../assets/icon.png')}/>
                <Text style={{color:"lightgrey",marginLeft:5}}>{
                    movieName.length>22? movieName.slice(0,22)+'...':movieName}
                </Text>
                
                </View>
                
                </TouchableWithoutFeedback>
                        )
                    })
                }
                
                </View>
                        </ScrollView>):(
                
                            <View  style={{flexDirection:"row",justifyContent:"center",marginTop:100}}>
                                <Image source={require("../assets/download.jpeg")}style={{height:300,width:300}}/>
                                
                            </View>
                        )
                
            
        }


        
        </SafeAreaView>
    )
}