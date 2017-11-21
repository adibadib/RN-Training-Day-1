// @flow
import React, {Component} from 'react';
import {Button, View, Text, Alert, Platform} from 'react-native';
import Touchable from './Touchable';

import styles from './CounterScene-styles';
import Counter from './Counter';

type Props = {};
type State = {
  counterOne: number,
  counterTwo: number,
};

class CounterScene extends Component<Props, State> {
  constructor() {
    super(...arguments);
    this.state = {
      counterOne: 0,
      counterTwo: 0,
    };
  }

  render() {
    let resetHandler = () => {
      this.setState({
        counterOne: 0,
        counterTwo: 0,
      });
    };
    return (
      <View style={styles.container}>
        <Counter
          count={this.state.counterOne}
          onPress={() => this.setState({counterOne: this.state.counterOne + 1})}
        />
        <Counter
          count={this.state.counterTwo}
          onPress={() => this.setState({counterTwo: this.state.counterTwo + 1})}
        />
        <Button title="Reset All" onPress={resetHandler} />
      </View>
    );
  }
}

export default CounterScene;
