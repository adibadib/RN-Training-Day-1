// @flow
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 20,
  },
  title: {
    paddingVertical: 20,
  },
  titleText: {
    fontSize: 30,
  },
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
