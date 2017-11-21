// @flow
import React, {Component} from 'react';
import {View, Text} from 'react-native';

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
  return (
    <View style={styles.contact}>
      {profilePhoto}
      <Text style={styles.contactName}>{contact.name}</Text>
    </View>
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
    </View>
  );
}

export default App;
