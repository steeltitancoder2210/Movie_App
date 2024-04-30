import { View,Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import {Bars3CenterLeftIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import { styles } from "./themes";
import Trendingmovies from "../components/trendingmovies";
import MovieList from "../components/movielist";
export default function HomeScreen(){
    const [trending,setTrending]=useState([1,2,3]);
    const [upcoming,setUpcoming]=useState([1,2,3]);
    const [toprated,settoprated]=useState([1,2,3]);

return (
    <View  style={{ flex: 1, backgroundColor: '#0A0A0A' }}>
       <SafeAreaView style={{marginBottom:10}}>
        <StatusBar style="light"/>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal : 7,marginTop:33 }}>
            <Bars3CenterLeftIcon size="30" strokeWidth={2} color='white' />
            <Text style={{color:"white" ,fontSize:25,fontWeight:"bold"}}>
                <Text style={styles.text}>M</Text>
                ovies
            </Text>
            <TouchableOpacity>
                <MagnifyingGlassIcon size="30" strokeWidth={2} color='white' />
            </TouchableOpacity>
        </View>

       </SafeAreaView>
       <ScrollView
       showsVerticalScrollIndicator={false}
       contentContainerStyle={{paddingBottom:10}}>
<Trendingmovies data={trending}/>
<MovieList title='Upcoming' data={upcoming}/>
<MovieList title='Top Rated' data={toprated}/>
       </ScrollView>
    </View>
)
}

