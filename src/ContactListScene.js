// @flow
import React, {Component} from 'react';
import {View, Text, Alert, Button, StyleSheet} from 'react-native';
import Contact from './Contact';
import CreateContactForm from './CreateContactForm';

type ContactDetail = {
  name: string,
  phoneNumber: string,
};

type Props = {};
type State = {
  contactList: Array<ContactDetail>,
};

class ContactListScene extends Component<Props, State> {
  state = {
    contactList: [
      {name: 'Simon', phoneNumber: '+19135381260'},
      {name: 'Joe', phoneNumber: '+18185551212'},
    ],
  };

  render() {
    let contactList = this.state.contactList;
    let onContactCreated = (newContact: ContactDetail) => {
      this.setState({
        contactList: [...contactList, newContact],
      });
    };
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Contact List</Text>
        </View>
        {contactList.map(contact => (
          <Contact key={contact.name} contact={contact} />
        ))}
        <CreateContactForm onContactCreated={onContactCreated} />
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
