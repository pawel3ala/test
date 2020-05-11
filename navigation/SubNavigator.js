import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from '../screens/WelcomeScreen'
import AuthScreen from '../screens/AuthScreen'
import MainNavigator from './MainNavigator'

const Tab = createBottomTabNavigator()

const SubNavigator = () => {
    return (
        <Tab.Navigator>
        <Tab.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Tab.Screen name="AuthScreen" component={AuthScreen} />
        <Tab.Screen name="Main" component={MainNavigator} />
      </Tab.Navigator>
    )
}

export default SubNavigator
