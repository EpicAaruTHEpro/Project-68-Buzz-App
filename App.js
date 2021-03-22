import * as React from 'react';
import FaceBook from './screens/fb';
import Instagram from './screens/in';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

var tabNavigator = createBottomTabNavigator({
  FaceBook: {screen:FaceBook}, Instagram: {screen:Instagram}
  });
const AppContainer = createAppContainer(tabNavigator);