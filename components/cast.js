

import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { fallbackPersonimage, image185 } from "../ap/movieDb";

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
          cast.map((person, index) => {
            // const { person, character } = member;
            // const displayCharacter =person?.character.length > 10 ? `${person?.character.slice(0, 10)}...` : person?.character ;
            // const displayPerson = person.length > 10 ? `${person.slice(0, 10)}...` : person;

            return (
              <TouchableOpacity key={index} onPress={()=>navigation.navigate('Person',person)} style={{ marginLeft: 10, alignItems: "center"}}>
                <Image
                  source={{uri:image185(person?.profile_path)||fallbackPersonimage}}
                  style={{
                    width: r,
                    height: r,
                    borderRadius: r/2,
                    
                  }}
                />
                <Text style={{ color: "white", fontSize: 15, marginTop: 10 }}>
                {person?.character.length>10?person.character.slice(0,10)+"...":person.character}
                </Text>
                <Text style={{ color: "#808080", fontSize: 14, marginTop: 10 }}>
                {person?.original_name.length>10?person.original_name.slice(0,10)+"...":person.original_name}
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
