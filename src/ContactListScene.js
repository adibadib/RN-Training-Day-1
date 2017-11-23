// @flow
import React, {Component} from 'react';
import {View, Text, Alert, Button, StyleSheet} from 'react-native';
import Contact from './Contact';
import CreateContactForm from './CreateContactForm';
import dataStore from './dataStore';

type ContactDetail = {
  name: string,
  phoneNumber: string,
};

type Props = {};

class ContactListScene extends Component<Props> {
  componentWillMount() {
    dataStore.subscribe(() => {
      this.forceUpdate();
    });
  }

  render() {
    let {contactList} = dataStore.getState();
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Contact List</Text>
        </View>
        {contactList.map(contact => (
          <Contact key={contact.name} contact={contact} />
        ))}
        <CreateContactForm />
      </View>
    );
  }
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
