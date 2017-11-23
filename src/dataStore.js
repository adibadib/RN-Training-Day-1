// @flow
import {createStore} from 'redux';

let initialState = {
  contactList: [],
};

let reducer = (oldState, action) => {
  if (oldState == null) {
    return initialState;
  }
  if (action.type === 'NEW_CONTACT') {
    return {
      contactList: [...oldState.contactList, action.newContact],
    };
  }
  return oldState;
};

let dataStore = createStore(reducer);

export default dataStore;
