// @flow
import React, {Component} from 'react';
import {Button, View, Text, Alert, Platform} from 'react-native';
import Touchable from './Touchable';

import styles from './CounterScene-styles';

type Props = {
  count: number,
  onPress: Function,
};

class Counter extends Component<Props> {
  render() {
    return (
      <View>
        <Text style={styles.counterText}>Count: {this.props.count}</Text>
        <Button title="Increase Count" onPress={this.props.onPress} />
      </View>
    );
  }
}

export default Counter;
