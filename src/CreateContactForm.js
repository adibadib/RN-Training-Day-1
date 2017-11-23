// @flow
import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

type ContactDetail = {
  name: string,
  phoneNumber: string,
};

type Props = {
  onContactCreated: (contact: ContactDetail) => void,
};
type State = {
  name: string,
  phoneNumber: string,
};

export default class Contact extends Component<Props, State> {
  state = {
    name: '',
    phoneNumber: '',
  };

  render() {
    let submitHandler = () => {
      let newContact = {
        name: this.state.name,
        phoneNumber: this.state.phoneNumber,
      };
      this.props.onContactCreated(newContact);
    };
    return (
      <View style={styles.container}>
        <Text>Please Enter Name:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => this.setState({name: text})}
        />
        <Text>Please Enter Phone Number:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => this.setState({phoneNumber: text})}
        />
        <Button title="Save Contact" onPress={submitHandler} />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {},
  textInput: {
    height: 34,
    paddingHorizontal: 4,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 2,
    width: '100%',
  },
});
