import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import DepEstadualOne from './pages/appfinanceiro';



const  AppNavegacao = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <AppNavegacao.Navigator>
                <AppNavegacao.Screen options={{headerShown: false}} name="depestadualone" component={DepEstadualOne}/>
            </AppNavegacao.Navigator>
        </NavigationContainer>
    );
}