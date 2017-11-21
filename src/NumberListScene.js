// @flow
import React, {Component} from 'react';
import {View, Text, Button, ScrollView} from 'react-native';

type Props = {};
type State = {
  numbers: Array<number>,
};

class NumberListScene extends Component<Props, State> {
  constructor() {
    super(...arguments);
    this.state = {
      numbers: [0],
    };
  }

  render() {
    let numbers = this.state.numbers;
    let addHandler = () => {
      this.setState({
        numbers: [...numbers, numbers.length],
      });
    };
    return (
      <View style={{backgroundColor: '#eee', paddingTop: 20, flex: 1}}>
        <ScrollView style={{flex: 1, padding: 10}}>
          {numbers.map(num => <Text key={num}>{num}</Text>)}
        </ScrollView>
        <View style={{backgroundColor: '#999', justifyContent: 'center'}}>
          <Button title="Add Another" onPress={addHandler} />
        </View>
      </View>
    );
  }
}

export default NumberListScene;
