

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
import PropTypes from 'prop-types';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import { fetchMovieDetail, fetchcredit, fetchsimilar, image500 } from '../ap/movieDb';

const { width, height } = Dimensions.get('window');

export default function MovieScreen() {
  const [isFavourite, setFavourite] = useState(false);
  const { params: movie } = useRoute();
  const [loading,setLoading]=useState(false);
  const navigation = useNavigation();
  const[movies,setmovie]=useState({});
  
  // The cast array should contain objects with 'person' and 'character' keys
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([])
  // Set a default movie name or get it from route params if available
  const movieName = movie?.name || 'Unknown Movie';

  useEffect(() => {
   
    setLoading(true);
    getMovieDetails(movie.id);
    getMovieCredits(movie.id);
    getSimilarMovies(movie.id);
    
  }, [movie]);
const getMovieDetails=async id =>{
  const data=await fetchMovieDetail(id);
  // console.log("got ",data);
  if(data)
    setmovie(data);
  setLoading(false);
}
const getMovieCredits=async id =>{
  const data=await fetchcredit(id);
  // console.log("got ",data);
  if(data && data.cast)

    setCast(data.cast);
  // setLoading(false);
}
const getSimilarMovies=async id =>{
  const data=await fetchsimilar(id);
  // console.log("got ",data);
  if(data && data.results)

    setSimilarMovies(data.results);
  // setLoading(false);
}
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
            source={{uri:image500(movies?.poster_path)}}
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
            {movies?.title}
          </Text>
          <Text
            style={{
              color: '#808080',
              fontWeight: '600',
              fontSize: 20,
              marginTop: 10,
            }}
          >
            
            
              {movies?.status} . {movies?.release_date?.split('-')[0]} .{movies?.runtime} min
            
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              padding: 5,
            }}
          >
          {
            movies?.genres?.map((genre,index)=>{
              let dot=index+1!=movies.genres.length;
              return (
                <Text key={index}
              style={{
                color: '#808080',
                fontWeight: '600',
                fontSize: 20,
                marginRight: 5,
              }}
            >
              {genre?.name} {dot?".":null}
            </Text>
              )
            }
            
          )
          }
           
            
          </View>
          <Text
            style={{
              color: '#808080',
              marginHorizontal: 10,
              letterSpacing: 2,
            }}
          >
           {
            movies?.overview
           }
          </Text>
        </View>
  
        {/* Correctly use the CastList component */}
        <CastList navigation ={navigation}cast={cast} />
      <MovieList title={"Similar Movies"} hideSeeAll={true} data={similarMovies}/>
      </ScrollView>
      )
      
      
      
    
  );
}

