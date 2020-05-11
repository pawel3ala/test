/* eslint-disable react/display-name */

import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapScreen from '../screens/MapScreen'
import DeckScreen from '../screens/DeckScreen'
import ReviewNavigator from '../navigation/ReviewNavigator'
import { Icon } from 'react-native-elements'

const Tab = createBottomTabNavigator()

const navigatorAllScreensOptions = ({ route }) => ({

  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'map') iconName = 'map'
    else if (route.name === 'deck') iconName = 'work'
    else if (route.name === 'review') iconName = 'bookmark'

    return (
      <Icon
        name={iconName}
        color={color}
        size={30}
      />
    )
  }
})

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={navigatorAllScreensOptions}
    >
      <Tab.Screen name="map" component={MapScreen} />
      <Tab.Screen name="deck" component={DeckScreen} />
      <Tab.Screen name="review" component={ReviewNavigator} />
    </Tab.Navigator>
  )
}
export default MainNavigator