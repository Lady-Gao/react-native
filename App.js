import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator,createBottomTabNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import { Provider } from 'react-redux';
import configureStore from './src/store.js';
const store = configureStore();
import Car from './src/view/car'
import Home from './src/view/home'

class Hotme extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}
class Care extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}
const TabNavigator = createBottomTabNavigator({
  Home: Home,
  car: Car,
});
const AppContainer = createAppContainer(TabNavigator);


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
      <AppContainer />
    </Provider>
    )
  }
}