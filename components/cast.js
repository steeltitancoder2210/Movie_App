// import { View,Text, ScrollView, TouchableOpacity } from "react-native";
// import React from "react";
// export default function cast(cast){
//     let person="kk";
//     let character="jon wicks"
//     return (
//         <View style={{marginVertical:12}}>
//             <Text style={{color:"white",justifyContent:"space-around",marginHorizontal:10,marginBottom:10}}>
//                 ToP Cast
//             </Text>
// <ScrollView  horizontal={true}
// showsHorizontalScrollIndicator={false}
// contentContainerStyle={{padding:15}}  >
//     {
//         cast &&cast.map((person,index)=>{
//             return (
//                 <TouchableOpacity  key={index} style={{marginLeft:10,alignItems:"Center"}}>
// <Text style={{color:"white",fontSize:10,marginTop:10}}>{


// character.length>10?character .slice(0,10)+'....':character}
// <Image source={require('../assets/icon.png')}
//           style={{
//             width:50,
//             height:20,
//             borderRadius:10
//           }} />
// </Text>
// <Text style={{color:'#808080',fontSize:10,marginTop:10}}>{


// person.length>10?person .slice(0,10)+'....':person}
// </Text>


//                 </TouchableOpacity>
//             )
//         })
//     }

// </ScrollView>

//         </View>
//     )
// }

import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";

export default function CastList({ cast,navigation }) {
  const r=80;
  return (
    <View style={{ marginVertical: 12 }}>
      <Text style={{ color: "white", marginHorizontal: 10, marginBottom: 10 ,fontWeight:"bold",marginTop:10,fontSize:20}}>
        Top Cast
      </Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ padding: 15 }}
      >
        {cast && cast.length > 0 ? (
          cast.map((member, index) => {
            const { person, character } = member;
            const displayCharacter = character.length > 10 ? `${character.slice(0, 10)}...` : character;
            const displayPerson = person.length > 10 ? `${person.slice(0, 10)}...` : person;

            return (
              <TouchableOpacity key={index} onPress={()=>navigation.navigate('Person',person)} style={{ marginLeft: 10, alignItems: "center"}}>
                <Image
                  source={require('../assets/icon.png')}
                  style={{
                    width: r,
                    height: r,
                    borderRadius: r/2,
                    
                  }}
                />
                <Text style={{ color: "white", fontSize: 15, marginTop: 10 }}>
                  {displayCharacter}
                </Text>
                <Text style={{ color: "#808080", fontSize: 14, marginTop: 10 }}>
                  {displayPerson}
                </Text>
              </TouchableOpacity>
            );
          })
        ) : (
          <Text style={{ color: "white", fontSize: 12 }}>No cast available.</Text>
        )}
      </ScrollView>
    </View>
  );
}
