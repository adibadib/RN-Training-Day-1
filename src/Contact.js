// @flow
import React, {Component} from 'react';
import {View, Text, Alert, TouchableOpacity, StyleSheet} from 'react-native';

type ContactDetail = {
  name: string,
  phoneNumber: string,
};

type Props = {
  contact: ContactDetail,
};

export default function Contact(props: Props) {
  let {contact} = props;
  let onPress = () => {
    Alert.alert('Contact Pressed', `Phone number: ${contact.phoneNumber}`, [
      {text: 'Dismiss'},
    ]);
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.contact}>
        <View style={styles.profilePhoto}>
          <Text style={styles.letter}>{contact.name.charAt(0)}</Text>
        </View>
        <Text style={styles.contactName}>{contact.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

let styles = StyleSheet.create({
  contact: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
    flexDirection: 'row',
  },
  profilePhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#007',
    alignItems: 'center',
    justifyContent: 'center',
  },
  letter: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 28,
  },
  contactName: {
    marginLeft: 20,
    paddingTop: 20,
  },
});
