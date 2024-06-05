
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/index';
import MovieScreen from '../Screens/MovieScreen';
import PersonScreen from '../Screens/PersonScreen';
import SearchScreen from '../Screens/SearchScreen';
import Login from '../Screens/login';
import signup from '../Screens/signup';


const Stack = createNativeStackNavigator(); 

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="signup" component={signup} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={HomeScreen}  options={{ headerShown: false }} />
                <Stack.Screen name="movie" component={MovieScreen}  options={{ headerShown: false }} />
                <Stack.Screen name="Person" component={PersonScreen}  options={{ headerShown: false }} />
                <Stack.Screen name="Search" component={SearchScreen}  options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
