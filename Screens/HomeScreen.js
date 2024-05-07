import { View,Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import {Bars3CenterLeftIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import { styles } from "./themes";
import Trendingmovies from "../components/trendingmovies";
import MovieList from "../components/movielist";
import { useNavigation } from "@react-navigation/native";
import Loading from "../components/Loading";
import { fetchTopRatedMovies, fetchTrendingMovies, fetchUpcomingMovies } from "../ap/movieDb";

// import axios from "../api/api"
export default function HomeScreen(){
    const [trending,setTrending]=useState([1,2,3]);
    const [upcoming,setUpcoming]=useState([1,2,3]);
    const [toprated,settoprated]=useState([1,2,3]);
    const [loading,setLoading]=useState(false);
  const navigation=useNavigation();
useEffect(()=>{
getTrendMovies();
getUpcomingMovies();
getTopMovies();
},[])
const getTrendMovies=async()=>{
    const data=await fetchTrendingMovies();
   
    if(data&&data.results)
        setTrending(data.results);
    setLoading(false);
    
}
const getTopMovies=async()=>{
    const data=await fetchTopRatedMovies();
    
    if(data&&data.results)
        settoprated(data.results);
    setLoading(false);
    // trending =data;
}
const getUpcomingMovies=async()=>{
    const data=await fetchUpcomingMovies();
    
    if(data&&data.results)
        setUpcoming(data.results);
    setLoading(false);
    // trending =data;
}
 
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
            <TouchableOpacity onPress={()=>navigation.navigate('Search')}>
                <MagnifyingGlassIcon size="30" strokeWidth={2} color='white' />
            </TouchableOpacity>
        </View>

       </SafeAreaView>
       {
        loading?
        <Loading/>
        :
(
    <ScrollView
       showsVerticalScrollIndicator={false}
       contentContainerStyle={{paddingBottom:10}}>
<Trendingmovies data={trending}/>
<MovieList title='Upcoming' data={upcoming}/>
<MovieList title='Top Rated' data={toprated}/>
       </ScrollView>
)
       }
       
    </View>
)
}

