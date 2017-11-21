// @flow
import React, {Component} from 'react';
import {View, Text, Alert, Platform} from 'react-native';
import Touchable from './src/Touchable';
import Button from './src/Button';

import styles from './App-styles';

let contactList = [
  {name: 'Ramzi', phoneNumber: '08123456789'},
  {name: 'Indra', phoneNumber: '085551212098'},
];

function Contact(props) {
  let {contact, showPhoto} = props;
  let profilePhoto =
    showPhoto === true ? (
      <View style={styles.profilePhoto}>
        <Text style={styles.letter}>{contact.name.charAt(0)}</Text>
      </View>
    ) : null;
  let onPress = () => {
    Alert.alert('Contact Pressed', `Phone number: ${contact.phoneNumber}`, [
      {text: 'Dismiss'},
    ]);
  };
  return (
    <Touchable onPress={onPress}>
      <View style={styles.contact}>
        {profilePhoto}
        <Text style={styles.contactName}>{contact.name}</Text>
      </View>
    </Touchable>
  );
}

function App() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Contact List</Text>
      </View>
      {contactList.map(contact => (
        <Contact key={contact.name} contact={contact} showPhoto={true} />
      ))}
      <Button label="Add New" onPress={() => console.log('add new')} />
    </View>
  );
}

export default App;
