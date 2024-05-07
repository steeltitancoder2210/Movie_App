

import { View, Text, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { styles, theme } from './themes';
import { useNavigation, useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import CastList from '../components/cast';
import MovieList from '../components/movielist';
import Loading from '../components/Loading';

const { width, height } = Dimensions.get('window');

export default function MovieScreen() {
  const [isFavourite, setFavourite] = useState(false);
  const { params: movie } = useRoute();
  const [loading,setLoading]=useState(false);
  const navigation = useNavigation();

  // The cast array should contain objects with 'person' and 'character' keys
  const [cast, setCast] = useState([
    { person: 'John Wick', character: 'Wick' },
    { person: 'Neo', character: 'The One' },
    { person: 'Morpheus', character: 'Morpheus' },
    { person: 'Trinity', character: 'Trinity' },
  ]);
  const [similarMovies, setSimilarMovies] = useState([1,2,3,4,5,6])
  // Set a default movie name or get it from route params if available
  const movieName = movie?.name || 'Unknown Movie';

  useEffect(() => {
    // Perform any initialization logic or API calls if necessary
    console.log('Route params:', movie);
  }, [movie]);

  return (

    
      loading?
      <Loading/>
      :(
        <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        style={{ flex: 1, backgroundColor: '#000' }}
      >
        <SafeAreaView
          style={{
            position: 'absolute',
            zIndex: 10,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}
          
        >
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.background}>
            <ChevronLeftIcon size={28} strokeWidth={2.5} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setFavourite(!isFavourite)}>
            <HeartIcon size={35} color={isFavourite ? theme.background : 'white'} />
          </TouchableOpacity>
        </SafeAreaView>
       
          <View>
          <Image
            source={require('../assets/icon.png')}
            style={{ width: '100%', height: height * 0.55 }}
          />
          <LinearGradient
            colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
            style={{ width: '100%', height: 0.55 * height, position: 'absolute' }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
          />
        </View>
  
  
  
        
  
        <View
          style={{
            marginTop: -(height * 0.09),
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 30,
              fontWeight: 'bold',
            }}
          >
            {movieName}
          </Text>
          <Text
            style={{
              color: '#808080',
              fontWeight: '600',
              fontSize: 20,
              marginTop: 10,
            }}
          >
            Released . 2020 . 170 min
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              padding: 5,
            }}
          >
            <Text
              style={{
                color: '#808080',
                fontWeight: '600',
                fontSize: 20,
                marginRight: 5,
              }}
            >
              Action .
            </Text>
            <Text
              style={{
                color: '#808080',
                fontWeight: '600',
                fontSize: 20,
                marginRight: 5,
              }}
            >
              Thriller .
            </Text>
            <Text
              style={{
                color: '#808080',
                fontWeight: '600',
                fontSize: 20,
              }}
            >
              Adventure .
            </Text>
          </View>
          <Text
            style={{
              color: '#808080',
              marginHorizontal: 10,
              letterSpacing: 2,
            }}
          >
            Sample movie description goes here. // You might want to fix the other text issue with the long URLhhhhhhhhhhhhhhhhh
            jfhdtstyumkh
          </Text>
        </View>
  
        {/* Correctly use the CastList component */}
        <CastList navigation ={navigation}cast={cast} />
        <MovieList title="Similar Movies" hideSeeAll={true} data={similarMovies}/>
      </ScrollView>
      )
      
      
      
    
  );
}

