// @flow
import React, {Component} from 'react';
import {View, Text, Button, ScrollView} from 'react-native';

type Props = {};
type State = {
  startTime: number,
  count: number,
};

class StopwatchScene extends Component<Props, State> {
  _interval: ?number;

  constructor() {
    super(...arguments);
    this.state = {
      startTime: Date.now(),
      count: 0,
    };
  }

  componentDidMount() {
    this._interval = setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      });
    }, 32);
  }

  componentWillUnmount() {
    if (this._interval != null) {
      clearInterval(this._interval);
    }
  }

  render() {
    let startTime = this.state.startTime;
    let seconds = (Date.now() - startTime) / 1000;
    return (
      <View style={{backgroundColor: '#eee', padding: 20, flex: 1}}>
        <Text>{seconds}</Text>
      </View>
    );
  }
}

export default StopwatchScene;
