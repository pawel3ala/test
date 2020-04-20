import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux'
import store from './store'

import WelcomeScreen from './screens/WelcomeScreen'
import AuthScreen from './screens/AuthScreen'
import DeckScreen from './screens/DeckScreen'
import MapScreen from './screens/MapScreen'
import ReviewScreen from './screens/ReviewScreen'
import SettingsScreen from './screens/SettingsScreen'
import { Button, Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator()
const Tab2 = createBottomTabNavigator()
const Stack = createStackNavigator();



const Main = () => {
  return (
    <Tab2.Navigator>
      <Tab2.Screen name="map" component={MapScreen} />
      <Tab2.Screen name="deck" component={DeckScreen} />
      <Tab2.Screen name="rewiew" component={Review} />
    </Tab2.Navigator>

  )
}


const Review = ({navigation}) => {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Review"
        component={ReviewScreen}
        options={{
          // eslint-disable-next-line react/display-name
          headerRight: () => {
            return (
              <Button
                title="Settings"
                onPress={() => navigation.navigate('settings')}
                backgroundColor="rgba(0,0,0,0)"
                color="rgba(0, 122, 255, 1)"
              />
            )
          },

        }}
      />
      <Stack.Screen name="settings" component={SettingsScreen} />
    </Stack.Navigator >
  );
}


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Tab.Screen name="AuthScreen" component={AuthScreen} />
          <Tab.Screen name="Main" component={Main} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}