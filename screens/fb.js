import * as React from 'react';
import {
    Text,
    View
} from 'react-native';
import AppHeader from "../components/AppHeader";
  
  export default class FaceBook extends React.Component {
      render() {
          return(
          <View>
          <AppHeader/>
              <Text style = {{textAlign: "center", fontFamily: "mono", color: "blue", fontSize: 20, marginTop: 200}}> FaceBook </Text>
        </View>
          )
      }
  }