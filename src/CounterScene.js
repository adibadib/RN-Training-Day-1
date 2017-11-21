// @flow
import React, {Component} from 'react';
import {Button, View, Text, Alert, Platform} from 'react-native';
import Touchable from './Touchable';

import styles from './CounterScene-styles';

type Props = {};
type State = {
  count: number,
};

class CounterScene extends Component<Props, State> {
  constructor() {
    super(...arguments);
    this.state = {
      count: 0,
    };
  }

  render() {
    let buttonPressHandler = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };
    return (
      <View style={styles.container}>
        <Text style={styles.counterText}>Count: {this.state.count}</Text>
        <Button title="Increase Count" onPress={buttonPressHandler} />
      </View>
    );
  }
}

export default CounterScene;
