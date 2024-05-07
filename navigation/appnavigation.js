// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import HomeScreen from '../Screens/HomeScreen';
// const Stack=createNativeStackNavigator();
// export default function AppNavigation(){
//     return (
//         <NavigationContainer>
// <Stack.Navigator>
//     <Stack.Screen name="Home" options={{headerShown:false}} component ={HomeScrren}/> 
// </Stack.Navigator>
//         </NavigationContainer>

//     )
// }
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen'; // Correct path and spelling
import MovieScreen from '../Screens/MovieScreen';
import PersonScreen from '../Screens/PersonScreen';
import SearchScreen from '../Screens/SearchScreen';
const Stack = createNativeStackNavigator(); // Consistent spacing and capitalization

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}  options={{ headerShown: false }} />
                <Stack.Screen name="movie" component={MovieScreen}  options={{ headerShown: false }} />
                <Stack.Screen name="Person" component={PersonScreen}  options={{ headerShown: false }} />
                <Stack.Screen name="Search" component={SearchScreen}  options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
