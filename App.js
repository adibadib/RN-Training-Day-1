// @flow
import React, {Component} from 'react';
import {View, Text} from 'react-native';

import styles from './App-styles';

let contactList = [
  {name: 'Ramzi', phoneNumber: '08123456789'},
  {name: 'Indra', phoneNumber: '085551212098'},
];

function Contact(props) {
  return (
    <View style={styles.contact}>
      <View style={styles.profilePhoto} />
      <Text style={styles.contactName}>{props.contact.name}</Text>
    </View>
  );
}

function App() {
  return (
    <View style={styles.container}>
      {contactList.map(contact => (
        <Contact key={contact.name} contact={contact} />
      ))}
    </View>
  );
}

export default App;
