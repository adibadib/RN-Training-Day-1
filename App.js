// @flow
import React, {Component} from 'react';
import {View, Text} from 'react-native';

let boxStyle = {
  padding: 20,
  margin: 20,
  borderWidth: 1,
  borderColor: 'red',
};

let textStyle = {
  color: 'blue',
};

function App() {
  return (
    <View style={boxStyle}>
      <Text style={textStyle}>Hello World!!!!</Text>
    </View>
  );
}

export default App;
