// @flow
import React, {Component} from 'react';
import {View, Text, Alert, Platform, StyleSheet} from 'react-native';
import Touchable from './Touchable';
import Button from './Button';
import Contact from './Contact';

let contactList = [
  {name: 'Simon', phoneNumber: '+19135381260'},
  {name: 'Joe', phoneNumber: '+18185551212'},
];

function ContactListScene() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Contact List</Text>
      </View>
      {contactList.map(contact => (
        <Contact key={contact.name} contact={contact} />
      ))}
      <Button label="Add New" onPress={() => console.log('add new')} />
    </View>
  );
}

let styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  title: {
    paddingVertical: 20,
  },
  titleText: {
    fontSize: 30,
  },
});

export default ContactListScene;
