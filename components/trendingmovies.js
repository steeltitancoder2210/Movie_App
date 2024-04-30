import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableWithoutFeedback, Dimensions ,Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';
var{width,height}=Dimensions.get('window');

export default function TrendingMovies({ data }) {
    const navigation=useNavigation();
    const handleClick=()=>{
navigation.navigate("Movie",item);
    }
    return (
        <View style={{ marginBottom: 8 }}>
            <Text style={{ color: 'white', fontSize: 20, marginHorizontal: 9, marginBottom: 5,fontWeight:"bold" }}>
                Trending
            </Text>
            <Carousel
                data={data}
                renderItem={({ item }) => <MovieCard item={item} handleClick={handleClick} />}
                firstItem={1}
                inactiveSlideOpacity={0.68}
                sliderWidth={width}
                itemWidth={width*0.62 }
                slideStyle={{ display: 'flex', alignItems: 'center' }}
            />
        </View>
    );
}

const MovieCard = ({ item,handleClick}) => {
    return (
        <TouchableWithoutFeedback>
          <Image source={require('../assets/icon.png')}
          style={{
            width:width*0.6,
            height:height*0.4,
            borderRadius:30
          }} />
        </TouchableWithoutFeedback>
    );
};
