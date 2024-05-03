
import { View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback,Dimensions,Image} from 'react-native';
import React from 'react';
import { styles } from "../Screens/themes";
import { useNavigation } from '@react-navigation/native';
var{width,height}=Dimensions.get('window');
export default function MovieList({ title, data,hideSeeAll }) {
    let movieName="pokemon"
    const navigation=useNavigation();
    return (
        <View style={{ marginBottom: 8 }}>
            <View style={{ marginHorizontal: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
                    {title}
                </Text>
           {
            !hideSeeAll &&(
                <TouchableOpacity>
                <Text style={styles.text}>See All</Text>
            </TouchableOpacity>
            )
           }
           
            </View>
            <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{padding:15}}

            >{
                data.map((item,index)=>{
                    return (
                        <TouchableWithoutFeedback 
                         key={index}
                         onPress={()=> navigation.push('movie',item)}
                        >
                            <View style={{marginright:10, alignItems: 'center',padding:8}}>
                            <Image source={require('../assets/icon.png')}
          style={{
            width:width*0.33,
            height:height*0.22,
            borderRadius:10
          }} />
           <Text style={{color:"white",marginLeft:10}}>
                                {movieName .length>14?movieName.slice(0,14)+'...':movieName}
                            </Text>
                            </View>
                           
                        </TouchableWithoutFeedback>
                    )
                })
            }
</ScrollView>
        </View>
    );
}